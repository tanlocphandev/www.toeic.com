import { Link } from "react-router-dom";
import ExplainQuestion from "./ExplainQuestion";
import Question from "./Question";
import QuestionQuantity from "./QuestionQuantity";
// import { IoIosPause } from "react-icons/io";

const questions = [
    {
        question: "Departmental restructuring will be discussed at the _____ monthly meeting",
        answerA: "A. next",
        answerB: "B. always",
        answerC: "C. soon",
        answerD: "D. like",
        order: 1,
        explains: [
            {
                explain: "Cần một điền tính từ thích hợp.",
                question: "Tạm dịch/Mở rộng: Vấn đề tái cấu trúc bộ phận sẽ được thảo luận tại cuộc họp hàng tháng tiếp theo.",
                answerA: "A. Next A. kế tiếp",
                answerB: "B. Always (adv) luôn luôn",
                answerC: "C. Soon (adv) sớm",
                answerD: "D. Like D. giống",

            }
        ]
    },
    {

        question: "To keep _____ park beautiful, please place your non recyclables in the available trash cans.",
        answerA: "A. our",
        answerB: "B. we",
        answerC: "C. us",
        answerD: "D. ours",
        order: 2,
        explains: [
            {
                explain: "Cần điền một tính từ trước danh từ “park”.",
                question: "<p>Tạm dịch/Mở rộng: Vấn đề tái cấu trúc bộ phận sẽ được thảo luận tại cuộc họp hàng tháng tiếp theo.</p><p>Keep sth adj: giữ sth (tính từ)</p>",
            }
        ]
    },
    {

        question: "Mr.Hardin _____ additional images of the office building he is interested in leasing.",
        answerA: "A. because",
        answerB: "B. either",
        answerC: "C. between",
        answerD: "D. together",
        order: 3,
        explains: [
            {
                explain: "<p>- “Between” và “Because” không đứng trước “to V” nên loại A, C.</p><p>- Cần tìm trạng từ bổ nghĩa cho động từ “brought”</p>",
                question: "Tạm dịch/Mở rộng: Một nhóm các chuyên gia nông nghiệp sẽ được tập hợp lại cùng nhau để cố gắng gia tăng vụ mùa.",
            }
        ]
    },
];



const PartFive = ({ id, partId }) => {

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
                    <div className="w-full p-4 rounded-lg border mb-3">
                        <p className="bg-gray-500 text-white px-1 rounded w-[180px]">[Part 5] Hoàn thành câu</p>

                        {questions.map((question, index) => (
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


                </div>
                <div className="w-[20%]">
                    < QuestionQuantity partId={partId} />
                </div>
            </div>
        </div >
    );
}

export default PartFive;