import { cn } from "@/lib/utils";
import { memo, useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ route }) => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (route.to || !route?.children?.length) return undefined;

        let isMounted = true;

        if (isMounted) {
            setOpen(route.children.map((t) => t.to).includes(pathname));
        }

        return () => {
            isMounted = false;
        };
    }, [pathname]);

    const activeLink = useCallback(
        (className) =>
            ({ isActive }) => {
                return cn(
                    `flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 group`,
                    isActive ? "bg-gray-100 text-gray-900" : "",
                    className
                );
            },
        []
    );

    const classIconParent = "w-5 h-5 transition duration-75 group-hover:text-gray-900";

    const Component = route.to ? NavLink : "div";

    return (
        <li>
            <Component
                {...(route.to ? { to: route.to, end: true, caseSensitive: true } : {})}
                onClick={!route.to ? () => setOpen(!open) : undefined}
                className={
                    route.to
                        ? activeLink()
                        : "flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 group"
                }
            >
                {route.icon(classIconParent)}

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    {route.name}
                </span>

                {route.children.length ? (
                    <svg
                        className={`w-3 h-3 transition duration-500 ${open ? "rotate-180" : ""}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                ) : null}
            </Component>

            {route.children.length ? (
                <ul id="dropdown-example" className={`${!open ? "hidden" : ""} py-2 space-y-2`}>
                    {route.children.map((child, index) => (
                        <li key={`route-child-${index}`}>
                            <NavLink to={child.to} className={activeLink("pl-11")}>
                                {child.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

NavItem.displayName = "NavItem";

export default memo(NavItem);
