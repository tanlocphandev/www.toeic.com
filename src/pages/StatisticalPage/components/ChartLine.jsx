import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
    exam_target: {
        label: "Target",
        color: "hsl(var(--chart-1))",
    },
    maxScore: {
        label: "Điểm",
        color: "hsl(var(--chart-2))",
    },
};

const ChartLine = ({ data = [] }) => {
    return (
        <ChartContainer
            heightChartContainer={350}
            className="w-full h-[360px]"
            config={chartConfig}
        >
            <LineChart
                accessibilityLayer
                data={data}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    // tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                    dataKey="maxScore"
                    type="monotone"
                    stroke="var(--color-maxScore)"
                    strokeWidth={2}
                    dot={true}
                />
                <Line
                    dataKey="exam_target"
                    type="monotone"
                    stroke="var(--color-exam_target)"
                    strokeWidth={2}
                    dot={true}
                />

                <ChartLegend content={<ChartLegendContent />} />
            </LineChart>
        </ChartContainer>
    );
};

ChartLine.displayName = "ChartLine";

export default ChartLine;
