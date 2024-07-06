import { memo, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ButtonScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center focus:outline-none hover:bg-blue-800 transition-opacity fixed bottom-12 right-5`}
        >
            <div className="bg-white rounded-full text-black p-2">
                <FaArrowUp className="w-6 h-6" />
            </div>
        </button>
    );
};

ButtonScrollTop.displayName = "ButtonScrollTop";

export default memo(ButtonScrollTop);
