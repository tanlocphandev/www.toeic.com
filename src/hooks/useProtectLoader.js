import { useAuthSlice } from "@/redux/slices/auth.slice";
import { useLayoutEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

/**
 * A custom hook that protects the loader data by redirecting to a different route if the user's role is not in the allowed roles.
 *
 * @return {void}
 */
const useProtectLoader = () => {
    const loaderRoles = useLoaderData();
    const navigate = useNavigate();
    const { user } = useAuthSlice();

    useLayoutEffect(() => {
        if (!loaderRoles?.roles) return;

        const { roles } = loaderRoles;

        if (user && !roles.includes(user?.user_role)) {
            navigate("/403", { replace: true });
            return;
        }
    }, [user, loaderRoles?.roles]);

    return user;
};

export default useProtectLoader;
