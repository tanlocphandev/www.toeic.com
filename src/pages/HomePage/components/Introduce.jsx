import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import "../index.css";

const Introduce = () => {
    return (
        <div className="text-center mt-20 mb-10">
            <TypographyH1
                className="font-bold text-gradient animate-rainbow !leading-snug"
                text="Luyện thi thử TOEIC online 2024 "
            />
            <TypographyH2
                className="text-[#8293d0] font-bold text-[18px] ml-32 mr-32 mt-10"
                text="Chào mừng đến với TOEIC 2024 , trang web TOEIC cung cấp cho người học các bài luyện tập
            theo từng part, đề thi thử cũng như các bài tập về từ vựng và ngữ pháp. Bắt đầu hành
            trình chinh phục chứng chỉ TOEIC với các bài luyện tập trên trang web của chúng tôi ngay
            hôm nay!"
            />
            <div className="mt-5">
                <Button className="bg-zinc-500 mr-5 rounded-full text-[24px] font-thin py-5 px-14">
                    Listening
                </Button>
                <Button className="bg-zinc-500 rounded-full text-[24px] font-thin py-5 px-14">
                    Reading
                </Button>
            </div>
        </div>
    )
}

export default Introduce