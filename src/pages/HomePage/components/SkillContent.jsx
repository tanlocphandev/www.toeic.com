import useDataQuestionType from "@/hooks/questionType/useDataQuestionType";
import "../index.css";
import SkillContentItem from "./SkillContentItem";

const SkillContent = () => {
    const { data } = useDataQuestionType({
        page: 1,
        select: (data) => {
            if (!data?.metadata) {
                return {
                    listeningSections: [],
                    readingSections: [],
                };
            }

            return {
                listeningSections:
                    data?.metadata?.filter((item) => item?.part?.part_number <= 4) || [],
                readingSections:
                    data?.metadata?.filter((item) => item?.part?.part_number >= 5) || [],
            };
        },
    });

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl text-center my-8 uppercase text-[#34447c]">
                Luyện thi TOEIC online có đáp án
            </h1>

            {data?.listeningSections?.length === 0 && data?.readingSections?.length === 0 ? (
                <div className="text-center">
                    <p className="text-lg text-red-500">Chưa có bài luyện tập trong phần TOEIC</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-semibold mb-8 text-[#34447c]">Phần Nghe</h2>
                    <SkillContentItem sections={data?.listeningSections} />

                    <h2 className="text-2xl font-semibold mt-12 mb-8 text-[#34447c]">Phần Đọc</h2>
                    <SkillContentItem sections={data?.readingSections} />
                </div>
            )}
        </div>
    );
};

export default SkillContent;
