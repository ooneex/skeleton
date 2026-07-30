import { ChartLegend } from "@module/design/components/chart/ChartLegend";
import { lazy, Suspense } from "react";
import type { MetaType } from "../../shared/story";
import type { ChartLegendDemoPropsType } from "./ChartLegend.story-content";

const ChartLegendDemoContent = lazy(async () => {
  const mod = await import("./ChartLegend.story-content");
  return { default: mod.ChartLegendDemoContent };
});

const ChartLegendDemo = (props: ChartLegendDemoPropsType) => (
  <Suspense
    fallback={
      <div className="w-full max-w-2xl rounded border border-border p-6 text-sm text-muted-foreground">
        Loading chart legend…
      </div>
    }
  >
    <ChartLegendDemoContent {...props} />
  </Suspense>
);

ChartLegendDemo.displayName = "ChartLegend";

export const meta = {
  title: "Chart.Legend",
  group: "Components",
  tags: [],
  component: ChartLegend,
  storyComponent: ChartLegendDemo,
  usage: [
    "**Chart.Legend** and **Chart.LegendContent** render the reusable series key below or above a chart. The content helper resolves each entry from the chart config, so the legend can show either a color swatch or a custom icon together with the human label for each series.",
    "",
    "**How to use it** — mount `Chart.Legend` in the chart and pass `content={<Chart.LegendContent />}`. Keep the config labels meaningful because they surface directly in the legend. Place the legend on the bottom for dashboard cards and move it to the top when the chart is short and the labels should be read before the plot.",
    "",
    "**When to use it** — whenever the viewer needs to distinguish multiple series or read a shared key once before scanning the plot.",
    "",
    "**When not to use it** — do not add a legend for a single obvious series, or when the bars or lines are directly labelled and the extra chrome would be redundant.",
  ].join("\n"),
  props: [
    {
      name: "verticalAlign",
      control: "radio",
      options: [
        {
          name: "top",
          usage: "Legend above the plot. Use in short cards where the key should be read before the data area.",
        },
        {
          name: "bottom",
          usage: "Legend below the plot. Use for most dashboards so the chart stays visually primary.",
        },
      ],
      default: "bottom",
    },
  ],
} satisfies MetaType<typeof ChartLegend, typeof ChartLegendDemo>;
