import { FaAnchor, FaRegQuestionCircle } from "react-icons/fa";
import { FaAlgolia, FaChartSimple } from "react-icons/fa6";

const InforContent = () => {
    return (
        <>

            <div className="relative">
                <div className=" text-center my-20 bg-gray-400 w-[267px] rounded-2xl h-[70px] mx-auto">
                </div>
                <button className="absolute top-[-12px] left-[38.7%] transform bg-green-600 text-white h-[70px] w-[267px] rounded-2xl shadow-lg hover:shadow-xl active:translate-y-3 active:shadow-none transition-all">
                    Học ngay thôi nào
                </button>
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#cfe2ff] border rounded-lg p-5 ">
                <div className="flex gap-2 items-center justify-center">
                    <img src="/toeic-2-ky-nang.png" alt="toeic-2-ky-nang" loading="lazy" className="w-full" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    <div className="flex flex-col shadow-lg bg-white items-center justify-center">
                        <div className="text-center flex items-center justify-center flex-col p-2">
                            <FaRegQuestionCircle className="h-8 w-8 my-5" />
                            <h5 className="text-2xl">Ngân hàng đề thi</h5>
                            <p className="sub-clamp" >
                                Ngân hàng đề thi đa dạng với nhiều chủ đề khác nhau sẽ giúp bạn chuẩn bị tốt nhất cho kỳ thi của mình
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 shadow-lg bg-white items-center justify-center">
                        <div className="text-center flex items-center justify-center flex-col p-2">
                            <FaAlgolia className="h-8 w-8 my-5" />
                            <h5 className="text-2xl" >Mô phỏng bài thi thật</h5>
                            <p className="sub-clamp" >
                                Các bài thi thử có cấu trúc giống như bài thi thật sẽ giúp bạn vượt qua kỳ thi một cách thành công
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 shadow-lg bg-white items-center justify-center">
                        <div className="text-center flex items-center justify-center flex-col p-2">
                            <FaAnchor className="h-8 w-8 my-5" />
                            <h5 className="text-2xl" >Đăng ký & Đăng nhập</h5>
                            <p className="sub-clamp">
                                Đăng nhập đăng ký để lưu tiến trình học tập của bạn. Bạn có thể tự do luyện tập các câu hỏi với các mức độ khác nhau.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 shadow-lg bg-white items-center justify-center">
                        <div className="text-center flex items-center justify-center flex-col p-2">
                            <FaChartSimple className="h-8 w-8 my-5" />
                            <h5 className="text-2xl" >Thống kê kết quả</h5>
                            <p className="sub-clamp">
                                Sau khi hoàn thành mỗi bài luyện tập, bạn có thể xem thống kê chi tiết kết quả bài làm của mình
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InforContent