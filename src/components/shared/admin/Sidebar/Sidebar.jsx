import { adminRoutes, teacherRoutes } from "@/components/shared/admin/route.config";
import NavItem from "@/components/shared/admin/Sidebar/NavItem";
import { USER_ROLES } from "@/constants";
import { useAuthSlice } from "@/redux/slices/auth.slice";
import { memo, useMemo } from "react";

const Sidebar = () => {
    const { user } = useAuthSlice();

    const routes = useMemo(() => {
        if (!user) return [];

        if (user?.user_role === USER_ROLES.ADMIN) return adminRoutes;

        if (user?.user_role === USER_ROLES.TEACHER) return teacherRoutes;

        return [];
    }, [user]);

    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium">
                    {routes.map((route, index) => (
                        <NavItem route={route} key={index} />
                    ))}
                </ul>
            </div>
        </aside>
    );
};

Sidebar.displayName = "Sidebar";

export default memo(Sidebar);
