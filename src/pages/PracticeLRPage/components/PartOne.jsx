import ChipTag from "@/components/shared/ChipTag/ChipTag";
import Audio from "@/components/shared/PartTest/AudioBase";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";

const options = [
    {
        duration: "0.18",
        img: "/t1p1/ets_toeic_2020_test_1_1.webp",
        transcript:
            "(A) A woman is painting a house. (B) A woman is watering a plant. (C) A woman is fixing a door. (D) A woman is sweeping a walkway.",
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
                        answerA: "A) Họ đang gấp một số giấy tờ.",
                        answerB: "(B) Họ đang đặt một bức tranh vào khung.",
                        answerC: "(C) Họ đang nghiên cứu một bản vẽ.",
                        answerD: "(D) Họ đang đóng cửa sổ.",
                    },
                ],
            },
        ],
    },
    {
        duration: "0.24",
        img: "/t1p1/ets_toeic_2020_test_1_2.webp",
        transcript:
            "(A) They're folding some papers.(B) They're putting a picture in a frame.(C) They're studying a drawing.(D) They're closing a window.",
        questions: [
            {
                question: "Where is the conversation most likely taking place?",
                answerA: "A. At a hardware store",
                answerB: "B. At a clothing shop",
                answerC: "C. At a bakery",
                answerD: "D. At a pharmacy",
                order: 2,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "A) Họ đang gấp một số giấy tờ.",
                        answerB: "(B) Họ đang đặt một bức tranh vào khung.",
                        answerC: "(C) Họ đang nghiên cứu một bản vẽ.",
                        answerD: "(D) Họ đang đóng cửa sổ.",
                    },
                ],
            },
        ],
    },
    {
        duration: "0.25",
        img: "/t1p1/ets_toeic_2020_test_1_3.webp",
        transcript:
            "(A) The man is turning on a light.(B) The man is giving the woman a book.(C) The woman is posting signs on a wall.(D) The woman is typing on a keyboard.",
        questions: [
            {
                question: "Where is the conversation most likely taking place?",
                answerA: "A. At a hardware store",
                answerB: "B. At a clothing shop",
                answerC: "C. At a bakery",
                answerD: "D. At a pharmacy",
                order: 3,
                explains: [
                    {
                        question: "Cuộc hội thoại có khả năng diễn ra ở đâu nhất?",
                        answerA: "A) Họ đang gấp một số giấy tờ.",
                        answerB: "(B) Họ đang đặt một bức tranh vào khung.",
                        answerC: "(C) Họ đang nghiên cứu một bản vẽ.",
                        answerD: "(D) Họ đang đóng cửa sổ.",
                    },
                ],
            },
        ],
    },
];

const PartOne = ({ data = [] }) => {
    return (
        <div>
            {data.map((option, index) => (
                <div key={index} className="w-full p-4 rounded-lg border mb-3">
                    {option.tags.map((tag, idx) => (
                        <ChipTag text={tag} key={idx} />
                    ))}

                    <Audio option={option} />

                    <div>
                        <img
                            loading="lazy"
                            className="w-[300px] m-auto h-[250px]"
                            src={option.uploadImageCloud.url}
                            alt={option.uploadImageCloud.url}
                        />
                    </div>

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

export default PartOne;
