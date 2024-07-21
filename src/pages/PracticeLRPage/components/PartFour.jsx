import ChipTag from "@/components/shared/ChipTag/ChipTag";
import Audio from "@/components/shared/PartTest/AudioBase";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";

const options = [
    {
        duration: "0.18 ",
        transcript:
            "<p>M-Au: OK, let's get the monthly staff meetingstarted. First off, (71) this Saturday is the annual holiday parade.And as many of you knew, the parade goes right down our street. (72)It's always one of our busiest days... lots of people will stop byfor lunch, and the line can get quite long. So we'll need a few extracooks and servers, and everyone who works that day'll get overtimepay. Let me know soon if you're able to work on Saturday. Oh... and(73) I strongly recommend taking the bus or train if you can.Remember that it’ll be very difficult to park on Saturday during the event. </p> <p>OK, hãy bắt đầu cuộc họp nhân viên hàng tháng.Trước hết, (71) thứ bảy này là cuộc diễu hành ngày lễ hàng năm.Và như nhiều bạn đã biết, cuộc diễu hành đi ngay qua đường của chúng ta.  (72) Nó luôn luôn là một trong những ngày bận rộn nhất của chúng ta ...rất nhiều người sẽ ghé qua để ăn trưa, và dòng người có thể khá dài.Vì vậy, chúng ta sẽ cần thêm một số đầu bếp và người phục vụ, và những người làm việc vào ngày hôm đó sẽ được trả lương ngoài giờ.Hãy cho tôi biết sớm nếu bạn có thể làm việc vào thứ bảy.Ồ ...và(73) Tôi thực sự khuyên bạn nên đi xe buýt hoặc tàu nếu bạn có thể.Hãy nhớ rằng rất khó để đỗ xe vào thứ bảy trong suốt sự kiện này.</p>",
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
                        answerD: "(D) Tại một hiệu thuốc",
                    },
                ],
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
                        answerD: "(D) Tại một hiệu thuốc",
                    },
                ],
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
                        answerD: "(D) Tại một hiệu thuốc",
                    },
                ],
            },
        ],
    },
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
                answerD: "D. At a pharmacy",
                order: 4,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "(A) Tại một cửa hàng đồ kim khí",
                        answerB: "(B) Tại một cửa hàng quần áo",
                        answerC: "(C) Một tổ chức hoạt động có quy củ.",
                        answerD: "(D) Tại một hiệu thuốc",
                    },
                ],
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
                        answerD: "(D) Tại một hiệu thuốc",
                    },
                ],
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
                        answerD: "(D) Tại một hiệu thuốc",
                    },
                ],
            },
        ],
    },
];

const PartFour = ({ data = [] }) => {
    return (
        <div>
            {data.map((option) => {
                return option.group_questions.map((question, index) => {
                    return (
                        <div key={index} className="w-full p-4 rounded-lg border mb-3">
                            <div className="flex space-x-2">
                                {question.tags.map((tag, idx) => (
                                    <ChipTag text={tag} key={idx} />
                                ))}
                            </div>

                            <Audio option={question} />

                            <Transcript transcript={option.group_transcript} />

                            <div className="flex my-4">
                                <TextOrderQuestion order={question.order} />

                                <Question
                                    question={question?.text_question}
                                    answers={question?.answers}
                                />
                            </div>

                            <p className="text-green-700 font-medium bg-green-600/10 px-3 py-2 inline-block rounded-sm">
                                Đáp án chính xác là: {question.is_correct_cap}
                            </p>

                            <ExplainQuestion explain={question.explain} />
                        </div>
                    );
                });
            })}
        </div>
    );
};

export default PartFour;
