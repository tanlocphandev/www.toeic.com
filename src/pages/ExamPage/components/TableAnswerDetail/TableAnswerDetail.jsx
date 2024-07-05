import { GoDash } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { TiTickOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const dataResult = [
    {
        type: "[Part 2] Câu hỏi WHAT",
        correct: 0,
        incorrect: 2,
        skipped: 0,
        accuracy: "0.00%",
        questions: [18, 28],
    },
    {
        type: "[Part 2] Câu hỏi WHERE",
        correct: 1,
        incorrect: 1,
        skipped: 0,
        accuracy: "50.00%",
        questions: [17, 30],
    },
    {
        type: "[Part 2] Câu hỏi YES/NO",
        correct: 1,
        incorrect: 2,
        skipped: 0,
        accuracy: "33.33%",
        questions: [10, 23, 24],
    },
    {
        type: "[Part 2] Câu trần thuật",
        correct: 1,
        incorrect: 1,
        skipped: 0,
        accuracy: "50.00%",
        questions: [
            21, 29, 33, 45, 79, 1, 3, 4, 23, 44, 56, 67, 78, 89, 90, 123, 124, 156, 157, 178, 188,
            199,
        ],
    },
];

const TableAnswerDetail = () => {
    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2 w-[200px]">Phân loại câu hỏi</th>
                    <th className="border border-gray-300 text-green-500 p-2 w-12">
                        <TiTickOutline className="w-full m-auto" />
                    </th>
                    <th className="border border-gray-300 text-red-500 p-2 w-12">
                        <IoMdClose className="w-full m-auto" />
                    </th>
                    <th className="border border-gray-300 text-gray-500 p-2 w-12">
                        <GoDash className="w-full m-auto" />
                    </th>
                    <th className="border border-gray-300 text-yellow-500 p-2 w-20">
                        <LuGoal className="w-full m-auto" />
                    </th>
                    <th className="border border-gray-300 p-2 w-[457px]">Danh sách câu hỏi</th>
                </tr>
            </thead>
            <tbody>
                {dataResult.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                        <td className="border border-gray-300 p-2 w-[200px]">{item.type}</td>
                        <td className="border border-gray-300 p-2 text-center w-12">
                            {item.correct}
                        </td>
                        <td className="border border-gray-300 p-2 text-center w-12">
                            {item.incorrect}
                        </td>
                        <td className="border border-gray-300 p-2 text-center w-12">
                            {item.skipped}
                        </td>
                        <td className="border border-gray-300 p-2 text-center w-20">
                            {item.accuracy}
                        </td>
                        <td className="border border-gray-300 p-2 w-[457px]">
                            <div className="flex w-full flex-wrap">
                                {item.questions.map((question, qIndex) => (
                                    <div
                                        key={qIndex}
                                        className={`w-8 h-8 m-1 flex items-center justify-center rounded-full border text-xs ${
                                            qIndex % 2 === 0
                                                ? "bg-red-100 text-red-600 border-red-500"
                                                : "bg-green-100 text-green-600 border-green-500"
                                        }`}
                                    >
                                        {question}
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableAnswerDetail;
