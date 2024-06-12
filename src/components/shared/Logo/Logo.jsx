import { memo } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={"/"} className="flex gap-2">
            <img src="/icon-large.png" loading="lazy" alt="Logo" className="object-cover" />
            <p className="font-normal">EASET</p>
        </Link>
    );
};

Logo.displayName = "Logo";

export default memo(Logo);
