import Head from "@/components/shared/Head";
import Container from "@/components/ui/container";
import { EXAM_TYPES } from "@/constants";
import { useGetExamDetails } from "@/hooks/exam/exam.query.hook";
import { useRouter } from "@/hooks/useRouter";
import { cn } from "@/lib/utils";
import { Howl } from "howler";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FinishedPage = () => {
    const { resultId } = useParams();
    const router = useRouter();
    const { data } = useGetExamDetails(resultId, (data) => data?.metadata);

    useEffect(() => {
        const sound = new Howl({
            src: ["/audio/sound-congratulations-2.mp3"],
            autoplay: true,
            loop: false,
        });

        // Chơi âm thanh sau khi tài liệu đã được tải
        sound.once("load", () => {
            sound.play();
        });
    }, []);

    useEffect(() => {
        if (!data) return;

        const href =
            data?.exam_type === EXAM_TYPES.FULL_TEST
                ? `/exams/exam-result/${resultId}`
                : `/results/${resultId}`;

        const timeout = router.delay(href, 4440);

        return () => {
            clearTimeout(timeout);
        };
    }, [data, router, resultId]);

    return (
        <Container data-aos="zoom-in">
            <Head title={"Bạn đã hoàn thành bài thi"} />

            <div className="flex items-center justify-center space-y-8 flex-col">
                <p className="text-green-500 text-3xl font-bold mb-5">
                    Sẽ được chuyển hướng tự động đến trang kết quả
                </p>

                <div className="flex space-x-5">
                    <img
                        src="/gif/v7.gif"
                        alt=""
                        loading="lazy"
                        className="object-cover w-74 h-64"
                    />

                    <img
                        src="/gif/v4.gif"
                        alt=""
                        loading="lazy"
                        className="object-cover w-74 h-64"
                    />
                </div>

                <div className="mt-5 flex space-x-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className={cn("animate-bounce w-3 h-3 rounded-full bg-pink-500", {
                                "delay-500": index % 2 === 0,
                            })}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FinishedPage;
