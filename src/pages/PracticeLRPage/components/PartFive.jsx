import ChipTag from "@/components/shared/ChipTag/ChipTag";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";

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
                question:
                    "Tạm dịch/Mở rộng: Vấn đề tái cấu trúc bộ phận sẽ được thảo luận tại cuộc họp hàng tháng tiếp theo.",
                answerA: "A. Next A. kế tiếp",
                answerB: "B. Always (adv) luôn luôn",
                answerC: "C. Soon (adv) sớm",
                answerD: "D. Like D. giống",
            },
        ],
    },
    {
        question:
            "To keep _____ park beautiful, please place your non recyclables in the available trash cans.",
        answerA: "A. our",
        answerB: "B. we",
        answerC: "C. us",
        answerD: "D. ours",
        order: 2,
        explains: [
            {
                explain: "Cần điền một tính từ trước danh từ “park”.",
                question:
                    "<p>Tạm dịch/Mở rộng: Vấn đề tái cấu trúc bộ phận sẽ được thảo luận tại cuộc họp hàng tháng tiếp theo.</p><p>Keep sth adj: giữ sth (tính từ)</p>",
            },
        ],
    },
    {
        question:
            "Mr.Hardin _____ additional images of the office building he is interested in leasing.",
        answerA: "A. because",
        answerB: "B. either",
        answerC: "C. between",
        answerD: "D. together",
        order: 3,
        explains: [
            {
                explain:
                    "<p>- “Between” và “Because” không đứng trước “to V” nên loại A, C.</p><p>- Cần tìm trạng từ bổ nghĩa cho động từ “brought”</p>",
                question:
                    "Tạm dịch/Mở rộng: Một nhóm các chuyên gia nông nghiệp sẽ được tập hợp lại cùng nhau để cố gắng gia tăng vụ mùa.",
            },
        ],
    },
];

const PartFive = () => {
    return (
        <div>
            <div className="w-full p-4 rounded-lg border mb-3">
                <ChipTag text={`[Part 5] Hoàn thành câu`} />

                {questions.map((question, index) => (
                    <div key={index}>
                        <div className="flex my-4">
                            <p className="mr-3 w-[35px] h-[35px] bg-[#e3faff] rounded-full flex items-center justify-center text-[#34447c] font-medium">
                                {question.order}
                            </p>
                            <Question question={question} />
                        </div>
                        {question.explains.map((explain, index) => (
                            <ExplainQuestion value={explain} key={index} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartFive;
