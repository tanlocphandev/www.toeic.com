import ChipTag from "@/components/shared/ChipTag/ChipTag";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";

const options = [
    {
        question:
            "<p>Lake view Railway Onboard Bicycle Policy</p><p>Would you like to use your bicycle to explore the Lake view Corridor Scenic Area? Our trains have the (131)— you need to safely transport your bike. When booking your ticket, just remember that reservations - (132) for both you and your bicycle. Reserve your bicycle spot (133)—. There are a limited number of storage racks on each train. You are responsible for stowing your bike securely. (134) . Lakeview Railway does not take responsibility for bicycles lost or damaged aboard our trains.</p>",
        transcript:
            "<p>Chính sách xe đạp trên Lakeview Railway</p><p>Bạn có muốn sử dụng xe đạp của mình để khám phá Khu thắng cảnh Hành lang Lakeview không? Tàu của chúng tôi có  có trang thiết bị (131) - bạn cần vận chuyển xe đạp của mình một cách an toàn. Khi đặt vé của bạn, chỉ cần nhớ rằng đặt chỗ - (132) cho cả bạn và xe đạp của bạn. Đặt chỗ xe đạp của bạn sớm (133) -. Có một số lượng hạn chế của kệ lưu trữ trên mỗi chuyến tàu. Bạn có trách nhiệm cất xe đạp an toàn. Bạn cũng cần mang theo khóa xe đạp riêng (134) . Đường sắt Viewlake không chịu trách nhiệm đối với trường hợp xe đạp bị mất hoặc hỏng trên đường tàu.</p>",
        answers: [
            {
                answerA: "A. stock",
                answerB: "B. equipment",
                answerC: "C. property",
                answerD: "D. revenue",
                order: 1,
                explains: [
                    {
                        explain: "Cần một điền tính từ thích hợp.",
                        question:
                            "<p>Tạm dịch/Mở rộng</p><p> Bạn muốn sử dụng xe đạp để khám phá khu thắng cảnh Lakeview Corridor? Tàu của chúng tôi có trang thiết bị các bạn cần để vận chuyển xe đạp một cách an toàn.</p>",
                        answerA: "A. Cổ phần",
                        answerB: "B. Trang thiết bị",
                        answerC: "C. Bất động sản",
                        answerD: "D. Doanh thu",
                    },
                ],
            },
            {
                answerA: "A. stock",
                answerB: "B. equipment",
                answerC: "C. property",
                answerD: "D. revenue",
                order: 2,
                explains: [
                    {
                        explain: "Cần một điền tính từ thích hợp.",
                        question:
                            "<p>Tạm dịch/Mở rộng</p><p> Bạn muốn sử dụng xe đạp để khám phá khu thắng cảnh Lakeview Corridor? Tàu của chúng tôi có trang thiết bị các bạn cần để vận chuyển xe đạp một cách an toàn.</p>",
                        answerA: "A. Cổ phần",
                        answerB: "B. Trang thiết bị",
                        answerC: "C. Bất động sản",
                        answerD: "D. Doanh thu",
                    },
                ],
            },
            {
                answerA: "A. stock",
                answerB: "B. equipment",
                answerC: "C. property",
                answerD: "D. revenue",
                order: 3,
                explains: [
                    {
                        explain: "Cần một điền tính từ thích hợp.",
                        question:
                            "<p>Tạm dịch/Mở rộng</p><p> Bạn muốn sử dụng xe đạp để khám phá khu thắng cảnh Lakeview Corridor? Tàu của chúng tôi có trang thiết bị các bạn cần để vận chuyển xe đạp một cách an toàn.</p>",
                        answerA: "A. Cổ phần",
                        answerB: "B. Trang thiết bị",
                        answerC: "C. Bất động sản",
                        answerD: "D. Doanh thu",
                    },
                ],
            },
            {
                answerA: "A. stock",
                answerB: "B. equipment",
                answerC: "C. property",
                answerD: "D. revenue",
                order: 4,
                explains: [
                    {
                        explain: "Cần một điền tính từ thích hợp.",
                        question:
                            "<p>Tạm dịch/Mở rộng</p><p> Bạn muốn sử dụng xe đạp để khám phá khu thắng cảnh Lakeview Corridor? Tàu của chúng tôi có trang thiết bị các bạn cần để vận chuyển xe đạp một cách an toàn.</p>",
                        answerA: "A. Cổ phần",
                        answerB: "B. Trang thiết bị",
                        answerC: "C. Bất động sản",
                        answerD: "D. Doanh thu",
                    },
                ],
            },
        ],
    },
    {
        question:
            "<p>Corelli’s Bakery</p><p>15 Middlemass Street</p><p>Youngstown, Ohio 44515</p ><p>Dear Valued Customer: </p><p>For the last three years we have charged the same wholesale prices for our baked goods, including cakes, pies, cookies, and brownies. We regret that sharply rising prices for our raw ingredients, such as sugar and fruit, have forced us to raise our prices by 5 percent —(135)— August 1. We have made every attempt to avoid this price increase. - (136)- , we refuse to compromise on the quality of our products. Using the best ingredients available will allow us to provide the delicious desserts your restaurant guests have come to expect. —(137)-—. We appreciate your -(138)- and look forward to continuing to serve you.</p> <p > Sincerely, </p><p>Tony Corelli, Owner</p>",
        transcript:
            "<p>Bánh mì Corelli</p><p>15 đường Middlemass</p><p>Youngstown, Ohio 44515</p ><p>Kính gửi quý khách hàng: </p><p>Trong ba năm qua, chúng tôi đã tính giá bán buôn tương tự cho các sản phẩm nướng của chúng tôi, bao gồm bánh, bánh nướng, bánh quy và bánh brownies. Chúng tôi rất tiếc rằng giá tăng mạnh đối với các thành phần thô của chúng tôi, chẳng hạn như đường và trái cây, đã buộc chúng tôi tăng giá lên 5%  hiệu lực từ (135) - ngày 1 tháng 8. Chúng tôi đã cố gắng hết sức để tránh việc tăng giá này.  Tuy nhiên (136), chúng tôi từ chối thỏa hiệp về chất lượng sản phẩm của chúng tôi. Sử dụng các nguyên liệu tốt nhất có sẵn sẽ cho phép chúng tôi cung cấp các món tráng miệng ngon mà khách hàng của bạn đã mong đợi. -Chúng tôi tin rằng bạn sẽ thấy những sản phẩm của chúng tôi thật tuyệt. (137). Chúng tôi đánh giá cao sự hỗ trợ (138) của bạn  và mong muốn tiếp tục phục vụ bạn.</p> <p > Trân trọng,, </p><p>Tony Corelli, Chủ sở hữu</p>",
        answers: [
            {
                answerA: "A. stock",
                answerB: "B. equipment",
                answerC: "C. property",
                answerD: "D. revenue",
                order: 5,
                explains: [
                    {
                        explain: "Cần một điền tính từ thích hợp.",
                        question:
                            "<p>Tạm dịch/Mở rộng</p><p> Bạn muốn sử dụng xe đạp để khám phá khu thắng cảnh Lakeview Corridor? Tàu của chúng tôi có trang thiết bị các bạn cần để vận chuyển xe đạp một cách an toàn.</p>",
                        answerA: "A. Cổ phần",
                        answerB: "B. Trang thiết bị",
                        answerC: "C. Bất động sản",
                        answerD: "D. Doanh thu",
                    },
                ],
            },
            {
                answerA: "A. stock",
                answerB: "B. equipment",
                answerC: "C. property",
                answerD: "D. revenue",
                order: 6,
                explains: [
                    {
                        explain: "Cần một điền tính từ thích hợp.",
                        question:
                            "<p>Tạm dịch/Mở rộng</p><p> Bạn muốn sử dụng xe đạp để khám phá khu thắng cảnh Lakeview Corridor? Tàu của chúng tôi có trang thiết bị các bạn cần để vận chuyển xe đạp một cách an toàn.</p>",
                        answerA: "A. Cổ phần",
                        answerB: "B. Trang thiết bị",
                        answerC: "C. Bất động sản",
                        answerD: "D. Doanh thu",
                    },
                ],
            },
            {
                answerA: "A. stock",
                answerB: "B. equipment",
                answerC: "C. property",
                answerD: "D. revenue",
                order: 7,
                explains: [
                    {
                        explain: "Cần một điền tính từ thích hợp.",
                        question:
                            "<p>Tạm dịch/Mở rộng</p><p> Bạn muốn sử dụng xe đạp để khám phá khu thắng cảnh Lakeview Corridor? Tàu của chúng tôi có trang thiết bị các bạn cần để vận chuyển xe đạp một cách an toàn.</p>",
                        answerA: "A. Cổ phần",
                        answerB: "B. Trang thiết bị",
                        answerC: "C. Bất động sản",
                        answerD: "D. Doanh thu",
                    },
                ],
            },
            {
                answerA: "A. stock",
                answerB: "B. equipment",
                answerC: "C. property",
                answerD: "D. revenue",
                order: 8,
                explains: [
                    {
                        explain: "Cần một điền tính từ thích hợp.",
                        question:
                            "<p>Tạm dịch/Mở rộng</p><p> Bạn muốn sử dụng xe đạp để khám phá khu thắng cảnh Lakeview Corridor? Tàu của chúng tôi có trang thiết bị các bạn cần để vận chuyển xe đạp một cách an toàn.</p>",
                        answerA: "A. Cổ phần",
                        answerB: "B. Trang thiết bị",
                        answerC: "C. Bất động sản",
                        answerD: "D. Doanh thu",
                    },
                ],
            },
        ],
    },
];

const PartSix = () => {
    return (
        <div>
            {options.map((option, index) => (
                <div className="w-full rounded-lg border mb-3" key={index}>
                    <ChipTag text={`[Part 6] Hoàn thành đoạn văn`} className={`w-[250px]`} />

                    <div className="flex">
                        <div className="flex flex-col w-[62%] px-3 py-4 bg-[#cfe2ff] rounded-lg m-3 h-[650px] overflow-y-auto">
                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{ __html: option.question }}
                            />
                            <Transcript option={option} />
                        </div>

                        <div className="flex w-[38%] h-[650px] overflow-y-auto mt-3">
                            <div key={index} className="flex flex-col">
                                {option.answers.map((answer, index) => (
                                    <div key={index}>
                                        <div className="flex my-2">
                                            <p className="mr-3 w-[20%] h-[35px] bg-[#e3faff] rounded-full flex items-center justify-center text-[#34447c] font-medium">
                                                {answer.order}
                                            </p>
                                            <Question question={answer} />
                                        </div>
                                        {answer.explains.map((explain, index) => (
                                            <ExplainQuestion value={explain} key={index} />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PartSix;
