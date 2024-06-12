import { cn } from "@/lib/utils";
import { memo } from "react";

/**
 * TypographyH1
 *
 * A component to display an H1 heading with specific styles.
 *
 * @param {Object} props
 * @param {string} props.text - The text to display in the heading.
 * @param {string} props.className - Additional CSS class names.
 *
 * @returns {JSX.Element}
 */
const TypographyH1 = memo(({ text, className: customClassName }) => {
    const className = cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        customClassName
    );

    return <h1 className={className}>{text}</h1>;
});

TypographyH1.displayName = "TypographyH1";

/**
 * TypographyH2
 *
 * A component to display an H2 heading with specific styles.
 *
 * @param {Object} props
 * @param {string} props.text - The text to display in the heading.
 * @param {string} props.className - Additional CSS class names.
 *
 * @returns {JSX.Element}
 */
const TypographyH2 = memo(({ text, className: customClassName }) => {
    const className = cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        customClassName
    );

    return <h2 className={className}>{text}</h2>;
});

TypographyH2.displayName = "TypographyH2";

/**
 * Renders a paragraph element with the given text and optional CSS class names.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.className - The class name to apply to the paragraph element.
 * @param {string} props.text - The text to display in the paragraph.
 * @return {JSX.Element} A JSX element representing the paragraph.
 */
const TypographyP = memo(({ className, text }) => {
    return <p className={cn("leading-7", className)}>{text}</p>;
});

TypographyP.displayName = "TypographyP";

export { TypographyH1, TypographyH2, TypographyP };
