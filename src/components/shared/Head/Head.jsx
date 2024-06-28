import { memo } from "react";
import { Helmet } from "react-helmet-async";

const Head = ({ title, isAdmin = false }) => {
    return (
        <Helmet>
            <title>{isAdmin ? `${title} | Admin` : title}</title>
        </Helmet>
    );
};

Head.displayName = "Head";

export default memo(Head);
