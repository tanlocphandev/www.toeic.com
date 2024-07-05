import Audio from "@/components/shared/PartTest/Audio";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";

const options = [
    {
        duration: "0.18",
        img: "/t1p1/ets_toeic_2020_test_1_1.webp",
        transcript: "(A) A woman is painting a house. (B) A woman is watering a plant. (C) A woman is fixing a door. (D) A woman is sweeping a walkway.",
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

                    }
                ]
            },
        ]
    },
    {
        duration: "0.24",
        img: "/t1p1/ets_toeic_2020_test_1_2.webp",
        transcript: "(A) They're folding some papers.(B) They're putting a picture in a frame.(C) They're studying a drawing.(D) They're closing a window.",
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

                    }
                ]
            },
        ]
    },
    {
        duration: "0.25",
        img: "/t1p1/ets_toeic_2020_test_1_3.webp",
        transcript: "(A) The man is turning on a light.(B) The man is giving the woman a book.(C) The woman is posting signs on a wall.(D) The woman is typing on a keyboard.",
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

                    }
                ]
            },
        ]
    },
];


const PartOne = () => {

    return (
        <div>
            {
                options.map((option, index) => (
                    <div key={index} className="w-full p-4 rounded-lg border mb-3">
                        <p className="bg-gray-500 text-white px-1 rounded w-[180px]">[Part 1] Mô tả tranh</p>
                        <Audio option={option} />
                        <div>
                            <img className="w-[300px] m-auto h-[250px]" src={option.img} alt="" />
                        </div>

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
                ))
            }
        </div>
    );
}

export default PartOne;