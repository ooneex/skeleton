import { ChartTooltip } from "@module/design/components/chart/ChartTooltip";
import { lazy, Suspense } from "react";
import type { MetaType } from "../../shared/story";
import type { ChartTooltipDemoPropsType } from "./ChartTooltip.story-content";

const ChartTooltipDemoContent = lazy(async () => {
  const mod = await import("./ChartTooltip.story-content");
  return { default: mod.ChartTooltipDemoContent };
});

const ChartTooltipDemo = (props: ChartTooltipDemoPropsType) => (
  <Suspense
    fallback={
      <div className="w-full max-w-2xl rounded border border-border p-6 text-sm text-muted-foreground">
        Loading chart tooltip…
      </div>
    }
  >
    <ChartTooltipDemoContent {...props} />
  </Suspense>
);

ChartTooltipDemo.displayName = "ChartTooltip";

export const meta = {
  title: "Chart.Tooltip",
  group: "Components",
  tags: [],
  component: ChartTooltip,
  storyComponent: ChartTooltipDemo,
  usage: [
    "**Chart.Tooltip** and **Chart.TooltipContent** provide the shared hover overlay for chart series. The wrapper is the Recharts tooltip primitive, while the content renderer resolves labels and colors from the chart config so every chart reads the same way without duplicating tooltip markup.",
    "",
    "**How to use it** — place `Chart.Tooltip` inside the Recharts chart and pass `content={<Chart.TooltipContent />}`. Switch the `indicator` style to match the density of the chart: dots for standard charts, lines for a stronger visual link, dashed when the series itself is dashed. Keep the payload keys aligned with the chart config so the labels resolve correctly.",
    "",
    "**When to use it** — whenever a chart needs hover details, especially for dashboards where several charts should share one tooltip language and spacing model.",
    "",
    "**When not to use it** — do not use it for static snapshots, print views, or charts where the data labels are permanently visible and hover would add no value.",
  ].join("\n"),
  props: [
    {
      name: "indicator",
      control: "radio",
      options: [
        {
          name: "dot",
          usage: "Small color dot. Use for the standard compact tooltip on most line and bar charts.",
        },
        {
          name: "line",
          usage:
            "Vertical line marker. Use when you want a stronger visual tie between the tooltip row and the series color.",
        },
        {
          name: "dashed",
          usage:
            "Dashed marker. Use when the series itself is dashed or forecast-like and the tooltip should echo that treatment.",
        },
      ],
      default: "dot",
    },
  ],
} satisfies MetaType<typeof ChartTooltip, typeof ChartTooltipDemo>;
