import React from "react";
import SkillContentItem from "./SkillContentItem";
import "../index.css"

const listeningSections = [
    {
        title: "Phần 1: Mô tả tranh",
        description: "Thí sinh sẽ nghe 1 lần duy nhất 4 câu mô tả về một bức tranh. Sau đó chọn 1 đáp án mô tả đúng nhất bức tranh đó.",
        image: "/listen/part-1.png",
    },
    {
        title: "Phần 2: Hỏi - Đáp",
        description: "Thí sinh sẽ nghe 1 lần duy nhất 3 câu hỏi đáp cho 1 câu hỏi hoặc 1 câu nói. Sau đó chọn câu hỏi đáp phù hợp nhất.",
        image: "/listen/part-2.png",
    },
    {
        title: "Phần 3: Đoạn hội thoại",
        description: "Thí sinh sẽ nghe 1 lần duy nhất các đoạn hội thoại giữa 2 hoặc 3 người. Mỗi đoạn hội thoại sẽ có 4 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.",
        image: "/listen/part-3.png",
    },
    {
        title: "Phần 4: Bài nói ngắn",
        description: "Thí sinh sẽ nghe 1 lần duy nhất các bài nói ngắn. Mỗi bài sẽ có 3 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.",
        image: "/listen/part-4.png",
    },
];

const readingSections = [
    {
        title: "Phần 5: Hoàn thành câu",
        description: "Chọn đáp án đúng nhất trong 4 đáp án để hoàn thành câu.",
        image: "/read/part-5.png",
    },
    {
        title: "Phần 6: Hoàn thành đoạn văn",
        description: "Chọn đáp án đúng nhất trong 4 đáp án để hoàn thành câu.",
        image: "/read/part-6.png",
    },
    {
        title: "Phần 7: Đọc hiểu - Đoạn đơn",
        description: "Thí sinh sẽ đọc các bài đọc hiểu sau đó chọn đáp án đúng nhất cho các câu hỏi. Mỗi bài đọc sẽ bao gồm 2 - 4 câu hỏi.",
        image: "/read/part-7.jfif",
    },
    {
        title: "Phần 7: Đọc hiểu - Đoạn kép",
        description: "Thí sinh sẽ đọc các bài đọc hiểu sau đó chọn đáp án đúng nhất cho các câu hỏi. Mỗi bài đọc sẽ bao gồm 5 câu hỏi.",
        image: "/read/part-7-2.jfif",
    },
    {
        title: "Phần 7: Đọc hiểu - Đoạn ba",
        description: "Thí sinh sẽ đọc các bài đọc hiểu sau đó chọn đáp án đúng nhất cho các câu hỏi. Mỗi bài đọc sẽ bao gồm 5 câu hỏi.",
        image: "/read/part-7-3.jfif",
    },
];

const SkillContent = () => {


    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl text-center my-8 uppercase text-[#34447c]">
                Luyện thi TOEIC online có đáp án
            </h1>
            <div>
                <h2 className="text-2xl font-semibold mb-8 text-[#34447c]">Phần Nghe</h2>
                <SkillContentItem sections={listeningSections} />
                <h2 className="text-2xl font-semibold mt-12 mb-8 text-[#34447c]">Phần Đọc</h2>
                <SkillContentItem sections={readingSections} />
            </div>
        </div>
    );
};

export default SkillContent;
