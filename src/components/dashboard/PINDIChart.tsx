import type { PiNdiItem } from "../../types/dashboard";

interface PINDIChartProps {
    data: PiNdiItem[];
}

const PINDIChart = ({ data }: PINDIChartProps) => {
    const maxValue =
        data.length > 0
            ? Math.max(
                ...data.map((d) => Math.max(d.pi, d.ndi)),
                10
            )
            : 10;

    const chartHeight = 130;
    const chartWidth = 290;
    const paddingX = 20;
    const paddingTop = 10;
    const paddingBottom = 15;

    const groupWidth =
        data.length > 0
            ? (chartWidth - paddingX * 2) / (data.length - 1)
            : 0;

    const barWidth = groupWidth * 0.25;
    const gapBetweenBars = groupWidth * 0.1;

    return (
        <svg
            width="100%"
            height={chartHeight + 20}
            viewBox={`0 0 ${chartWidth} ${chartHeight + 14}`}
        >
            {data.map((item, index) => {
                const baseX = paddingX + groupWidth * index;

                const usableHeight =
                    chartHeight - paddingTop - paddingBottom;

                const piHeight = (usableHeight * item.pi) / maxValue;
                const ndiHeight = (usableHeight * item.ndi) / maxValue;

                const offset = barWidth / 2 + gapBetweenBars / 2;

                const piCenterX = baseX - offset;
                const ndiCenterX = baseX + offset;

                const piX = piCenterX - barWidth / 2;
                const ndiX = ndiCenterX - barWidth / 2;

                const piY = chartHeight - paddingBottom - piHeight;
                const ndiY = chartHeight - paddingBottom - ndiHeight;

                return (
                    <g key={index}>
                        {/* PI 막대 (연두) */}
                        <rect
                            x={piX}
                            y={piY}
                            width={barWidth}
                            height={piHeight}
                            rx={6}
                            fill="#C8E6C9"
                        />
                        {/* NDI 막대 (핑크) */}
                        <rect
                            x={ndiX}
                            y={ndiY}
                            width={barWidth}
                            height={ndiHeight}
                            rx={6}
                            fill="#F4C2C2"
                        />

                        {/* X축 날짜 */}
                        <text
                            x={baseX}
                            y={chartHeight + 10}
                            fontSize="13"
                            textAnchor="middle"
                            fill="#9C938D"
                        >
                            {item.date}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
};

export default PINDIChart;