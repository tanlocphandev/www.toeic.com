import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

export default MainLayout;
