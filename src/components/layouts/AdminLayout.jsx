import Header from "@/components/shared/Header";
import useProtectLoader from "@/hooks/useProtectLoader";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    useProtectLoader();

    return (
        <div>
            <Header />

            <Outlet />
        </div>
    );
};

export default AdminLayout;
