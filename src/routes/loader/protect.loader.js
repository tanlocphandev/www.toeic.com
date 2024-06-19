import LocalStorage from "@/utils/localStorage";
import { redirect } from "react-router-dom";

/**
 * Returns a function that checks if the user is authenticated and has the necessary roles to access a protected route.
 *
 * @param {Object} options - The options object.
 * @param {string[]} options.roles - The roles required to access the protected route.
 * @param {string} options.to - The route to redirect to if the user has the necessary roles.
 * @return {Function} A function that checks if the user is authenticated and has the necessary roles.
 */
const protectLoader =
    ({ roles = [], to }) =>
    async () => {
        const { accessToken, refreshToken, userId } = LocalStorage.getAuth();

        if (!accessToken || !refreshToken || !userId) return redirect("/login");

        if (!roles.length) return redirect(to);

        return { roles, to };
    };

export default protectLoader;
