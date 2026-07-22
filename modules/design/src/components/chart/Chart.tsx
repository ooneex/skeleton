import { ChartContainer } from "./ChartContainer";
import { ChartLegend } from "./ChartLegend";
import { ChartLegendContent } from "./ChartLegendContent";
import { ChartStyle } from "./ChartStyle";
import { ChartTooltip } from "./ChartTooltip";
import { ChartTooltipContent } from "./ChartTooltipContent";

/**
 * Compound chart component built on recharts.
 *
 * `Chart` is the `ChartContainer` with sub-components attached:
 * `Chart.Style`, `Chart.Tooltip`, `Chart.TooltipContent`, `Chart.Legend`,
 * `Chart.LegendContent`.
 */
export const Chart = Object.assign(ChartContainer, {
  displayName: "Chart",
  Style: ChartStyle,
  Tooltip: ChartTooltip,
  TooltipContent: ChartTooltipContent,
  Legend: ChartLegend,
  LegendContent: ChartLegendContent,
});
