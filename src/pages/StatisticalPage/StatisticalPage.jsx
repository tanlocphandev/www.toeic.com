import {
    useGetCountExamFullTest,
    useGetExams,
    useGetMaxQuestionCorrect,
    useGetSumExamFullTest,
} from "@/hooks/exam/exam.query.hook";
import Chart from "./components/Chart";
import SumHistoryTest from "./components/SumHistoryTest";
import Container from "@/components/ui/container";

const StatisticalPage = ({ isHiddenTitle = false }) => {
    const { data, isLoading } = useGetExams({
        params: {
            all: "true",
        },
        select: (data) => {
            const results = [];

            if (data.metadata) {
                data.metadata.forEach((item) => {
                    const index = results.findIndex(
                        (result) => result.test_id === item.test.test_id
                    );

                    if (index === -1) {
                        results.push({
                            ...item.test,
                            exams: [item],
                        });
                    } else {
                        results[index].exams.push(item);
                    }
                });
            }

            return results.sort((a, b) => a.test_no_of_year - b.test_no_of_year);
        },
    });

    const { data: countFullTest, isLoading: isLoadingCount } = useGetCountExamFullTest();
    const { data: sumTimerFullTest, isLoading: isLoadingSumTimerFullTest } =
        useGetSumExamFullTest();
    const { data: maxQuestionCorrect, isLoading: isLoadingMaxQuestionCorrect } =
        useGetMaxQuestionCorrect((data) => {
            return data?.metadata?.map((t) => {
                return {
                    label: `${t?.test_name} ${t?.test_tag}`,
                    score: t?.score?.totalScore,
                };
            });
        });

    return (
        <Container title={isHiddenTitle ? "" : "Kết quả luyện thi"}>
            <SumHistoryTest
                data={data}
                isLoading={isLoading || isLoadingSumTimerFullTest}
                sumTimerFullTest={sumTimerFullTest}
            />

            <Chart
                maxQuestionCorrect={maxQuestionCorrect}
                countFullTest={countFullTest}
                isLoading={isLoadingCount || isLoadingMaxQuestionCorrect}
            />
        </Container>
    );
};

export default StatisticalPage;
