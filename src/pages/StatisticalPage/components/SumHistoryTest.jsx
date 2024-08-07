import { Skeleton } from "@/components/ui/skeleton";
import { numberToTime } from "@/utils";
import { useState } from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { GoGoal } from "react-icons/go";
import { VscFileSubmodule } from "react-icons/vsc";
import DialogHistoryDetail from "./Dialog/DialogHistoryDetail";
import MyGoalDialog from "./Dialog/MyGoalDialog";

const SumHistoryTest = ({
    isLoading = true,
    data = [],
    sumTimerFullTest = 0,
    percentExamTest = 0,
}) => {
    const [selectedTest, setSelectedTest] = useState(null);
    const [isGoalDialogOpen, setIsGoalDialogOpen] = useState(false);

    const handleTestClick = (test) => {
        setSelectedTest(test);
    };

    const closeDialog = () => {
        setSelectedTest(null);
    };

    const openGoalDialog = () => {
        setIsGoalDialogOpen(true);
    };

    const closeGoalDialog = () => {
        setIsGoalDialogOpen(false);
    };

    return (
        <div className="bg-[url('/bg-statistical.jpg')] w-full bg-no-repeat bg-cover p-4 rounded-lg">
            <div className="flex space-x-4">
                <div className="bg-white p-4 w-[80%] rounded-lg">
                    {isLoading ? (
                        <div className="flex items-center justify-center flex-col">
                            <Skeleton className={"mb-4 h-8 w-[250px]"} />
                            <Skeleton className={"h-4 w-full"} />
                        </div>
                    ) : (
                        <>
                            <h2 className="text-xl font-bold mb-3 text-center">
                                TỔNG QUAN CÁC BÀI THI
                            </h2>

                            <div className="flex items-center">
                                <span className="text-green-500 font-bold mr-2">
                                    {percentExamTest || 0}%
                                </span>

                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className="bg-[#34447c] h-4 rounded-full"
                                        style={{ width: `${percentExamTest || 0}%` }}
                                    ></div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Khi bấm vào hiện lên dialog tạo mục tiêu điểm */}
                {isLoading ? (
                    <div className="w-[20%] bg-white rounded-lg">
                        <Skeleton className={"mb-4 h-full w-full rounded-lg"} />
                    </div>
                ) : (
                    <button
                        onClick={openGoalDialog}
                        className="w-[20%] bg-white p-4 flex flex-col items-center justify-center rounded-lg"
                    >
                        <GoGoal className="text-red-500 text-3xl" />
                        <p className="text-lg font-medium text-[#34447c]">Điểm mục tiêu</p>
                    </button>
                )}
            </div>

            <div>
                {isLoading ? (
                    <div className="py-4 flex justify-center items-center">
                        <Skeleton className={"mb-4 h-8 w-[400px]"} />
                    </div>
                ) : (
                    <div className="py-4 flex justify-center items-center">
                        <FcAlarmClock className="text-3xl mr-2" />
                        <p className="text-xl font-bold">
                            THỜI GIAN LUYỆN THI: {numberToTime(sumTimerFullTest)}
                        </p>
                    </div>
                )}

                {isLoading ? (
                    <Skeleton className={`w-60 h-4 mb-3`} />
                ) : (
                    <h3 className="text-lg text-[#34447c] font-medium mb-3 border-b-2 inline-block border-[#34447c]">
                        Lịch sử thi thử các test
                    </h3>
                )}

                {/* Khi bấm vào nó show ra lịch sử làm bài thi từng ngày */}
                {isLoading ? (
                    <div className="grid grid-cols-3 gap-4">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-300 rounded-lg p-4 flex justify-between items-center"
                            >
                                <div className="flex items-center space-x-2">
                                    <Skeleton className={"w-6 h-6 rounded-sm"} />
                                    <Skeleton className={"w-48 h-6 rounded-sm"} />
                                </div>

                                <Skeleton className={"w-6 h-6 rounded-sm"} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {data.map((test, index) => (
                            <button
                                key={index}
                                onClick={() => handleTestClick(test)}
                                className="bg-white border border-gray-300 rounded-lg p-4 flex justify-between items-center"
                            >
                                <div className="flex items-center space-x-2">
                                    <VscFileSubmodule className="text-xl text-red-500" />
                                    <p className="font-medium">{`ETS ${test?.test_of_year} FullTest ${test?.test_name}`}</p>
                                </div>
                                <FaCheckDouble className="text-xl text-green-500" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {selectedTest && (
                <DialogHistoryDetail selectedTest={selectedTest} closeDialog={closeDialog} />
            )}

            {isGoalDialogOpen && <MyGoalDialog closeDialog={closeGoalDialog} />}
        </div>
    );
};

export default SumHistoryTest;
