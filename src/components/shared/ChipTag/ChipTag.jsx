import { cn } from "@/lib/utils";
import React from "react";

const ChipTag = ({ text, className }) => {
    return (
        <p className={cn(`bg-gray-500 text-white px-1 rounded pb-1 inline-block`, className)}>
            {text}
        </p>
    );
};

export default ChipTag;
