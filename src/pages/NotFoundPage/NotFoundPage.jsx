import Head from "@/components/shared/Head";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <Head title={"404 | Không tìm thấy trang"} />

            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center" data-aos="flip-up">
                    <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold mb-4">Không tìm thấy trang</h2>
                    <p className="text-gray-700 mb-8">Trang bạn đang tìm không tồn tại</p>
                    <Link to="/" className="text-blue-500 hover:underline">
                        Quay lại trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
