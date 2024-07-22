import { cn } from "@/lib/utils";
import React, { memo } from "react";

const ButtonControl = ({ className, ...props }) => {
    return (
        <button
            className={cn(
                "w-[33px] h-[33px] flex items-center justify-center rounded-full hover:bg-gray-200",
                className
            )}
            {...props}
        />
    );
};

ButtonControl.displayName = "ButtonControl";

export default memo(ButtonControl);
