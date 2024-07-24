import Head from "@/components/shared/Head";
import { cn } from "@/lib/utils";
import { memo } from "react";

const Container = ({ className, title, ...props }) => {
    return (
        <>
            {title ? <Head title={title} /> : null}

            <div
                className={cn("max-w-6xl mx-auto p-2 scroll-smooth relative", className)}
                {...props}
            />
        </>
    );
};

Container.displayName = "Container";

export default memo(Container);
