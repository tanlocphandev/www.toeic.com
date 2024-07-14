import ChipTag from "@/components/shared/ChipTag/ChipTag";
import Audio from "@/components/shared/PartTest/Audio";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import { test3 } from "@/mock/test.mock";

const options = [
    {
        duration: "0.18",
        transcript:
            "<p><strong>M-Au:</strong> Hi, Maria. (32) Were you able to start on the wedding cakes yet?</p><p><strong><strong>M-Br:</strong></strong> (32) Yes, I've started on the Anderson order. It's a little more complex than I thought it would be.</p > <p><strong>M-Au:</strong> Yes, they're more complicated and they do take a little more time, but it'll be worth it.</p></p><p><strong>M-Br:</strong> Right. (33) We can definitely increase our bakery's sales by offering wedding cakes.Take a look—is the color of this frosting. OK</p><p><strong>M-Au:</strong> Actually,the order called for a dark pink. This is a little too pale. (34) Let me get some more food coloring from the supply closet.</p><p><strong>M-Au:</strong> Xin chào, Maria.  (32) Bạn đã có thể bắt đầu với những chiếc bánh cưới chưa?</p><p><strong>M-Br:</strong> (32) Có, tôi đã bắt đầu với đặt hàng của Anderson. Nó phức tạp hơn một chút so với tôi nghĩ. </p><p><strong>M-Au:</strong> Vâng, chúng phức tạp hơn và chúng mất nhiều thời gian hơn một chút, nhưng nó sẽ có giá trị. </p><p><strong>M-Br:</strong> Phải.  (33) Chúng ta chắc chắn có thể tăng doanh số bán hàng của chúng ta bằng cách cung cấp bánh cưới.  Hãy nhìn vào màu sắc của lớp phủ đường (frosting - lớp phủ bánh) này.  Đồng ý chứ?</p><p><strong>M-Au:</strong> Thật ra, đặt hàng yêu cầu màu hồng đậm.  Như thế này là hơi nhạt một chút.  (34) Hãy để tôi lấy thêm một số màu thực phẩm từ tủ cung cấp.</p>",
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
            "<p><strong>M-Au:</strong> Hi, Maria. (32) Were you able to start on the wedding cakes yet?</p><p><strong><strong>M-Br:</strong></strong> (32) Yes, I've started on the Anderson order. It's a little more complex than I thought it would be.</p > <p><strong>M-Au:</strong> Yes, they're more complicated and they do take a little more time, but it'll be worth it.</p></p><p><strong>M-Br:</strong> Right. (33) We can definitely increase our bakery's sales by offering wedding cakes.Take a look—is the color of this frosting. OK</p><p><strong>M-Au:</strong> Actually,the order called for a dark pink. This is a little too pale. (34) Let me get some more food coloring from the supply closet.</p><p><strong>M-Au:</strong> Xin chào, Maria.  (32) Bạn đã có thể bắt đầu với những chiếc bánh cưới chưa?</p><p><strong>M-Br:</strong> (32) Có, tôi đã bắt đầu với đặt hàng của Anderson. Nó phức tạp hơn một chút so với tôi nghĩ. </p><p><strong>M-Au:</strong> Vâng, chúng phức tạp hơn và chúng mất nhiều thời gian hơn một chút, nhưng nó sẽ có giá trị. </p><p><strong>M-Br:</strong> Phải.  (33) Chúng ta chắc chắn có thể tăng doanh số bán hàng của chúng ta bằng cách cung cấp bánh cưới.  Hãy nhìn vào màu sắc của lớp phủ đường (frosting - lớp phủ bánh) này.  Đồng ý chứ?</p><p><strong>M-Au:</strong> Thật ra, đặt hàng yêu cầu màu hồng đậm.  Như thế này là hơi nhạt một chút.  (34) Hãy để tôi lấy thêm một số màu thực phẩm từ tủ cung cấp.</p>",
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
                answerA: "A. Contact a vendor",
                answerB: "B. Talk to a colleague",
                answerC: "C. File some invoices",
                answerD: "D. Get some more supplies",
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

const PartThree = ({ data = test3 }) => {
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

export default PartThree;
