import ChartCustom from "@/components/shared/ChartCustom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChartLine from "@/pages/StatisticalPage/components/ChartLine";
import { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";

const Chart = ({ countFullTest = 0, maxQuestionCorrect = [], statisticByDates = [] }) => {
    const [selectedPart, setSelectedPart] = useState("Part 1");

    const handleSelectChange = (event) => {
        setSelectedPart(event.target.value);
    };

    return (
        <div className="p-4 shadow-md border rounded-lg mt-4">
            <div className="flex mb-4">
                <AiFillThunderbolt className="text-yellow-500 mr-1 text-2xl" />
                <p className="text-xl font-bold">LƯỢT THI: {countFullTest}</p>
            </div>

            <div className="flex mt-6 flex-col space-y-4 ">
                <Card className="w-full p-2 rounded-lg border">
                    <CardHeader>
                        <CardTitle className="text-xl text-[#34447c] font-medium">
                            Thống kê điểm cao nhất từng bài thi FULL TEST
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <ChartCustom data={maxQuestionCorrect} />
                    </CardContent>
                </Card>

                <Card className="w-full p-2 rounded-lg border">
                    <CardHeader>
                        <CardTitle className="text-xl text-[#34447c] font-medium">
                            Thống kê tiến độ bài thi theo ngày
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <ChartLine data={statisticByDates} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Chart;
