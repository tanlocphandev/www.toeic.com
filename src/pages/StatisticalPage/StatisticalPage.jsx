import Chart from "./components/Chart";
import SumHistoryTest from "./components/SumHistoryTest";

const StatisticalPage = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto p-4 ">
                <SumHistoryTest />
                <Chart />
            </div>
        </div>
    );
};

export default StatisticalPage;
