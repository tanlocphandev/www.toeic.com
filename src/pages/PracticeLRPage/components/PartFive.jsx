import ChipTag from "@/components/shared/ChipTag/ChipTag";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import { test5 } from "@/mock/test.mock";

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

const PartFive = ({ data = [] }) => {
    return (
        <div>
            {data.map((option, index) => (
                <div key={index} className="w-full p-4 rounded-lg border mb-3">
                    <div className="flex space-x-2">
                        {option.tags.map((tag, idx) => (
                            <ChipTag text={tag} key={idx} />
                        ))}
                    </div>

                    <Transcript transcript={option.transcript} />

                    <div className="flex my-4">
                        <TextOrderQuestion order={option.order} />

                        <Question question={option?.text_question} answers={option?.answers} />
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

export default PartFive;
