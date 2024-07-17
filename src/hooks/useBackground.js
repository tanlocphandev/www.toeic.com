import { useLayoutEffect } from "react";

/**
 * Custom hook to set background image for a given selector element.
 *
 * @param {Object} selector - The selector element to apply the background image.
 * @param {string} backgroundImage - The path to the background image, defaults to "bg-statistical.jpg".
 * @return {Function} A cleanup function to reset the background image on unmount.
 */
const useBackground = ({ selector, backgroundImage = "bg-statistical.jpg" }) => {
    useLayoutEffect(() => {
        document.querySelector(
            selector
        ).classList = `bg-[url('/${backgroundImage}')] w-full bg-no-repeat bg-cover bg-bottom`;

        return () => {
            document.querySelector(
                selector
            ).classList = `bg-[url('/${backgroundImage}')] w-full bg-no-repeat bg-cover bg-bottom`;
        };
    }, [selector, backgroundImage]);
};

export default useBackground;
