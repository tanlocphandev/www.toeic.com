import Audio from "@/components/shared/PartTest/Audio";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";

const options = [
    {
        duration: "0.18",
        transcript: "Who wants to organize the patient files?(A) Min-Su would like to.(B) Our phone number has changed.(C) A well-run organization.",
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

                    }
                ]
            },
        ]

    },
    {
        duration: "0.24",
        transcript: "Who wants to organize the patient files?(A) Min-Su would like to.(B) Our phone number has changed.(C) A well-run organization.",
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

                    }
                ]
            },
        ]
    },
    {
        duration: "0.25",
        transcript: "Who wants to organize the patient files?(A) Min-Su would like to.(B) Our phone number has changed.(C) A well-run organization.",
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

                    }
                ]
            },
        ]
    },
];


const PartTwo = () => {

    return (
        <div>
            {options.map((option, index) => (
                <div key={index} className="w-full p-4 rounded-lg border mb-3">
                    <p className="bg-gray-500 text-white px-1 rounded w-[180px]">[Part 2] Hỏi & Đáp</p>
                    <Audio option={option} />

                    <Transcript option={option} />

                    {option.questions.map((question, index) => (
                        <div key={index}>
                            <div className="flex my-4">
                                <p className="mr-3 w-[35px] h-[35px] bg-[#e3faff] rounded-full flex items-center justify-center text-[#34447c] font-medium">{question.order}</p>
                                <Question question={question} />
                            </div>
                            {question.explains.map((explain, index) => (
                                <ExplainQuestion value={explain} key={index} />
                            ))}
                        </div>
                    ))}
                </div>
            ))}


        </div>
    );
}

export default PartTwo;