import { useGetExams } from "@/hooks/exam/exam.query.hook";
import Chart from "./components/Chart";
import SumHistoryTest from "./components/SumHistoryTest";

const StatisticalPage = () => {
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
        <div>
            <div className="max-w-6xl mx-auto p-4 ">
                <SumHistoryTest data={data} isLoading={isLoading} />

                <Chart />
            </div>
        </div>
    );
};

export default StatisticalPage;
