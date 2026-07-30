import { ChartContainer } from "@module/design/components/chart/ChartContainer";
import { ChartTooltip } from "@module/design/components/chart/ChartTooltip";
import { ChartTooltipContent } from "@module/design/components/chart/ChartTooltipContent";
import type { ChartConfigType } from "@module/design/components/chart/chartContext";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const tooltipData = [
  { day: "Mon", visitors: 1800 },
  { day: "Tue", visitors: 2250 },
  { day: "Wed", visitors: 2100 },
  { day: "Thu", visitors: 2550 },
  { day: "Fri", visitors: 2680 },
];

const tooltipConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-3)",
  },
} satisfies ChartConfigType;

export type ChartTooltipDemoPropsType = {
  indicator?: "dot" | "line" | "dashed";
};

export const ChartTooltipDemoContent = ({ indicator = "dot" }: ChartTooltipDemoPropsType) => {
  return (
    <ChartContainer config={tooltipConfig} className="max-w-2xl">
      <LineChart accessibilityLayer data={tooltipData} margin={{ left: 12, right: 12, top: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis axisLine={false} dataKey="day" tickLine={false} tickMargin={12} />
        <YAxis axisLine={false} tickLine={false} tickMargin={12} width={40} />
        <ChartTooltip content={<ChartTooltipContent indicator={indicator} />} cursor={false} />
        <Line dataKey="visitors" dot={false} stroke="var(--color-visitors)" strokeWidth={2.5} type="monotone" />
      </LineChart>
    </ChartContainer>
  );
};

ChartTooltipDemoContent.displayName = "ChartTooltip";
