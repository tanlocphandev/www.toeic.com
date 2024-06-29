import Head from "@/components/shared/Head";
import { Link } from "react-router-dom";

const ForbiddenPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Head title={"403 | Không được phép truy cập"} />

            <div className="text-center" data-aos="flip-up">
                <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
                <h2 className="text-2xl font-semibold mb-4">Forbidden</h2>
                <p className="text-gray-700 mb-8">Bạn không có quyền truy cập trang này</p>

                <Link to="/" className="text-blue-500 underline">
                    Quay lại trang chủ
                </Link>
            </div>
        </div>
    );
};

export default ForbiddenPage;
