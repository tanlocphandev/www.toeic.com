import Header from "@/components/shared/admin/Header";
import Sidebar from "@/components/shared/admin/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <>
            <Header />

            <Sidebar />

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
