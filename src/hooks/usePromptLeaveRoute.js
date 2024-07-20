import { useCallback } from "react";
import { useBlocker } from "react-router-dom";

const useBlockerRoute = (when) => {
    let shouldBlock = useCallback(
        ({ currentLocation, nextLocation }) =>
            when && currentLocation.pathname !== nextLocation.pathname,
        [when]
    );

    return useBlocker(shouldBlock);
};

export default useBlockerRoute;
