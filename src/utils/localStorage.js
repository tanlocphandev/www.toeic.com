import { LOCAL_KEYS } from "@/constants";

class LocalStorage {
    static get(key) {
        return localStorage.getItem(key);
    }

    static set(key, value) {
        localStorage.setItem(key, value);
    }

    static remove(key) {
        localStorage.removeItem(key);
    }

    static setAuth({ accessToken, refreshToken, userId }) {
        accessToken && LocalStorage.set(LOCAL_KEYS.ACCESS_TOKEN, accessToken);
        refreshToken && LocalStorage.set(LOCAL_KEYS.REFRESH_TOKEN, refreshToken);
        userId && LocalStorage.set(LOCAL_KEYS.USER_ID, userId);
    }

    static removeAuth() {
        LocalStorage.remove(LOCAL_KEYS.ACCESS_TOKEN);
        LocalStorage.remove(LOCAL_KEYS.REFRESH_TOKEN);
        LocalStorage.remove(LOCAL_KEYS.USER_ID);
    }

    static getAuth() {
        return {
            accessToken: LocalStorage.get(LOCAL_KEYS.ACCESS_TOKEN) || null,
            refreshToken: LocalStorage.get(LOCAL_KEYS.REFRESH_TOKEN) || null,
            userId: LocalStorage.get(LOCAL_KEYS.USER_ID) || null,
        };
    }
}

export default LocalStorage;
