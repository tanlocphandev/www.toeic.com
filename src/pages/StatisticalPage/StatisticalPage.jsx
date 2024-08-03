import { useGetExams } from "@/hooks/exam/exam.query.hook";
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

    // console.log(`data:::`, data);

    return (
        <Container title={isHiddenTitle ? "" : "Kết quả luyện thi"}>
            <SumHistoryTest data={data} isLoading={isLoading} />

            <Chart />
        </Container>
    );
};

export default StatisticalPage;
