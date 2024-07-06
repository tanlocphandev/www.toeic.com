import React from "react";

const ReadingTips = ({ docRefs }) => {
    return (
        <div
            className="max-w-6xl mx-auto p-2 rounded-lg space-y-4 flex-col font-medium text-justify mb-2"
            ref={docRefs.rctips}
        >
            <div className="border border-[#34447c] font-medium text-justify rounded-lg p-4">
                <div>
                    <h1 className="text-center mt-3 text-3xl text-[#34447c] font-bold">
                        <span>5 Mẹo Để Thành Công Trong Phần Đọc Toeic Của Bạn!</span>
                    </h1>
                    <p className="text-[#8293d0] my-3 text-center px-16 ">
                        Phần Reading của Toeic thường được coi là phần khó, nhưng với chiến lược phù
                        hợp, bạn có thể xuất sắc. Cái này phần này đánh giá khả năng hiểu các tài
                        liệu viết bằng tiếng Anh của bạn. Bạn sẽ cần có khả năng đọc Và hiểu được
                        nhiều loại nội dung khác nhau trong một khoảng thời gian giới hạn.
                    </p>

                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/1HMnDELvTag"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="h-[400px] overflow-y-auto">
                    <h2 className="mt-3 underline text-red-500">Mẹo 1: Quản lý thời gian</h2>
                    <p>
                        Phần thi Toeic Reading có giới hạn về thời gian. Bạn sẽ có một khoảng thời
                        gian giới hạn để trả lời một loạt câu hỏi liên quan đến nhiều đọc đoạn văn.
                        Thực hành quản lý thời gian bằng cách phân bổ thời gian cụ thể cho mỗi đoạn
                        văn và tương ứng câu hỏi. Nếu bạn thấy một câu hỏi quá tốn thời gian, hãy
                        tiếp tục và quay lại câu hỏi đó sau nếu cần. không nhận được mắc kẹt trên
                        một câu hỏi duy nhất.
                    </p>
                    <p>
                        Hãy nhớ rằng, bạn không kiếm được thêm điểm khi hoàn thành nhanh chóng, vì
                        vậy hãy sử dụng thời gian của mình một cách khôn ngoan. Điều quan trọng là
                        phải trả lời tất cả câu hỏi, ngay cả khi bạn cần đưa ra những phỏng đoán có
                        căn cứ khi không còn nhiều thời gian.
                    </p>
                    <h2 className="mt-3 underline text-red-500">Mẹo 2: Đọc lướt và quét</h2>
                    <p>
                        Skimming và Scanning là những kỹ năng quý giá cho phần Reading. Đọc lướt bao
                        gồm việc đọc nhanh lối đi tới có được một ý tưởng chung về nội dung của nó.
                        Quét có nghĩa là tìm kiếm văn bản để tìm thông tin hoặc từ khóa cụ thể. Sử
                        dụng đọc lướt để hiểu chủ đề chính của đoạn văn và đọc lướt để tìm câu trả
                        lời cho các câu hỏi một cách hiệu quả.
                    </p>

                    <h2 className="mt-3 underline text-red-500">Mẹo 3: Nâng cao vốn từ vựng</h2>
                    <p>
                        Mở rộng vốn từ vựng của bạn là điều cần thiết. Phần thi Toeic Reading thường
                        bao gồm các từ và cụm từ có thể không được phổ biến trong tiếng Anh hàng
                        ngày. Thực hành bằng cách đọc báo, tạp chí hoặc sách tiếng Anh. Chú ý đến từ
                        đồng nghĩa và từ trái nghĩa, vì các câu hỏi có thể yêu cầu bạn xác định các
                        từ có nghĩa tương tự hoặc trái ngược nhau.
                    </p>
                    <p>
                        Đối với Phần 5 (Câu chưa hoàn chỉnh), bạn sẽ gặp những cụm từ hoặc mệnh đề
                        có từ bị thiếu. Hiểu biết về bối cảnh là chìa khóa để chọn từ đúng để điền
                        vào chỗ trống.
                    </p>

                    <h2 className="mt-3 underline text-red-500">Mẹo 4: Luyện tập suy luận</h2>
                    <p>
                        Phần thi Toeic Reading thường kiểm tra khả năng suy luận của bạn. Bạn sẽ cần
                        rút ra kết luận từ các thông tin được trình bày trong đoạn văn. Thực hành
                        đọc giữa các dòng và xác định ngụ ý thông tin. Nhìn những manh mối trong văn
                        bản gợi ý điều tác giả muốn truyền tải.
                    </p>

                    <h2 className="mt-3 underline text-red-500">
                        Mẹo 5: Tính nhất quán là chìa khóa
                    </h2>
                    <p>
                        Cải thiện kỹ năng đọc của bạn cần có thời gian và sự nhất quán. Hãy biến
                        việc đọc thành một phần thói quen hàng ngày của bạn. Liệu của nó tin tức,
                        tiểu thuyết hoặc văn bản học thuật, việc đọc thường xuyên có thể giúp bạn
                        trở nên thoải mái hơn với những nội dung đa dạng phong cách viết và chủ đề.
                        Càng đọc nhiều, bạn càng hiểu được tiếng Anh viết tốt hơn.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReadingTips;
