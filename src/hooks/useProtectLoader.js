import { useAuthSlice } from "@/redux/slices/auth.slice";
import { useLayoutEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const useProtectLoader = () => {
    const loaderRoles = useLoaderData();
    const navigate = useNavigate();
    const { user } = useAuthSlice();

    useLayoutEffect(() => {
        if (!loaderRoles?.roles || !loaderRoles?.to) return;

        const { roles, to } = loaderRoles;

        if (user && !roles.includes(user?.user_role)) {
            navigate(to, { replace: true });
        }
    }, [user, loaderRoles?.roles, loaderRoles?.to]);
};

export default useProtectLoader;
