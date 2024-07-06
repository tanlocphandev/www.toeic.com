import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuGoal } from "react-icons/lu";

const MyGoalDialog = ({ closeDialog }) => {
    const [goalScore, setGoalScore] = useState(630);

    const handleSliderChange = (event) => {
        setGoalScore(event.target.value);
    };

    const handleSave = () => {
        // Handle save action here
        console.log("Goal saved:", goalScore);
        closeDialog();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white p-6 rounded-lg w-[500px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#34447c] flex items-center">
                        <LuGoal className="mr-2 text-green-500" />
                        SET GOAL
                    </h2>
                    <IoIosCloseCircleOutline
                        onClick={closeDialog}
                        className="text-3xl text-red-500 cursor-pointer"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">
                        Goal Score <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center">
                        <input
                            type="range"
                            min="0"
                            max="990"
                            value={goalScore}
                            onChange={handleSliderChange}
                            className="flex-grow mr-4"
                        />
                        <span className="text-lg font-medium">{goalScore}</span>
                    </div>
                </div>
                <div className="flex justify-end space-x-4">
                    <button onClick={closeDialog} className="px-4 py-2 bg-gray-200 rounded-lg">
                        Đóng
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyGoalDialog;
