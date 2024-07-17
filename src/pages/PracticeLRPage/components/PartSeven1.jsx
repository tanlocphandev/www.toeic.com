import ChipTag from "@/components/shared/ChipTag/ChipTag";
import AnswerCorrect from "@/components/shared/PartTest/AnswerCorrect";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import { test71 } from "@/mock/test.mock";
import { Fragment } from "react";

const options = [
    {
        // 4 đoạn 2 câu
        content:
            "<p>Lake view Railway Onboard Bicycle Policy</p><p>Would you like to use your bicycle to explore the Lake view Corridor Scenic Area? Our trains have the (131)— you need to safely transport your bike. When booking your ticket, just remember that reservations - (132) for both you and your bicycle. Reserve your bicycle spot (133)—. There are a limited number of storage racks on each train. You are responsible for stowing your bike securely. (134) . Lakeview Railway does not take responsibility for bicycles lost or damaged aboard our trains.</p>",
        transcript:
            "<p>Chính sách xe đạp trên Lakeview Railway</p><p>Bạn có muốn sử dụng xe đạp của mình để khám phá Khu thắng cảnh Hành lang Lakeview không? Tàu của chúng tôi có  có trang thiết bị (131) - bạn cần vận chuyển xe đạp của mình một cách an toàn. Khi đặt vé của bạn, chỉ cần nhớ rằng đặt chỗ - (132) cho cả bạn và xe đạp của bạn. Đặt chỗ xe đạp của bạn sớm (133) -. Có một số lượng hạn chế của kệ lưu trữ trên mỗi chuyến tàu. Bạn có trách nhiệm cất xe đạp an toàn. Bạn cũng cần mang theo khóa xe đạp riêng (134) . Đường sắt Viewlake không chịu trách nhiệm đối với trường hợp xe đạp bị mất hoặc hỏng trên đường tàu.</p>",
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
        ],
    },
    {
        // 3 đoạn 3 câu
        content:
            "<p>Lake view Railway Onboard Bicycle Policy</p><p>Would you like to use your bicycle to explore the Lake view Corridor Scenic Area? Our trains have the (131)— you need to safely transport your bike. When booking your ticket, just remember that reservations - (132) for both you and your bicycle. Reserve your bicycle spot (133)—. There are a limited number of storage racks on each train. You are responsible for stowing your bike securely. (134) . Lakeview Railway does not take responsibility for bicycles lost or damaged aboard our trains.</p>",
        transcript:
            "<p>Chính sách xe đạp trên Lakeview Railway</p><p>Bạn có muốn sử dụng xe đạp của mình để khám phá Khu thắng cảnh Hành lang Lakeview không? Tàu của chúng tôi có  có trang thiết bị (131) - bạn cần vận chuyển xe đạp của mình một cách an toàn. Khi đặt vé của bạn, chỉ cần nhớ rằng đặt chỗ - (132) cho cả bạn và xe đạp của bạn. Đặt chỗ xe đạp của bạn sớm (133) -. Có một số lượng hạn chế của kệ lưu trữ trên mỗi chuyến tàu. Bạn có trách nhiệm cất xe đạp an toàn. Bạn cũng cần mang theo khóa xe đạp riêng (134) . Đường sắt Viewlake không chịu trách nhiệm đối với trường hợp xe đạp bị mất hoặc hỏng trên đường tàu.</p>",
        answers: [
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
    {
        // 3 đoạn 4 câu
        content:
            "<p>Lake view Railway Onboard Bicycle Policy</p><p>Would you like to use your bicycle to explore the Lake view Corridor Scenic Area? Our trains have the (131)— you need to safely transport your bike. When booking your ticket, just remember that reservations - (132) for both you and your bicycle. Reserve your bicycle spot (133)—. There are a limited number of storage racks on each train. You are responsible for stowing your bike securely. (134) . Lakeview Railway does not take responsibility for bicycles lost or damaged aboard our trains.</p>",
        transcript:
            "<p>Chính sách xe đạp trên Lakeview Railway</p><p>Bạn có muốn sử dụng xe đạp của mình để khám phá Khu thắng cảnh Hành lang Lakeview không? Tàu của chúng tôi có  có trang thiết bị (131) - bạn cần vận chuyển xe đạp của mình một cách an toàn. Khi đặt vé của bạn, chỉ cần nhớ rằng đặt chỗ - (132) cho cả bạn và xe đạp của bạn. Đặt chỗ xe đạp của bạn sớm (133) -. Có một số lượng hạn chế của kệ lưu trữ trên mỗi chuyến tàu. Bạn có trách nhiệm cất xe đạp an toàn. Bạn cũng cần mang theo khóa xe đạp riêng (134) . Đường sắt Viewlake không chịu trách nhiệm đối với trường hợp xe đạp bị mất hoặc hỏng trên đường tàu.</p>",
        answers: [
            {
                question:
                    "What does the chart indicate about all the carpets in the Pleiades Collection?",
                answerA: "A. They will be available in 60 days.",
                answerB: "B. They are currently in stock.",
                answerC: "C. They have different weights.",
                answerD: "D. They are the same size.",
                order: 6,
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
                order: 7,
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
                order: 8,
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
                order: 9,
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

const PartSeven1 = ({ data = [] }) => {
    return (
        <div>
            {data.map((option, index) => (
                <div className="w-full rounded-lg border mb-3" key={index}>
                    <ChipTag text={`[Part 7] Đọc hiểu - Đoạn đơn`} className={"ml-3 mt-3"} />

                    <div className="flex">
                        <div className="flex flex-col w-[62%] px-3 py-4 bg-[#cfe2ff] rounded-lg m-3 max-h-[650px] overflow-y-auto">
                            <TextOrderQuestion orderGroup={option.group_question_order} />

                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: option.text,
                                }}
                            />

                            <Transcript transcript={option.group_transcript} />
                        </div>

                        <div className="flex w-[38%] max-h-[650px] overflow-y-auto mt-3">
                            <div className="flex flex-col">
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

export default PartSeven1;
