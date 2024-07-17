import ChipTag from "@/components/shared/ChipTag/ChipTag";
import AnswerCorrect from "@/components/shared/PartTest/AnswerCorrect";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import { Fragment } from "react";

const options = [
    {
        content: `<table class="table table-bordered"><tr><td colspan="6"><p><strong><strong>TYCHE FINE CARPETS</strong>—Pleiades Collection</strong></p><p>Product Availability (updated daily)</p></td></tr><tr><td><strong>Name</strong></td><td><strong>Size</strong><br>(cm)</td><td><strong>Shipping<br>Weight</strong><br>(kg)</td><td><p><strong>Quantity<br>Available</strong><br>(today)</p></td><td><strong>Quantity<br>Available</strong><br>(in 30days)</td><td><strong>Quantity<br>Available</strong><br>(in 60days)</td></tr><tr><td>Artemis</td><td>190x280</td><td>13</td><td>30</td><td>60</td><td>0</td></tr><tr><td>Hera</td><td>190x280</td><td>14</td><td>16</td><td>20</td><td>0</td></tr></table > <p>-------------------------</p><p><strong>To</strong>: Frieda Zuckerman<br><strong>From</strong>: Miles Sorrell<br><strong>Date</strong>: February 5&nbsp;<br><strong>Subject</strong>: Logistical arrangements<br><strong>Attachment</strong>: 📎 Photos</p><p>Dear Ms. Zuckerman:</p><p>I regret to inform you that Tyche Fine Carpets, the supplier we selected for the carpets in The Pavel Hotel’s lobby and lounge areas, will not have our chosen pattern available until after the hotel’s anticipated opening date of March 1. Attached are photographs of several alternative selections that I believe will work well with the décor. They are all made of the same material as the previous selection, and the prices are comparable. With the grand opening less than a month away, I need a decision from you as soon as possible. Even with this last-minute change, I am certain that The Pavel Hotel will provide the ambience we have set out to create.</p><p>Thank you,<br>Miles Sorrell</p><div>-------------------------</div><div><strong>Pavel Hotel Open</strong></div><div>by Lavonne Coe</div><p>(Centerville—March 2) Former city court judge Mildred Simpson joined owner Patrice Snell yesterday to celebrate the opening of The Pavel Hotel in downtown Centerville, between the library and the visitors center. Once the city’s courthouse and Ms. Simpson’s workplace, the existing structure had been vacant for the past nine years. Now the space boasts 34 elegant rooms, an inviting lounge with a ﬁreplace, and a gorgeous lobby. An on-site cafe is expected to open next month. The interior, designed by Miles Sorrell, retains the old features of the building, such as expansive windows and high ceilings, while creating a warm and inviting space.</p>`,
        transcript: `<div><table class="table table-bordered"><tbody><tr><td colspan="6"><p><strong>THẢM ĐẸP TYCHE — Bộ sưu tập Pleiades</strong></p><p>Sản phẩm có sẵn (cập nhật hàng ngày)</p></td></tr><tr><td><strong>Tên</strong></td><td><strong>Kích cỡ</strong><br>(cm)</td><td><strong>Khối lượng<br>vận chuyển</strong><br>(kg)</td><td><p><strong>Số lượng<br>có</strong><br>(hôm nay)</p></td><td><strong>Số lượng<br>có</strong><br>(trong 30 ngày)</td><td><strong>Số lượng<br>có</strong><br>(trong 60 ngày)</td></tr><tr><td>Artemis</td><td>190x280</td><td>13</td><td>30</td><td>60</td><td>0</td></tr><tr><td>Hera</td><td>190x280</td><td>14</td><td>16</td><td>20</td><td>0</td></tr></tbody></table><p>-------------------------</p><p><strong>Kính gửi</strong>: Frieda Zuckerman<br><strong>Từ</strong>: Miles Sorell<br><strong>Ngày</strong>: 5 tháng 2<br><strong>Chủ đề</strong>: Sắp xếp hậu cần<br><strong>Đính kèm</strong>: 📎 Hình ảnh</p><p>Kính gửi bà Zuckerman:</p><p>Tôi rất tiếc phải thông báo cho bà rằng Tyche Fine Carpets, nhà cung cấp chúng tôi đã chọn cho thảm trong khu vực hành lang và sảnh của khách sạn Pavel, sẽ không có mẫu đã chọn của chúng tôi cho đến sau ngày mở cửa dự kiến ​​của khách sạn vào ngày 1 tháng 3. Các hình đính kèm là một vài lựa chọn thay thế mà tôi tin rằng sẽ phù hợp với sự trang trí. Tất cả đều được làm bằng vật liệu giống như lựa chọn trước, và giá cả tương đương nhau. Với việc khai trương chưa đầy một tháng, tôi cần một quyết định từ bà càng sớm càng tốt. Ngay cả với lần thay đổi vào phút cuối này, tôi chắc chắn rằng The Pavel Hotel sẽ mang đến phong cách mà chúng ta đã đặt ra.</p><p>Cảm ơn bà,<br>Miles Sorell</p><div>-------------------------</div><div><strong>Mở cửa khách sạn Pavel</strong></div><div>bởi Lavonne Coe</div><p>(Centerville—ngày 2 tháng 3) Cựu thẩm phán tòa án thành phố Mildred Simpson đã cùng chủ sở hữu Patrice Snell hôm qua để ăn mừng khai trương khách sạn Pavel ở trung tâm thành phố Centerville, nằm giữa thư viện và trung tâm du khách. Một thời từng là tòa án thành phố và nơi làm việc của bà Simpson, công trình hiện tại đã bị bỏ trống trong chín năm qua. Giờ đây, nó tự hào có 34 phòng trang nhã, phòng khách hấp dẫn với lò sưởi trang trí và sảnh tuyệt đẹp. Một quán cà phê bên trong dự kiến ​​sẽ mở vào tháng tới. Nội thất, được thiết kế bởi Miles Sorrell, vẫn giữ được những nét cũ của tòa nhà, như cửa sổ mở rộng và trần nhà cao, đồng thời tạo ra một không gian ấm áp và lôi cuốn.</p></div>`,
        answers: [
            {
                question:
                    "What does the chart indicate about all the carpets in the Pleiades Collection?",
                answerA: "A. They will be available in 60 days.",
                answerB: "B. They are currently in stock.",
                answerC: "C. They have different weights.",
                answerD: "D. They are the same size.",
                order: 1,
                explains: [
                    {
                        explain:
                            "Giải thích: Loại A do có 2 loại thảm không có trong 60 ngày, loại B do loại thứ 3(Janus) không có sẵn ở hiện tại.Loại D do kích cỡ không giống nhau. Dựa vào bảng, nhìn mục shipping weights ta thấy cân nặng khác nhau như thể hiện trong câu C => Đáp án đúng là C Biểu đồ cho biết gì về tất cả các thảm trong Bộ sưu tập Pleiades ? ",
                        question:
                            "<p>Bảng biểu chỉ ra điều gì về thảm trong bộ sưu tập Pleiades?</p>",
                        answerA: "A. Chúng có sẵn trong 60 ngày",
                        answerB: "B. Chúng thường có sẵn hàng trong kho",
                        answerC: "C. Chúng có cân nặng khác nhau",
                        answerD: "D. Chúng có cùng kích cỡ",
                    },
                ],
            },
            {
                question:
                    "What does the chart indicate about all the carpets in the Pleiades Collection?",
                answerA: "A. They will be available in 60 days.",
                answerB: "B. They are currently in stock.",
                answerC: "C. They have different weights.",
                answerD: "D. They are the same size.",
                order: 2,
                explains: [
                    {
                        explain:
                            "Giải thích: Loại A do có 2 loại thảm không có trong 60 ngày, loại B do loại thứ 3(Janus) không có sẵn ở hiện tại.Loại D do kích cỡ không giống nhau. Dựa vào bảng, nhìn mục shipping weights ta thấy cân nặng khác nhau như thể hiện trong câu C => Đáp án đúng là C Biểu đồ cho biết gì về tất cả các thảm trong Bộ sưu tập Pleiades ? ",
                        question:
                            "<p>Bảng biểu chỉ ra điều gì về thảm trong bộ sưu tập Pleiades?</p>",
                        answerA: "A. Chúng có sẵn trong 60 ngày",
                        answerB: "B. Chúng thường có sẵn hàng trong kho",
                        answerC: "C. Chúng có cân nặng khác nhau",
                        answerD: "D. Chúng có cùng kích cỡ",
                    },
                ],
            },
            {
                question:
                    "What does the chart indicate about all the carpets in the Pleiades Collection?",
                answerA: "A. They will be available in 60 days.",
                answerB: "B. They are currently in stock.",
                answerC: "C. They have different weights.",
                answerD: "D. They are the same size.",
                order: 3,
                explains: [
                    {
                        explain:
                            "Giải thích: Loại A do có 2 loại thảm không có trong 60 ngày, loại B do loại thứ 3(Janus) không có sẵn ở hiện tại.Loại D do kích cỡ không giống nhau. Dựa vào bảng, nhìn mục shipping weights ta thấy cân nặng khác nhau như thể hiện trong câu C => Đáp án đúng là C Biểu đồ cho biết gì về tất cả các thảm trong Bộ sưu tập Pleiades ? ",
                        question:
                            "<p>Bảng biểu chỉ ra điều gì về thảm trong bộ sưu tập Pleiades?</p>",
                        answerA: "A. Chúng có sẵn trong 60 ngày",
                        answerB: "B. Chúng thường có sẵn hàng trong kho",
                        answerC: "C. Chúng có cân nặng khác nhau",
                        answerD: "D. Chúng có cùng kích cỡ",
                    },
                ],
            },
            {
                question:
                    "What does the chart indicate about all the carpets in the Pleiades Collection?",
                answerA: "A. They will be available in 60 days.",
                answerB: "B. They are currently in stock.",
                answerC: "C. They have different weights.",
                answerD: "D. They are the same size.",
                order: 4,
                explains: [
                    {
                        explain:
                            "Giải thích: Loại A do có 2 loại thảm không có trong 60 ngày, loại B do loại thứ 3(Janus) không có sẵn ở hiện tại.Loại D do kích cỡ không giống nhau. Dựa vào bảng, nhìn mục shipping weights ta thấy cân nặng khác nhau như thể hiện trong câu C => Đáp án đúng là C Biểu đồ cho biết gì về tất cả các thảm trong Bộ sưu tập Pleiades ? ",
                        question:
                            "<p>Bảng biểu chỉ ra điều gì về thảm trong bộ sưu tập Pleiades?</p>",
                        answerA: "A. Chúng có sẵn trong 60 ngày",
                        answerB: "B. Chúng thường có sẵn hàng trong kho",
                        answerC: "C. Chúng có cân nặng khác nhau",
                        answerD: "D. Chúng có cùng kích cỡ",
                    },
                ],
            },
            {
                question:
                    "What does the chart indicate about all the carpets in the Pleiades Collection?",
                answerA: "A. They will be available in 60 days.",
                answerB: "B. They are currently in stock.",
                answerC: "C. They have different weights.",
                answerD: "D. They are the same size.",
                order: 5,
                explains: [
                    {
                        explain:
                            "Giải thích: Loại A do có 2 loại thảm không có trong 60 ngày, loại B do loại thứ 3(Janus) không có sẵn ở hiện tại.Loại D do kích cỡ không giống nhau. Dựa vào bảng, nhìn mục shipping weights ta thấy cân nặng khác nhau như thể hiện trong câu C => Đáp án đúng là C Biểu đồ cho biết gì về tất cả các thảm trong Bộ sưu tập Pleiades ? ",
                        question:
                            "<p>Bảng biểu chỉ ra điều gì về thảm trong bộ sưu tập Pleiades?</p>",
                        answerA: "A. Chúng có sẵn trong 60 ngày",
                        answerB: "B. Chúng thường có sẵn hàng trong kho",
                        answerC: "C. Chúng có cân nặng khác nhau",
                        answerD: "D. Chúng có cùng kích cỡ",
                    },
                ],
            },
        ],
    },
];

const PartSeven3 = ({ data = [] }) => {
    return (
        <div>
            {data.map((option, index) => (
                <div className="w-full rounded-lg border mb-3" key={index}>
                    <ChipTag text={`[Part 7] Đọc hiểu - Đoạn ba`} className={`w-[250px]`} />

                    <div className="flex">
                        <div className="flex flex-col w-[62%] px-3 py-4 bg-[#cfe2ff] rounded-lg m-3 h-[650px] overflow-y-auto">
                            <TextOrderQuestion orderGroup={option.group_question_order} />

                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: option.text,
                                }}
                            />

                            <Transcript transcript={option.group_transcript} />
                        </div>
                        <div className="flex w-[38%] h-[650px]  overflow-y-auto mt-3">
                            <div key={index} className="flex flex-col">
                                {option.group_questions.map((question, idx) => {
                                    return (
                                        <Fragment key={idx}>
                                            <div className="flex my-2">
                                                <TextOrderQuestion order={question.order} />

                                                <Question
                                                    question={question?.text_question}
                                                    answers={question?.answers}
                                                />
                                            </div>

                                            <AnswerCorrect
                                                textAnswerCorrect={question.is_correct_cap}
                                            />

                                            <ExplainQuestion explain={question.explain} />
                                        </Fragment>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PartSeven3;
