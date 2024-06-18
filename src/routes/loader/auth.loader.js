import LocalStorage from "@/utils/localStorage";

export const authLoader = () => {
    const { accessToken, refreshToken, userId } = LocalStorage.getAuth();

    if (!accessToken || !refreshToken || !userId) return null;

    return null;
};
