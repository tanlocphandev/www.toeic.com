import Head from "@/components/shared/Head";
import { cn } from "@/lib/utils";
import { memo } from "react";
/**
 * Renders a container component with a title and children.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the container.
 * @param {string} props.className - The custom class name for the container.
 * @param {ReactNode} props.children - The children components to be rendered inside the container.
 * @return {JSX.Element} The rendered container component.
 */
const Container = ({ title, className: customClassName, children, ...props }) => {
    const className = cn("max-w-7xl mx-auto px-12 sm:px-4 lg:px-12", customClassName);

    return (
        <div className={className} {...props}>
            {title && <Head title={title} />}
            {children}
        </div>
    );
};

Container.displayName = "Container";

export default memo(Container);
