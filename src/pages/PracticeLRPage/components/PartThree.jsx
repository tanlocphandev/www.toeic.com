import { Link } from "react-router-dom";
import ExplainQuestion from "./ExplainQuestion";
import Question from "./Question";
import QuestionQuantity from "./QuestionQuantity";
import Transcript from "./Transcript";
import Audio from "./Audio";
// import { IoIosPause } from "react-icons/io";

const options = [
    {
        duration: "0.18",
        transcript: "<p><strong>M-Au:</strong> Hi, Maria. (32) Were you able to start on the wedding cakes yet?</p><p><strong><strong>M-Br:</strong></strong> (32) Yes, I've started on the Anderson order. It's a little more complex than I thought it would be.</p > <p><strong>M-Au:</strong> Yes, they're more complicated and they do take a little more time, but it'll be worth it.</p></p><p><strong>M-Br:</strong> Right. (33) We can definitely increase our bakery's sales by offering wedding cakes.Take a look—is the color of this frosting. OK</p><p><strong>M-Au:</strong> Actually,the order called for a dark pink. This is a little too pale. (34) Let me get some more food coloring from the supply closet.</p><p><strong>M-Au:</strong> Xin chào, Maria.  (32) Bạn đã có thể bắt đầu với những chiếc bánh cưới chưa?</p><p><strong>M-Br:</strong> (32) Có, tôi đã bắt đầu với đặt hàng của Anderson. Nó phức tạp hơn một chút so với tôi nghĩ. </p><p><strong>M-Au:</strong> Vâng, chúng phức tạp hơn và chúng mất nhiều thời gian hơn một chút, nhưng nó sẽ có giá trị. </p><p><strong>M-Br:</strong> Phải.  (33) Chúng ta chắc chắn có thể tăng doanh số bán hàng của chúng ta bằng cách cung cấp bánh cưới.  Hãy nhìn vào màu sắc của lớp phủ đường (frosting - lớp phủ bánh) này.  Đồng ý chứ?</p><p><strong>M-Au:</strong> Thật ra, đặt hàng yêu cầu màu hồng đậm.  Như thế này là hơi nhạt một chút.  (34) Hãy để tôi lấy thêm một số màu thực phẩm từ tủ cung cấp.</p>",
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
        transcript: "<p><strong>M-Au:</strong> Hi, Maria. (32) Were you able to start on the wedding cakes yet?</p><p><strong><strong>M-Br:</strong></strong> (32) Yes, I've started on the Anderson order. It's a little more complex than I thought it would be.</p > <p><strong>M-Au:</strong> Yes, they're more complicated and they do take a little more time, but it'll be worth it.</p></p><p><strong>M-Br:</strong> Right. (33) We can definitely increase our bakery's sales by offering wedding cakes.Take a look—is the color of this frosting. OK</p><p><strong>M-Au:</strong> Actually,the order called for a dark pink. This is a little too pale. (34) Let me get some more food coloring from the supply closet.</p><p><strong>M-Au:</strong> Xin chào, Maria.  (32) Bạn đã có thể bắt đầu với những chiếc bánh cưới chưa?</p><p><strong>M-Br:</strong> (32) Có, tôi đã bắt đầu với đặt hàng của Anderson. Nó phức tạp hơn một chút so với tôi nghĩ. </p><p><strong>M-Au:</strong> Vâng, chúng phức tạp hơn và chúng mất nhiều thời gian hơn một chút, nhưng nó sẽ có giá trị. </p><p><strong>M-Br:</strong> Phải.  (33) Chúng ta chắc chắn có thể tăng doanh số bán hàng của chúng ta bằng cách cung cấp bánh cưới.  Hãy nhìn vào màu sắc của lớp phủ đường (frosting - lớp phủ bánh) này.  Đồng ý chứ?</p><p><strong>M-Au:</strong> Thật ra, đặt hàng yêu cầu màu hồng đậm.  Như thế này là hơi nhạt một chút.  (34) Hãy để tôi lấy thêm một số màu thực phẩm từ tủ cung cấp.</p>",
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
                        answerD: "(D) Tại một hiệu thuốc"
                    }
                ]
            },
        ]
    },

];


const PartThree = ({ id, partId }) => {

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
                            <p className="bg-gray-500 text-white px-1 rounded w-[180px]">[Part 3] Đoạn hội thoại</p>
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

export default PartThree;