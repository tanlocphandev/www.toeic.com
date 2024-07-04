import { Link } from "react-router-dom";
import ExplainQuestion from "./ExplainQuestion";
import Question from "./Question";
import QuestionQuantity from "./QuestionQuantity";
import Transcript from "./Transcript";
import Audio from "./Audio";
// import { IoIosPause } from "react-icons/io";

const options = [
    {
        duration: "0.18 ",
        transcript: "<p>M-Au: OK, let's get the monthly staff meetingstarted. First off, (71) this Saturday is the annual holiday parade.And as many of you knew, the parade goes right down our street. (72)It's always one of our busiest days... lots of people will stop byfor lunch, and the line can get quite long. So we'll need a few extracooks and servers, and everyone who works that day'll get overtimepay. Let me know soon if you're able to work on Saturday. Oh... and(73) I strongly recommend taking the bus or train if you can.Remember that it’ll be very difficult to park on Saturday during the event. </p> <p>OK, hãy bắt đầu cuộc họp nhân viên hàng tháng.Trước hết, (71) thứ bảy này là cuộc diễu hành ngày lễ hàng năm.Và như nhiều bạn đã biết, cuộc diễu hành đi ngay qua đường của chúng ta.  (72) Nó luôn luôn là một trong những ngày bận rộn nhất của chúng ta ...rất nhiều người sẽ ghé qua để ăn trưa, và dòng người có thể khá dài.Vì vậy, chúng ta sẽ cần thêm một số đầu bếp và người phục vụ, và những người làm việc vào ngày hôm đó sẽ được trả lương ngoài giờ.Hãy cho tôi biết sớm nếu bạn có thể làm việc vào thứ bảy.Ồ ...và(73) Tôi thực sự khuyên bạn nên đi xe buýt hoặc tàu nếu bạn có thể.Hãy nhớ rằng rất khó để đỗ xe vào thứ bảy trong suốt sự kiện này.</p>",
        questions: [
            {
                question: "Where is the conversation most likely taking place?",
                answerA: "A. At a hardware store",
                answerB: "B. At a clothing shop",
                answerC: "C. At a bakery",
                answerD: "D. At a pharmacy",
                order: 1,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "(A) Tại một cửa hàng đồ kim khí",
                        answerB: "(B) Tại một cửa hàng quần áo",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                        answerD: "(D) Tại một hiệu thuốc"
                    }
                ]
            },
            {
                question: "How do the speakers hope to increase sales?",
                answerA: "A. By advertising online",
                answerB: "B. By offering a new product",
                answerC: "C. By providing free delivery",
                answerD: "D. By discounting some items",
                order: 2,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "(A) Tại một cửa hàng đồ kim khí",
                        answerB: "(B) Tại một cửa hàng quần áo",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                        answerD: "(D) Tại một hiệu thuốc"
                    }
                ]
            },
            {
                question: "What will the man do next?",
                answerA: "A.Contact a vendor",
                answerB: "B.Talk to a colleague",
                answerC: "C.File some invoices",
                answerD: "D.Get some more supplies",
                order: 3,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "(A) Tại một cửa hàng đồ kim khí",
                        answerB: "(B) Tại một cửa hàng quần áo",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                        answerD: "(D) Tại một hiệu thuốc"
                    }
                ]
            },
        ]
    },
    {
        duration: "0.18",
        transcript: "Who wants to organize the patient files?(A) Min-Su would like to.(B) Our phone number has changed.(C) A well-run organization.",
        questions: [
            {
                question: "Where is the conversation most likely taking place?",
                answerA: "A. At a hardware store",
                answerB: "B. At a clothing shop",
                answerC: "C. At a bakery",
                answerD: "D. At a pharmacy",
                order: 4,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "(A) Tại một cửa hàng đồ kim khí",
                        answerB: "(B) Tại một cửa hàng quần áo",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                        answerD: "(D) Tại một hiệu thuốc"
                    }
                ]
            },
            {
                question: "How do the speakers hope to increase sales?",
                answerA: "A. By advertising online",
                answerB: "B. By offering a new product",
                answerC: "C. By providing free delivery",
                answerD: "D. By discounting some items",
                order: 5,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "(A) Tại một cửa hàng đồ kim khí",
                        answerB: "(B) Tại một cửa hàng quần áo",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                        answerD: "(D) Tại một hiệu thuốc"
                    }
                ]
            },
            {
                question: "What will the man do next?",
                answerA: "A.Contact a vendor",
                answerB: "B.Talk to a colleague",
                answerC: "C.File some invoices",
                answerD: "D.Get some more supplies",
                order: 6,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "(A) Tại một cửa hàng đồ kim khí",
                        answerB: "(B) Tại một cửa hàng quần áo",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                        answerD: "(D) Tại một hiệu thuốc"
                    }
                ]
            },
        ]
    },

];


const PartFour = ({ id, partId }) => {

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
                            <p className="bg-gray-500 text-white px-1 rounded w-[180px]">[Part 4] Bài nói ngắn</p>
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

export default PartFour;