import { cn } from "@/lib/utils";
import React, { memo, useMemo } from "react";

const hasColor = (colorInput, color) => {
    return colorInput === color;
};

const StatisticBox = ({ title, type, text, color }) => {
    const SwitchIcon = useMemo(() => {
        return {
            correct: "✔",
            wrong: "✖",
            skip: "➖",
            clock: "⏳",
        }[type];
    }, [type]);

    return (
        <div
            className={cn(
                "flex items-center justify-between border border-l-4 rounded-lg w-[25%] px-4 py-2",
                {
                    "border-gray-500": hasColor(color, "gray"),
                    "border-green-500": hasColor(color, "green"),
                    "border-red-500": hasColor(color, "red"),
                    "border-yellow-500": hasColor(color, "yellow"),
                }
            )}
        >
            <div>
                <p className="text-md font-semibold">{title}</p>
                <p className="text-xl font-bold">{text}</p>
            </div>

            <div
                className={cn("rounded-full w-10 h-10 flex items-center justify-center", {
                    "bg-gray-500": hasColor(color, "gray"),
                    "bg-green-500": hasColor(color, "green"),
                    "bg-red-500": hasColor(color, "red"),
                    "bg-yellow-500": hasColor(color, "yellow"),
                })}
            >
                <span
                    className={cn(
                        "bg-white rounded-full w-8 h-8 flex items-center justify-center",
                        {
                            "text-green-500": hasColor(color, "green"),
                            "text-red-500": hasColor(color, "red"),
                            "text-yellow-500": hasColor(color, "yellow"),
                            "text-gray-500": hasColor(color, "gray"),
                        }
                    )}
                >
                    {SwitchIcon}
                </span>
            </div>
        </div>
    );
};

StatisticBox.displayName = "StatisticBox";

export default memo(StatisticBox);
