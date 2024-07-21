import ChipTag from "@/components/shared/ChipTag/ChipTag";
import Audio from "@/components/shared/PartTest/AudioBase";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import { test2 } from "@/mock/test.mock";

const options = [
    {
        duration: "0.18",
        transcript:
            "Who wants to organize the patient files?(A) Min-Su would like to.(B) Our phone number has changed.(C) A well-run organization.",
        questions: [
            {
                question: "Where is the conversation most likely taking place?",
                answerA: "A. At a hardware store",
                answerB: "B. At a clothing shop",
                answerC: "C. At a bakery",
                order: 1,
                explains: [
                    {
                        question: "Ai muốn sắp xếp các tệp bệnh nhân?",
                        answerA: "(A) Min-Su muốn làm việc đó.",
                        answerB: "(B) Số điện thoại của chúng tôi đã thay đổi.",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                    },
                ],
            },
        ],
    },
    {
        duration: "0.24",
        transcript:
            "Who wants to organize the patient files?(A) Min-Su would like to.(B) Our phone number has changed.(C) A well-run organization.",
        questions: [
            {
                question: "Where is the conversation most likely taking place?",
                answerA: "A. At a hardware store",
                answerB: "B. At a clothing shop",
                answerC: "C. At a bakery",
                order: 2,
                explains: [
                    {
                        question: "Ai muốn sắp xếp các tệp bệnh nhân?",
                        answerA: "(A) Min-Su muốn làm việc đó.",
                        answerB: "(B) Số điện thoại của chúng tôi đã thay đổi.",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                    },
                ],
            },
        ],
    },
    {
        duration: "0.25",
        transcript:
            "Who wants to organize the patient files?(A) Min-Su would like to.(B) Our phone number has changed.(C) A well-run organization.",
        questions: [
            {
                question: "Where is the conversation most likely taking place?",
                answerA: "A. At a hardware store",
                answerB: "B. At a clothing shop",
                answerC: "C. At a bakery",
                order: 3,
                explains: [
                    {
                        question: "Ai muốn sắp xếp các tệp bệnh nhân?",
                        answerA: "(A) Min-Su muốn làm việc đó.",
                        answerB: "(B) Số điện thoại của chúng tôi đã thay đổi.",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                    },
                ],
            },
        ],
    },
];

const PartTwo = ({ data = [] }) => {
    return (
        <div>
            {data.map((option, index) => (
                <div key={index} className="w-full p-4 rounded-lg border mb-3">
                    {option.tags.map((tag, idx) => (
                        <ChipTag text={tag} key={idx} />
                    ))}

                    <Audio option={option} />

                    <Transcript transcript={option.transcript} />

                    <div className="flex my-4">
                        <TextOrderQuestion order={option.order} />

                        <Question question={option?.text} answers={option?.answers} />
                    </div>

                    <p className="text-green-700 font-medium bg-green-600/10 px-3 py-2 inline-block rounded-sm">
                        Đáp án chính xác là: {option.is_correct_cap}
                    </p>

                    <ExplainQuestion explain={option.explain} />
                </div>
            ))}
        </div>
    );
};

export default PartTwo;
