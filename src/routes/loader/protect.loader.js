import LocalStorage from "@/utils/localStorage";
import { redirect } from "react-router-dom";

/**
 * Returns a function that checks if the user is authenticated and has the necessary roles to access a protected route.
 * @param {string[]} roles - The roles required to access the protected route.
 * @return {Function} A function that checks if the user is authenticated and has the necessary roles.
 */
const protectLoader = (roles = []) => {
    return async () => {
        const { accessToken, refreshToken, userId } = LocalStorage.getAuth();

        if (!accessToken || !refreshToken || !userId) return redirect("/login");

        return { roles };
    };
};

export default protectLoader;
