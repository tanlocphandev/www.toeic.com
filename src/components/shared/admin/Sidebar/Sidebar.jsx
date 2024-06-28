import routes from "@/components/shared/admin/route.config";
import NavItem from "@/components/shared/admin/Sidebar/NavItem";
import { memo } from "react";

const Sidebar = () => {
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
