import { ChartContainer } from "@module/design/components/chart/ChartContainer";
import { ChartLegend } from "@module/design/components/chart/ChartLegend";
import { ChartLegendContent } from "@module/design/components/chart/ChartLegendContent";
import type { ChartConfigType } from "@module/design/components/chart/chartContext";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const legendData = [
  { team: "Sales", actual: 78, target: 70 },
  { team: "Support", actual: 92, target: 88 },
  { team: "Ops", actual: 85, target: 82 },
  { team: "QA", actual: 74, target: 76 },
];

const legendConfig = {
  actual: {
    label: "Actual",
    color: "var(--chart-4)",
  },
  target: {
    label: "Target",
    color: "var(--chart-5)",
  },
} satisfies ChartConfigType;

export type ChartLegendDemoPropsType = {
  verticalAlign?: "top" | "bottom";
};

export const ChartLegendDemoContent = ({ verticalAlign = "bottom" }: ChartLegendDemoPropsType) => {
  return (
    <ChartContainer config={legendConfig} className="max-w-2xl">
      <BarChart accessibilityLayer data={legendData} margin={{ left: 12, right: 12, top: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis axisLine={false} dataKey="team" tickLine={false} tickMargin={12} />
        <YAxis axisLine={false} tickLine={false} tickMargin={12} width={40} />
        <ChartLegend content={<ChartLegendContent verticalAlign={verticalAlign} />} verticalAlign={verticalAlign} />
        <Bar dataKey="actual" fill="var(--color-actual)" radius={8} />
        <Bar dataKey="target" fill="var(--color-target)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
};

ChartLegendDemoContent.displayName = "ChartLegend";
