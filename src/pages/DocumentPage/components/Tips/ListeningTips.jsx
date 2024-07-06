import React from "react";
import { FaSquare } from "react-icons/fa";

const ListeningTips = ({ docRefs }) => {
    return (
        <div className="max-w-6xl mx-auto p-2 space-y-4 rounded-lg" ref={docRefs.lctips}>
            <div className="border border-[#34447c] font-medium text-justify rounded-lg p-4">
                <div>
                    <h1 className="text-center mt-3 text-3xl text-[#34447c] font-bold">
                        <span>5 mẹo để thành công trong phần thi Nghe Toeic của bạn!</span>
                    </h1>
                    <p className="text-[#8293d0] my-3 text-center px-16 ">
                        Phần Nghe của Toeic là một phần đáng sợ đối với những người không thoải mái
                        khi nói. Nó cũng đòi hỏi khả năng tập trung cao độ. Bài kiểm tra kéo dài 45
                        phút và bạn không thể dừng nhạc nền hoặc quay lại.
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
                    <h2 className="mt-3 underline text-red-500">
                        Mẹo 1: Theo kịp nhịp độ của nhịp nghe.
                    </h2>
                    <p>
                        Các câu hỏi nối tiếp nhau một cách nhanh chóng. Bài kiểm tra dài và các loại
                        câu hỏi có rất nhiều dạng giống nhau. Thật dễ dàng để mất tập trung. Mặt
                        khác, bạn sẽ thường xuyên nghi ngờ giữa nhiều lựa chọn trả lời và không còn
                        thời gian để trả lời. Khi một câu hỏi mới được thông báo và bạn chưa trả lời
                        câu hỏi trước đó, hãy trả lời ngẫu nhiên và tập trung vào câu hỏi tiếp theo.
                        Đừng cố quay lại.
                    </p>
                    <p>
                        Hãy nhớ trả lời tất cả các câu hỏi ngay cả khi bạn phải trả lời ngẫu nhiên
                        (cố gắng loại bỏ bất kỳ lựa chọn trả lời nào mà bạn cho là không đúng). Thật
                        vậy, bạn không bị mất bất kỳ điểm nào trong trường hợp trả lời sai. Bạn
                        không kiếm được gì cả. Ngoài ra, bằng cách để trống các khoảng trống, bạn có
                        thể tạo ra sự thay đổi trong lưới phản hồi, điều mà bạn thực sự muốn tránh.
                    </p>

                    <h2 className="mt-3 underline text-red-500">
                        Mẹo 2: Đi trước nhịp nghe và dự đoán đáp án đúng
                    </h2>
                    <p>
                        Trong khi người kể chuyện lặp lại hướng dẫn cho một phần (các phần này luôn
                        giống nhau từ bài kiểm tra này đến bài kiểm tra khác), bạn nên tập trung vào
                        câu hỏi phía trước. Bằng cách đó, ngay sau khi bạn trả lời xong một câu hỏi,
                        bạn có thể chuẩn bị cho câu hỏi tiếp theo (do đó, việc trả lời nhanh sẽ rất
                        thú vị).
                    </p>
                    <p>
                        Đối với Phần 1, bạn có thể nhìn vào bức tranh và tưởng tượng những câu mô tả
                        về hình ảnh đó. Điều này sẽ giúp bạn dễ dàng xác định câu trả lời đúng hơn.
                        Đối với phần 3 và 4, việc đọc câu hỏi trước khi nghe đoạn hội thoại hoặc độc
                        thoại sẽ rất hữu ích. Nó cung cấp cho bạn thông tin về ngữ cảnh, giúp bạn
                        hiểu đoạn văn dễ dàng hơn. Ngoài ra, nó cho phép bạn tập trung vào các chi
                        tiết của nhạc nền mà bạn sẽ cần để trả lời chính xác các câu hỏi. Ví dụ, nếu
                        bạn được hỏi &quot;tàu khởi hành lúc mấy giờ?&quot;, bạn sẽ cố gắng ghi nhớ
                        thông tin này trong khi nghe.
                    </p>
                    <p>
                        Cuối cùng, việc hoàn thành mỗi câu hỏi trước thời gian quy định sẽ giúp bạn
                        theo kịp nhịp độ của bản nhạc và tránh khả năng bỏ học gây căng thẳng.
                    </p>

                    <h2 className="mt-3 underline text-red-500">
                        Mẹo 3: Cải thiện vốn từ vựng Toeic của bạn.
                    </h2>
                    <p>
                        <b className="text-warning">TOEIC</b>là một bài kiểm tra lặp đi lặp lại.
                        Việc nắm vững các từ vựng dành riêng cho Toeic sẽ giúp ích cho bạn rất
                        nhiều.
                    </p>
                    <p>Đối với phần 1, bạn phải nắm vững:</p>
                    <p>Động từ chuyển động (chúng sẽ được dùng ở dạng tiếp diễn “be + -ing”)</p>
                    <p>Đối với phần 3 và 4, một số chủ đề được lặp lại như:</p>
                    <p className="flex items-center">
                        <FaSquare className="mr-1 text-xs" /> Making an appointment
                    </p>
                    <p className="flex items-center">
                        <FaSquare className="mr-1 text-xs" /> Weather reports
                    </p>
                    <p className="flex items-center">
                        <FaSquare className="mr-1 text-xs" /> Business trips for a seminar or a
                        conference
                    </p>
                    <p className="flex items-center">
                        <FaSquare className="mr-1 text-xs" /> Communication in business
                    </p>
                    <p className="flex items-center">
                        <FaSquare className="mr-1 text-xs" /> Trade
                    </p>

                    <h2 className="mt-3 underline text-red-500">
                        Mẹo 4: Làm quen với những câu hỏi điển hình của phần 2.
                    </h2>
                    <p>
                        Phần 2 rất dễ học, số lượng khái niệm được kiểm tra có hạn và các thủ thuật
                        tương tự xuất hiện nhiều lần trong cùng một bài kiểm tra.
                    </p>
                    <p>
                        <b className="text-warning">Yes / No questions</b>. Đây là những câu hỏi
                        đóng chờ đợi câu trả lời khẳng định hoặc phủ định. Ex: "Have you left the
                        package at the Post Office?" Xin lưu ý, câu trả lời cho loại câu hỏi này
                        không phải lúc nào cũng chứa từ &quot;Có&quot; hoặc &quot;Không&quot;. Có
                        rất nhiều bẫy. Chúng ta rất có thể trả lời &quot;Sáng nay tôi đã gửi gói
                        hàng đó&quot;. Người tạo bài kiểm tra thường bao gồm các câu trả lời thủ
                        thuật như “Yes, I went to see my grandmother.”
                    </p>
                    <p>
                        <b className="text-warning">Open questions</b>. Đây là những câu hỏi bắt đầu
                        bằng một đại từ nghi vấn như "what / where / when / how long / how many /
                        how much ...". Bạn phải tập trung vào từ đầu tiên của câu hỏi để biết liệu
                        Câu trả lời là một đồ vật, một địa điểm, một ngày tháng, v.v...
                    </p>

                    <h2 className="mt-3 underline text-red-500">
                        Mẹo 5: Hãy làm quen với đôi tai của bạn
                    </h2>
                    <p>
                        Không có gì bí mật, để hiểu tiếng Anh trước tiên bạn phải nghe nó. Chúng tôi
                        khuyến khích bạn xem tất cả loạt phim, phim phiên bản tiếng Anh KHÔNG CÓ phụ
                        đề tiếng Anh.
                    </p>
                    <p>
                        Việc thiếu phụ đề sẽ buộc bạn phải tập trung vào những từ bạn không hiểu
                        trong ngữ cảnh nhất định. Các Vài giờ đầu tiên xem phim không có phụ đề có
                        thể khiến bạn nản lòng, hãy kiên nhẫn chờ đợi vì quá trình này tiến triển
                        rất nhanh phương pháp.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ListeningTips;
