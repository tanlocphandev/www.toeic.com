import {
    useGetCountExamFullTest,
    useGetExams,
    useGetMaxQuestionCorrect,
    useGetStatisticByDate,
    useGetSumExamFullTest,
} from "@/hooks/exam/exam.query.hook";
import Chart from "./components/Chart";
import SumHistoryTest from "./components/SumHistoryTest";
import Container from "@/components/ui/container";
import { fDate } from "@/utils/fDate";

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

    const { data: statisticByDates, isLoading: isLoadingStatisticByDate } = useGetStatisticByDate(
        (data) => {
            const groupByDate = data?.metadata?.reduce((acc, item) => {
                if (!acc[fDate(item.created_at, "DD-MM-YYYY")]) {
                    acc[fDate(item.created_at, "DD-MM-YYYY")] = [];
                }

                acc[fDate(item.created_at, "DD-MM-YYYY")].push(item);

                return acc;
            }, {});

            const dataGroupByDate = Object.keys(groupByDate).map((key) => {
                return {
                    date: key,
                    data: groupByDate[key],
                };
            });

            const dataGroupByDateMaxScore = dataGroupByDate.map((item) => {
                const maxScore = Math.max(...item.data.map((item) => item.score.totalScore));

                const foundMaxScore = item.data.find((item) => item.score.totalScore === maxScore);

                return {
                    date: item.date,
                    exam_target: foundMaxScore?.exam_target,
                    maxScore: Math.max(...item.data.map((item) => item.score.totalScore)),
                };
            });

            return dataGroupByDateMaxScore;
        }
    );

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
                statisticByDates={statisticByDates}
                isLoading={
                    isLoadingCount || isLoadingMaxQuestionCorrect || isLoadingStatisticByDate
                }
            />
        </Container>
    );
};

export default StatisticalPage;
