import LocalStorage from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const getAuth = LocalStorage.getAuth();

const initialState = {
    user: null,
    accessToken: getAuth.accessToken,
    refreshToken: getAuth.refreshToken,
    userId: getAuth.userId,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, { payload }) => {
            const { accessToken, refreshToken, userId } = payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.userId = userId;
            LocalStorage.setAuth({ accessToken, refreshToken, userId });
        },

        setRenewToken: (state, { payload }) => {
            const { accessToken, refreshToken } = payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
        },

        removeAuth: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.userId = null;
            LocalStorage.removeAuth();
        },

        setUserInfo: (state, { payload }) => {
            state.user = payload;
        },
    },
});

export const useAuthSlice = () => useSelector((state) => state.auth);
export const authActions = authSlice.actions;
export default authSlice.reducer;
