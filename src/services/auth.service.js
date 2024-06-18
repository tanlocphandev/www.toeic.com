import { HEADERS } from "@/constants";
import http from "@/lib/http";

const ENDPOINT = "/auth";

class AuthService {
    static register(payload) {
        return http.post(`${ENDPOINT}/register`, payload);
    }

    static login(payload) {
        return http.post(`${ENDPOINT}/login`, payload);
    }

    static getMe(payload) {
        return http.get(`${ENDPOINT}/me`, payload);
    }

    static refresh(refreshToken) {
        return http.post(
            `${ENDPOINT}/refresh`,
            {},
            {
                headers: {
                    [HEADERS.REFRESH_TOKEN]: refreshToken,
                },
            }
        );
    }

    static logout(userId) {
        return http.post(
            `${ENDPOINT}/logout`,
            {},
            {
                headers: {
                    [HEADERS.LOGOUT]: userId,
                },
            }
        );
    }
}

export default AuthService;
