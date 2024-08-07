import { useEffect } from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";

const NavigationScroll = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return (
        <>
            {children}
            <ScrollRestoration />
        </>
    );
};

export default NavigationScroll;
