import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

/**
 * Renders a LogoText component with the given className.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.className - The class name to apply to the component.
 * @return {JSX.Element} A JSX element representing the LogoText component.
 */
const LogoText = ({ className }) => {
    return (
        <Link
            to={"/"}
            className={cn("font-script text-5xl block text-gray-500 uppercase", className)}
        >
            Toeic
        </Link>
    );
};

LogoText.displayName = "LogoText";

export default LogoText;
