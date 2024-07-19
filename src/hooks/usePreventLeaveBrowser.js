import { useEffect } from "react";

const usePreventLeaveBrowser = () => {
    useEffect(() => {
        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };

        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);
};

export default usePreventLeaveBrowser;
