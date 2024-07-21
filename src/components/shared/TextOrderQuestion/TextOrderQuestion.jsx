import { cn } from "@/lib/utils";
import React from "react";

const TextOrderQuestion = ({ order, orderGroup = null, className }) => {
    if (orderGroup) {
        return (
            <p
                className={cn(
                    "text-[#34447c] mb-3 text-sm font-medium bg-blue-600/10 px-3 py-2 inline-block rounded-sm",
                    className
                )}
            >
                {orderGroup}
            </p>
        );
    }

    return (
        <p
            className={cn(
                "mr-3 w-[35px] h-[35px] text-sm bg-[#e3faff] rounded-full flex items-center justify-center text-[#34447c] font-medium",
                className
            )}
        >
            {order}
        </p>
    );
};

export default TextOrderQuestion;
