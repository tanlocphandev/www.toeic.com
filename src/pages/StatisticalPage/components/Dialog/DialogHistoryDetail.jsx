import React from "react";
import TableHistoryDetail from "../TableHistoryDetail";
import { IoIosCloseCircleOutline } from "react-icons/io";

const HistoryDetail = ({ selectedTest, closeDialog }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#34447c]">{`ETS ${selectedTest?.test_of_year} FullTest ${selectedTest?.test_name}`}</h2>
                    <IoIosCloseCircleOutline
                        onClick={closeDialog}
                        className="text-3xl text-red-500 cursor-pointer"
                    />
                </div>

                <p className="underline text-[#34447c] font-medium mb-2">Lịch sử làm bài thi</p>

                <TableHistoryDetail data={selectedTest.exams} />
            </div>
        </div>
    );
};

export default HistoryDetail;
