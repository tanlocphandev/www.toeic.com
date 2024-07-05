import { questionQuantity } from "@/constants";
import { FcAlarmClock } from "react-icons/fc";
import { Link } from "react-router-dom";
import QuestionQuantityItem from "./QuestionQuantityItem";
import { FaArrowRightToBracket } from "react-icons/fa6";

const QuestionQuantity = ({ partId, id }) => {
    if (questionQuantity[partId] === 200) {
        let position = 0;

        return (
            <div className="rounded-lg border shadow-md">
                <div className="flex items-center justify-center mt-4">
                    <FcAlarmClock className="text-xl mr-1" />
                    <p className="text-green-500 text-xl">02:00:00</p>
                </div>

                {Array.from({ length: 7 }).map((_, index) => {
                    const quantity = questionQuantity[index + 1];

                    const quantities = Array.from({ length: quantity }, (_, i) => {
                        position += 1;
                        return position;
                    });

                    return (
                        <div>
                            <h3 className="pt-4 px-4">Part {index + 1}</h3>
                            <QuestionQuantityItem quantities={quantities} />
                        </div>
                    );
                })}

                {/* Khi nộp bài mới hiện lên */}
                <div className="flex justify-center my-5">
                    <div className="flex mt-3 items-center mr-3">
                        <p className="w-[15px] h-[15px] bg-green-600 mr-1"></p>
                        <p>0/{questionQuantity[partId]}</p>
                    </div>
                    <div className="flex mt-3 items-center">
                        <p className="w-[15px] h-[15px] bg-red-600 mr-1"></p>
                        <p>0/{questionQuantity[partId]}</p>
                    </div>
                </div>

                {/* Khi nộp bài thì ẩn đi */}
                <div className="flex justify-center mt-5">
                    <button className="py-2 px-4 text-white bg-[#34447c] flex items-center justify-center rounded-full ">
                        Nộp bài
                    </button>
                </div>

                {/* Khi nộp bài mới hiện lên */}

                <Link to={`/exams/exam-result/${id}`}>
                    <button className="w-full text-[#34447c] font-medium text-sm py-2 rounded-bl-lg rounded-br-lg bg-[#e3faff] flex items-center justify-center mt-6">
                        Kết quả luyện thi
                        <FaArrowRightToBracket className="ml-1 text-lg" />
                    </button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="rounded-lg border shadow-md pb-4">
                <h3 className="pt-4 text-center">Question Palette</h3>
                <div className="px-4 flex mt-3 flex-wrap ">
                    {Array.from({ length: questionQuantity[partId] }).map((_, index) => (
                        <button
                            key={index + 1}
                            className="mx-1 mt-2 w-[30px] h-[30px] border border-[#34447c] flex items-center justify-center rounded hover:bg-[#34447c] hover:text-white"
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Khi nộp bài mới hiện lên */}
                <div className="flex justify-center my-5">
                    <div className="flex mt-3 items-center mr-3">
                        <p className="w-[15px] h-[15px] bg-green-600 mr-1"></p>
                        <p>0/{questionQuantity[partId]}</p>
                    </div>
                    <div className="flex mt-3 items-center">
                        <p className="w-[15px] h-[15px] bg-red-600 mr-1"></p>
                        <p>0/{questionQuantity[partId]}</p>
                    </div>
                </div>

                {/* Khi nộp bài thì ẩn đi */}
                <div className="flex justify-center">
                    <button className="py-2 px-4 text-white bg-[#34447c] flex items-center justify-center rounded-full ">
                        Chấm điểm
                    </button>
                </div>
                {/* <div className="flex justify-center">
                    <button className="py-2 px-4 text-white bg-[#34447c] flex items-center justify-center rounded-full ">
                        Làm lại
                    </button>
                </div> */}
            </div>
        );
    }
};

export default QuestionQuantity;
