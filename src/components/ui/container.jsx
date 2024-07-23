import { cn } from "@/lib/utils";
import React, { memo } from "react";

const Container = ({ className, ...props }) => {
    return (
        <div className={cn("max-w-6xl mx-auto p-2 scroll-smooth relative", className)} {...props} />
    );
};

Container.displayName = "Container";

export default memo(Container);
