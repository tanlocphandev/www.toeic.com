import { GoDash } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { TiTickOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

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

const TableAnswerDetail = ({ dataResult = [] }) => {
    console.log(`dataResult:::`, dataResult);

    if (!dataResult.length) return null;

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
                    <Fragment key={index}>
                        <tr>
                            <td
                                className="border border-gray-300 p-2 w-[200px] text-center bg-[#34447c] text-white font-medium"
                                colSpan={6}
                            >
                                {`Part ${item.part_number}`}
                            </td>
                        </tr>

                        {item.tags.map((tag, idx) => (
                            <tr
                                key={idx}
                                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                            >
                                <td className="border border-gray-300 p-2 w-[200px]">
                                    {tag.tag.tag_name}
                                </td>

                                <td className="border border-gray-300 p-2 text-center w-12">
                                    {tag.questionCorrect}
                                </td>

                                <td className="border border-gray-300 p-2 text-center w-12">
                                    {tag.questionWrong}
                                </td>

                                <td className="border border-gray-300 p-2 text-center w-12">
                                    {tag.questionSkip}
                                </td>

                                <td className="border border-gray-300 p-2 text-center w-20">
                                    {`${Math.floor(
                                        (tag.questionCorrect / tag.questionTotal) * 100
                                    )}%`}
                                </td>

                                <td className="border border-gray-300 p-2 w-[457px]">
                                    <div className="flex w-full flex-wrap">
                                        {tag.questions.map((question, qIndex) => {
                                            const answerCorrect = question.question_order
                                                ? question.answerCorrect
                                                : question.question.answerCorrect;

                                            const answer_id = question.answer_id;

                                            const answers = question.question_order
                                                ? question.answers
                                                : question.question.answers;

                                            return (
                                                <div
                                                    key={qIndex}
                                                    className={cn(
                                                        `w-8 h-8 m-1 flex items-center justify-center rounded-full border text-xs`,
                                                        {
                                                            "bg-red-100 text-red-600 border-red-500":
                                                                answers.find(
                                                                    (t) => t.answer_id === answer_id
                                                                )?.answer_isCorrect === 0,
                                                            "bg-green-100 text-green-600 border-green-500":
                                                                answerCorrect.answer_id ===
                                                                    answer_id &&
                                                                answerCorrect.answer_isCorrect,
                                                        }
                                                    )}
                                                >
                                                    {question?.question?.question_order ||
                                                        question?.question_order}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default TableAnswerDetail;
