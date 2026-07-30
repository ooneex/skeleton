import { Chart } from "@module/design/components/chart";
import type { ChartConfigType } from "@module/design/components/chart/chartContext";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 3200, target: 2800 },
  { month: "Feb", revenue: 4100, target: 3600 },
  { month: "Mar", revenue: 3900, target: 4000 },
  { month: "Apr", revenue: 5200, target: 4600 },
  { month: "May", revenue: 6100, target: 5400 },
  { month: "Jun", revenue: 5700, target: 5900 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  target: {
    label: "Target",
    color: "var(--chart-2)",
  },
} satisfies ChartConfigType;

export type ChartDemoPropsType = {
  showLegend?: boolean;
  showTooltip?: boolean;
};

export const ChartDemoContent = ({ showLegend = true, showTooltip = true }: ChartDemoPropsType) => {
  return (
    <Chart config={chartConfig} className="max-w-3xl">
      <LineChart accessibilityLayer data={revenueData} margin={{ left: 12, right: 12, top: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis axisLine={false} dataKey="month" tickLine={false} tickMargin={12} />
        <YAxis axisLine={false} tickLine={false} tickMargin={12} width={40} />
        {showTooltip ? <Chart.Tooltip content={<Chart.TooltipContent />} cursor={false} /> : null}
        {showLegend ? <Chart.Legend content={<Chart.LegendContent />} /> : null}
        <Line dataKey="revenue" dot={false} stroke="var(--color-revenue)" strokeWidth={2.5} type="monotone" />
        <Line
          dataKey="target"
          dot={false}
          stroke="var(--color-target)"
          strokeDasharray="4 4"
          strokeWidth={2}
          type="monotone"
        />
      </LineChart>
    </Chart>
  );
};

ChartDemoContent.displayName = "Chart";
