import LocalStorage from "@/utils/localStorage";
import { redirect } from "react-router-dom";

export const authLoader = () => {
    const { accessToken, refreshToken, userId } = LocalStorage.getAuth();

    if (!accessToken || !refreshToken || !userId) return null;

    return redirect("/");
};
