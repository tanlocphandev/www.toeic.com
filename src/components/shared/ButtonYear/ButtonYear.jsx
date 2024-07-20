import { cn } from "@/lib/utils";
import React from "react";

const ButtonYear = ({ year, isActive, className, ...props }) => {
    return (
        <button
            className={cn(
                "text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]",
                { "bg-[#34447c] text-white": isActive },
                className
            )}
            {...props}
        >
            {year}
        </button>
    );
};

export default ButtonYear;
