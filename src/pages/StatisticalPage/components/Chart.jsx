import ChartCustom from "@/components/shared/ChartCustom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";

const Chart = ({ countFullTest = 0, maxQuestionCorrect = [] }) => {
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

            <div className="flex justify-center">
                <select
                    value={selectedPart}
                    onChange={handleSelectChange}
                    className="w-[60%] mr-4 border border-gray-300 rounded-lg p-2 outline-none bg-white text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                    <option value="Part 1">Part 1</option>
                    <option value="Part 2">Part 2</option>
                    <option value="Part 3">Part 3</option>
                    <option value="Part 4">Part 4</option>
                    <option value="Part 5">Part 5</option>
                    <option value="Part 6">Part 6</option>
                    <option value="Part 7">Part 7</option>
                </select>

                {/* Chọn part nào thì chuyển hướng đến part đó trong practice */}
                <button className="bg-[#34447c] text-white px-4 py-2 rounded-lg">
                    CẢI THIỆN NGAY
                </button>
            </div>
            <div className="flex mt-6 flex-col space-y-4 ">
                <div className="flex space-x-4 ">
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
                    {/* <div className="w-1/2 p-2 rounded-lg border">
                        <h2 className="text-xl text-[#34447c] font-medium text-center mb-4 ">
                            Thống kê tỷ lệ trung bình độ chính xác từng phần
                            <p>(Đúng / Tổng Đ+S)</p>
                        </h2>
                        <img src="/chart1.png" alt="" />
                    </div> */}
                </div>
                <div className="p-2 rounded-lg border">
                    <h2 className="text-xl text-[#34447c] font-medium text-center mb-4 ">
                        Thống kê tỷ lệ trung bình độ chính xác từng phần
                        <p>(Đúng / Tổng Đ+S)</p>
                    </h2>
                    <img src="/chart2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Chart;
