import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { memo, useMemo } from "react";

const chartConfig = {
    score: {
        label: "Điểm",
        color: "hsl(var(--chart-1))",
    },
};

const ChartCustom = ({ data = [] }) => {
    const length = useMemo(() => data?.length || 0, [data]);

    const width = useMemo(() => {
        if (length >= 0 && length <= 10) {
            return "w-full";
        } else if (length > 10 && length <= 15) {
            return "w-[1100px]";
        } else if (length > 15 && length <= 20) {
            return "w-[1400px]";
        } else if (length > 20 && length <= 25) {
            return "w-[1700px]";
        } else if (length > 25 && length <= 30) {
            return "w-[3000px]";
        } else if (length > 30 && length < 50) {
            return "w-[4500px]";
        } else if (length >= 50 && length < 200) {
            return "w-[6000px]";
        } else {
            return "w-[20000px]";
        }
    }, [length]);

    return (
        <ScrollArea className="h-full">
            <ChartContainer
                className={cn("h-[360px]", width)}
                heightChartContainer={350}
                config={chartConfig}
            >
                <BarChart
                    accessibilityLayer
                    data={data}
                    margin={{
                        top: 30,
                    }}
                >
                    <CartesianGrid vertical={false} />

                    <XAxis
                        dataKey="label"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 7)}
                        className="fill-foreground"
                    />

                    <ChartTooltip cursor={true} content={<ChartTooltipContent />} />

                    <Bar
                        dataKey="score"
                        fill="var(--color-score)"
                        barSize={50}
                        radius={8}
                        width={30}
                    >
                        <LabelList
                            position="top"
                            offset={12}
                            className="fill-foreground"
                            fontSize={12}
                        />
                    </Bar>
                </BarChart>
            </ChartContainer>

            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

ChartCustom.displayName = "ChartCustom";

export default memo(ChartCustom);
