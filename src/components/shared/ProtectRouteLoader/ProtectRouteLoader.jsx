import useProtectLoader from "@/hooks/useProtectLoader";

const ProtectRouteLoader = ({ children }) => {
    const user = useProtectLoader();

    if (!user) return null;

    return children;
};

export default ProtectRouteLoader;
