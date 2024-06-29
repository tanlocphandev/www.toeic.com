import { useEffect } from "react";

/**
 * useEffect hook that sets custom errors on the form based on the provided errors object.
 * @param {Object} options
 * @param {Object} options.errors - The errors object containing key-value pairs of error messages.
 * @param {Object} options.form - The form object to set custom errors on.
 * @return {Function} A cleanup function to reset the mounting flag.
 */
const useErrorMessage = ({ errors, form }) => {
    useEffect(() => {
        if (!errors) return;

        let isMounting = true;

        if (isMounting) {
            Object.keys(errors).forEach((key) => {
                form.setError(key, { type: "custom", message: errors[key] });
            });
        }

        return () => {
            isMounting = false;
        };
    }, [errors, form]);
};

export default useErrorMessage;
