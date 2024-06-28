import { useEffect, useState } from "react";

/**
 * Custom hook that debounces the value and returns the debounced value after a specified duration.
 *
 * @param {any} value - The value to be debounced.
 * @param {number} [duration=500] - The duration in milliseconds to wait before updating the debounced value.
 * @return {any} The debounced value.
 */
const useDebounce = (value, duration = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), duration);

        return () => {
            clearTimeout(timer);
        };
    }, [value, duration]);

    return debouncedValue;
};

export default useDebounce;
