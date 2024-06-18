import { FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { memo, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa";

/**
 * InputPassword component is a custom input field for password entry. It allows the user to toggle the visibility of the password.
 *
 * @param {object} props - The props object containing any additional properties to be passed to the component.
 * @return {JSX.Element} A React component that renders an input field for password entry with a toggle password visibility button.
 */
const InputPassword = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const classIconTogglePassword =
        "absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 cursor-pointer hover:text-gray-900 transition-colors";

    const handleTogglePassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <div className="relative">
            <RiLockPasswordLine className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />

            <FormControl>
                <Input type={showPassword ? "text" : "password"} className="px-10" {...props} />
            </FormControl>

            {showPassword ? (
                <FaRegEyeSlash onClick={handleTogglePassword} className={classIconTogglePassword} />
            ) : (
                <FaRegEye onClick={handleTogglePassword} className={classIconTogglePassword} />
            )}
        </div>
    );
};

export default memo(InputPassword);
