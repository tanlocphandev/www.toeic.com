import { cn } from "@/lib/utils";
import { memo } from "react";

/**
 * Renders a flexible container component.
 *
 * @param {ReactNode} children - The content to be displayed within the Flex container.
 * @param {string} className - Additional CSS classes to be applied to the Flex container.
 * @return {JSX.Element} The Flex container element with the specified children.
 */
const Flex = ({ children, className }) => {
    return <div className={cn("flex", className)}>{children}</div>;
};

Flex.displayName = "Flex";

export default memo(Flex);
