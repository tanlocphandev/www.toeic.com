
import { Link } from "react-router-dom";
import Audio from "./Audio";
import ExplainQuestion from "./ExplainQuestion";
import Question from "./Question";
import QuestionQuantity from "./QuestionQuantity";
import Transcript from "./Transcript";
// import { IoIosPause } from "react-icons/io";

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


const PartTwo = ({ id, partId }) => {

    return (
        <div className="max-w-6xl mx-auto p-2">
            <div className="flex justify-center mt-4">
                <h1 className="text-3xl font-medium text-center uppercase text-[#34447c]">
                    Practice Set TOEIC 2020 Test {id}
                </h1>
                <Link to={`/practice-lc-rc/${id}`}>
                    <button className="bg-[#e3faff] py-1 border border-[#34447c] text-black px-2 rounded-lg ml-4 hover:bg-[#34447c] hover:text-white">Thoát</button>
                </Link>
            </div>

            <div className="flex justify-between mt-10">
                <div className="flex justify-between flex-col w-[80%] mr-2 ">
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
                <div className="w-[20%]">
                    < QuestionQuantity partId={partId} />

                </div>
            </div>
        </div >
    );
}

export default PartTwo;