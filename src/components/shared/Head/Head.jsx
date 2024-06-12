import { memo } from "react";
import { Helmet } from "react-helmet-async";

const Head = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

Head.displayName = "Head";

export default memo(Head);
