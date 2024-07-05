import React, { useEffect } from "react";

const MaxScore = () => {
    useEffect(() => {
        drawChart();
    }, []);

    const drawChart = () => {
        const canvas = document.getElementById("myChart");
        const ctx = canvas.getContext("2d");

        // Sample data
        const data = [295, 200, 50, 30];
        const labels = [
            "ETS FullTest Test 1",
            "ETS FullTest Test 2",
            "ETS FullTest Test 3",
            "ETS FullTest Test 4",
        ];
        const maxScore = 400;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid lines
        ctx.strokeStyle = "#e0e0e0";
        ctx.lineWidth = 1;
        for (let i = 0; i <= maxScore; i += 100) {
            const y = canvas.height - 40 - (i / maxScore) * (canvas.height - 40);
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Draw bars
        const barWidth = 60;
        const gap = 40;
        const chartHeight = canvas.height - 40;

        labels.forEach((label, index) => {
            const x = gap + index * (barWidth + gap);
            const y = chartHeight - (data[index] / maxScore) * chartHeight;
            const barHeight = (data[index] / maxScore) * chartHeight;

            // Draw bar
            ctx.fillStyle = "#34447c";
            ctx.fillRect(x, y, barWidth, barHeight);

            // Draw label
            ctx.fillStyle = "#000";
            ctx.fillText(label, x, canvas.height - 20);

            // Draw value
            ctx.fillText(data[index], x + barWidth / 4, y - 5);
        });

        // Draw total score
        const totalScore = data.reduce((a, b) => a + b, 0);
        ctx.fillStyle = "#000";
        ctx.font = "10px Arial";
        ctx.fillText(`Total Score: ${totalScore}`, canvas.width - 140, 30);
    };

    return <canvas id="myChart" width="500" height="400"></canvas>;
};

export default MaxScore;
