import { HEADERS } from "@/constants";
import { authActions } from "@/redux/slices/auth.slice";
import store from "@/redux/store";
import AuthService from "@/services/auth.service";
import LocalStorage from "@/utils/localStorage";
import axios, { isAxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_END_POINT;

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

let isRefreshing = false;
let failedQueue = [];
let showLogout = false;

http.interceptors.request.use(
    (config) => {
        const { accessToken, refreshToken, userId } = store.getState()["auth"];

        if (!accessToken || !refreshToken || !userId) return config;

        config.headers[HEADERS.AUTHORIZATION] = `Bearer ${accessToken}`;
        config.headers[HEADERS.X_CLIENT_ID] = `${userId}`;

        return config;
    },
    (error) => Promise.reject(error)
);

const processQueue = (error) => {
    failedQueue.forEach((prom) => {
        if (error) prom.reject(error);
        else prom.resolve();
    });

    failedQueue = [];
};

const renewToken = async (refreshToken) => {
    try {
        const { metadata } = await AuthService.refresh(refreshToken);
        const { tokens } = metadata;
        LocalStorage.setAuth({ ...tokens });
        store.dispatch(authActions.setRenewToken({ ...tokens }));
        processQueue(null);
    } catch (error) {
        processQueue(error);
        throw error;
    }
};

const getNewToken = async (refreshToken) => {
    if (!isRefreshing) {
        isRefreshing = true;
        await renewToken(refreshToken);
        isRefreshing = false;
        return;
    }

    return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
    });
};

http.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        if (!isAxiosError(error)) return Promise.reject(error);

        const originalRequest = error.config;

        showLogout =
            error.response?.status === 401 &&
            error.response?.headers[HEADERS.SHOULD_LOGOUT] === "true";

        if (showLogout) {
            store.dispatch(authActions.removeAuth());
            return Promise.reject(error);
        }

        const shouldRenewToken =
            error.response?.status === 401 &&
            !originalRequest._retry &&
            error.response?.data?.message === "jwt expired";

        if (shouldRenewToken) {
            originalRequest._retry = true;
            const { refreshToken } = store.getState()["auth"];

            try {
                await getNewToken(refreshToken);

                const controller = new AbortController();

                if (showLogout) {
                    controller.abort();
                    showLogout = false;
                }

                return http({ ...originalRequest, signal: controller.signal });
            } catch (error) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export default http;
