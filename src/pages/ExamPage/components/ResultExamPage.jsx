import { BsStars } from "react-icons/bs";
import { FaAngleDown, FaBookReader, FaHeadphonesAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoMdClock } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import TableAnswerDetail from "./TableAnswerDetail";

const ResultExamPage = () => {
    const { id } = useParams();

    return (
        <div className="max-w-6xl mx-auto pt-4">
            <div className="flex justify-center mb-4">
                <h1 className="text-3xl font-medium text-center uppercase text-[#34447c]">
                    Kết quả luyện thi
                </h1>
            </div>

            <div className="flex justify-between">
                <div className="flex justify-between flex-col w-[80%] mr-2">
                    <div className="rounded-lg border shadow-md p-4 mb-4">
                        <div className="bg-[#e3faff] text-[#34447c] p-3 rounded mb-6 flex items-center border border-[#34447c]">
                            <RiErrorWarningFill className="text-xl mr-2" />
                            <p>Đánh giá điểm chỉ dành riêng cho Full Test 200 câu.</p>
                        </div>

                        <div className="flex justify-between space-x-2">
                            <div className="flex items-center justify-between border border-l-4 border-green-500 rounded-lg w-[25%] px-2 py-1">
                                <div>
                                    <p className="text-md font-semibold">Trả lời đúng</p>
                                    <p className="text-xl font-bold">3/200</p>
                                </div>
                                <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center">
                                    <span className="text-green-500 bg-white rounded-full w-8 h-8 flex items-center justify-center">
                                        ✔
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border border-l-4 border-red-500 rounded-lg w-[25%] px-4 py-2">
                                <div>
                                    <p className="text-md font-semibold">Trả lời sai</p>
                                    <p className="text-xl font-bold">3/200</p>
                                </div>
                                <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                                    <span className="text-red-500 bg-white rounded-full w-8 h-8 flex items-center justify-center">
                                        ✖
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border border-l-4 border-gray-500 rounded-lg w-[25%] px-4 py-2">
                                <div>
                                    <p className="text-md font-semibold">Bỏ qua</p>
                                    <p className="text-xl font-bold">194/200</p>
                                </div>
                                <div className="bg-gray-500 rounded-full w-10 h-10 flex items-center justify-center">
                                    <span className="text-gray-500 bg-white rounded-full w-8 h-8 flex items-center justify-center">
                                        ➖
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border border-l-4 border-yellow-500 rounded-lg w-[25%] px-4 py-2">
                                <div>
                                    <p className="text-md font-semibold">Hoàn thành trong</p>
                                    <p className="text-xl font-bold">00:00:20</p>
                                </div>
                                <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center">
                                    <IoMdClock className="text-yellow-500 bg-white rounded-full w-8 h-8 " />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-6">
                            <div className="w-[30%] flex">
                                <BsStars className="text-5xl text-yellow-500" />
                                <div className="flex items-center justify-center">
                                    <div className="w-36 h-36 border-8 rounded-full flex items-center justify-center flex-col">
                                        <p className="text-xl font-bold">30/990</p>
                                        <p className="text-sm text-red-600 font-medium">
                                            TOTAL SCORE
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[70%] flex flex-col">
                                <p className="text-lg bg-gray-100 p-3 flex items-center justify-center">
                                    <GoGoal className="mr-2 text-red-500 text-xl" /> Mục tiêu: 630
                                </p>

                                <div className="mt-4">
                                    <div className="border p-4 text-[#34447c] h-[120px]">
                                        <div className="flex items-center">
                                            <FaHeadphonesAlt />
                                            <p className="text-lg font-semibold mx-2">LISTENING:</p>
                                            <p className="text-lg font-bold">3/100</p>
                                        </div>
                                        <div className="relative h-3 bg-gray-300 mt-8 rounded">
                                            <div className="h-3 bg-[#34447c] w-1/12 rounded-tl rounded-bl"></div>
                                            <div className="flex justify-between pt-1">
                                                <p>25</p>
                                                <p>495</p>
                                            </div>
                                            <div className="absolute top-[-30px] left-[37px] flex flex-col justify-center items-center">
                                                <p className="max-w-7 min-w-5 h-5 bg-yellow-500 rounded flex items-center justify-center text-sm">
                                                    25
                                                </p>
                                                <FaAngleDown className="text-yellow-500 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border p-4 text-[#34447c] h-[130px]">
                                        <div className="flex items-center">
                                            <FaBookReader />
                                            <p className="text-lg font-semibold mx-2">READING:</p>
                                            <p className="text-lg font-bold">3/100</p>
                                        </div>
                                        <div className="relative h-3 bg-gray-300 mt-8 rounded">
                                            <div className=" h-3 bg-[#34447c] w-[10px] rounded-tl rounded-bl"></div>
                                            <div className="flex justify-between pt-1">
                                                <p>5</p>
                                                <p>495</p>
                                            </div>
                                            <div className="absolute top-[-30px] left-[0px] flex flex-col justify-center items-center">
                                                <p className="max-w-7 min-w-5 h-5 bg-yellow-500 rounded flex items-center justify-center text-sm">
                                                    5
                                                </p>
                                                <FaAngleDown className="text-yellow-500 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" rounded-lg border shadow-md p-4">
                        <TableAnswerDetail />
                    </div>
                </div>
                <div className="w-[20%]">
                    <div className="rounded-lg border shadow-md">
                        <button className="bg-slate-200 font-medium px-1 py-2 rounded-tl-lg rounded-tr-lg w-full mb-3">
                            Thông tin kỳ thi
                        </button>
                        <div className="px-4">
                            <p>+ Bộ đề thi: ETS 2020</p>
                            <p>+ ETS FullTest Test {id}</p>
                            <p>+ 120 phút</p>
                        </div>
                        <div className="my-4 flex justify-center">
                            <Link to={`/exams/${id}`}>
                                <button className="bg-[#34447c] text-white p-1 rounded hover:bg-blue-600">
                                    Xem đáp án
                                </button>
                            </Link>
                            <Link to={"/exams"}>
                                <button className="bg-[#34447c] text-white p-1 rounded hover:bg-green-600 ml-2">
                                    Tiếp tục thi
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultExamPage;
