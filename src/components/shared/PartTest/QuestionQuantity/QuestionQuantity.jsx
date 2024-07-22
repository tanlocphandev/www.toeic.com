import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { EXAM_TYPES, questionQuantity } from "@/constants";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { Link } from "react-router-dom";
import QuestionQuantityItem from "./QuestionQuantityItem";

const QuestionQuantity = ({
    questionOrders = [],
    examType = EXAM_TYPES.FULL_TEST,
    duration = "02:00:00",
    isShowAnswerCorrect = false,
    isShowSubmit = true,
    resultHref = "",
    isLoading = false,
    activeQuantity = [],
    onSubmit = () => {},
}) => {
    if (isLoading) {
        return (
            <div className="rounded-lg border shadow-md sticky top-0 z-10 scroll-smooth overflow-y-auto min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)]">
                <div className="px-5 mt-4 flex justify-center flex-col items-center space-y-2">
                    <Skeleton className={"w-[150px] h-4"} />
                    <Skeleton className={"w-[100px] h-8"} />
                </div>

                <div className="px-5 mb-1 mt-5">
                    <Skeleton className={"w-[100px] h-4"} />
                </div>

                <div className="flex items-center px-4 flex-wrap">
                    {Array.from({ length: 35 }).map((_, index) => (
                        <Skeleton className={" w-[29px] h-[29px] mx-1 my-1"} key={index} />
                    ))}
                </div>

                <div className="flex items-center justify-center flex-2 mt-3 px-5">
                    <Skeleton className={"w-full h-9 rounded-md text-center"} />
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-lg border shadow-md sticky top-4 z-10 scroll-smooth overflow-y-auto max-h-[calc(100vh-140px)]">
            <div className="mt-4 text-center">
                <p className="text-green-500 mb-1 font-medium">Thời gian làm bài</p>

                <div className="flex items-center justify-center">
                    <FcAlarmClock className="text-xl mr-1" />
                    <p className="text-green-500 text-xl">{duration}</p>
                </div>
            </div>

            {/* Phần hiển thị số câu hỏi */}
            {questionOrders.map((qO, index) => {
                return (
                    <div key={index} className={index === 0 ? "" : "mt-2"}>
                        <h3 className="pt-4 px-5 font-medium">Part {qO.part_number}</h3>

                        <QuestionQuantityItem
                            quantities={qO.orders}
                            activeQuantity={activeQuantity}
                        />
                    </div>
                );
            })}

            {/* Khi nộp bài mới hiện lên */}
            {isShowAnswerCorrect ? (
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
            ) : null}

            {/* Khi nộp bài thì ẩn đi */}
            {isShowSubmit ? (
                <div className="flex justify-center mt-5 mb-5 px-5">
                    {examType === EXAM_TYPES.FULL_TEST ? (
                        <Button
                            onClick={onSubmit}
                            className="w-full hover:bg-[#34447c] hover:text-white text-[#34447c] border-[#34447c]"
                            variant="outline"
                        >
                            Nộp bài
                        </Button>
                    ) : (
                        <Button
                            onClick={onSubmit}
                            className="w-full hover:bg-[#34447c] hover:text-white text-[#34447c] border-[#34447c]"
                            variant="outline"
                        >
                            Chấm điểm
                        </Button>
                    )}
                </div>
            ) : null}

            {/* Khi nộp bài mới hiện lên `/exams/exam-result/${id}` */}
            {isShowAnswerCorrect ? (
                <Link to={resultHref}>
                    <button className="w-full text-[#34447c] font-medium text-sm py-2 rounded-bl-lg rounded-br-lg bg-[#e3faff] flex items-center justify-center mt-6">
                        Kết quả luyện thi
                        <FaArrowRightToBracket className="ml-1 text-lg" />
                    </button>
                </Link>
            ) : null}
        </div>
    );
};

export default QuestionQuantity;
