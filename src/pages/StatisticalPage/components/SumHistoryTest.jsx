import { useState } from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { GoGoal } from "react-icons/go";
import { VscFileSubmodule } from "react-icons/vsc";
import DialogHistoryDetail from "./Dialog/DialogHistoryDetail";
import MyGoalDialog from "./Dialog/MyGoalDialog";

const tests = [
    "ETS 2020 FullTest Test 1",
    "ETS 2020 FullTest Test 2",
    "ETS 2020 FullTest Test 3",
    "ETS 2020 FullTest Test 4",
    "ETS 2021 FullTest Test 5",
    "ETS 2021 FullTest Test 6",
    "ETS 2021 FullTest Test 7",
    "ETS 2022 FullTest Test 8",
    "ETS 2022 FullTest Test 9",
    "ETS 2022 FullTest Test 10",
];

const SumHistoryTest = () => {
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
                    <h2 className="text-xl font-bold mb-3 text-center">TỔNG QUAN CÁC BÀI THI</h2>

                    <div className="flex items-center">
                        <span className="text-green-500 font-bold mr-2">20.00%</span>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-[#34447c] h-4 rounded-full"
                                style={{ width: "20%" }}
                            ></div>
                        </div>
                    </div>
                </div>
                {/* Khi bấm vào hiện lên dialog tạo mục tiêu điểm */}
                <button
                    onClick={openGoalDialog}
                    className="w-[20%] bg-white p-4 flex flex-col items-center justify-center rounded-lg"
                >
                    <GoGoal className="text-red-500 text-3xl" />
                    <p className="text-lg font-medium text-[#34447c]">My Goal</p>
                </button>
            </div>

            <div>
                <div className="py-4 flex justify-center items-center">
                    <FcAlarmClock className="text-3xl mr-2" />
                    <p className="text-xl font-bold">THỜI GIAN LUYỆN THI: 18:08:20</p>
                </div>
                <h3 className="text-lg text-[#34447c] font-medium mb-3 border-b-2 inline-block border-[#34447c]">
                    Lịch sử thi thử các test
                </h3>

                {/* Khi bấm vào nó show ra lịch sử làm bài thi từng ngày */}
                <div className="grid grid-cols-3 gap-4">
                    {tests.map((test, index) => (
                        <button
                            key={index}
                            onClick={() => handleTestClick(test)}
                            className="bg-white border border-gray-300 rounded-lg p-4 flex justify-between items-center"
                        >
                            <div className="flex items-center space-x-2">
                                <VscFileSubmodule className="text-xl text-red-500" />
                                <p className="font-medium">{test}</p>
                            </div>
                            <FaCheckDouble className="text-xl text-green-500" />
                        </button>
                    ))}
                </div>
            </div>

            {selectedTest && (
                <DialogHistoryDetail selectedTest={selectedTest} closeDialog={closeDialog} />
            )}

            {isGoalDialogOpen && <MyGoalDialog closeDialog={closeGoalDialog} />}
        </div>
    );
};

export default SumHistoryTest;
