import { Chart } from "@module/design/components/chart";
import { lazy, Suspense } from "react";
import type { MetaType } from "../../shared/story";
import type { ChartDemoPropsType } from "./Chart.story-content";

const ChartDemoContent = lazy(async () => {
  const mod = await import("./Chart.story-content");
  return { default: mod.ChartDemoContent };
});

const ChartDemo = (props: ChartDemoPropsType) => (
  <Suspense
    fallback={
      <div className="w-full max-w-3xl rounded border border-border p-6 text-sm text-muted-foreground">
        Loading chart…
      </div>
    }
  >
    <ChartDemoContent {...props} />
  </Suspense>
);

ChartDemo.displayName = "Chart";

export const meta = {
  title: "Chart",
  group: "Components",
  tags: [],
  component: Chart,
  storyComponent: ChartDemo,
  usage: [
    "**Chart** is the compound wrapper around Recharts in this design system. It combines `ChartContainer` for layout, `Chart.Style` for per-series CSS variables, and the reusable tooltip and legend helpers so a chart can stay visually consistent while the actual series primitives (`Line`, `Bar`, `Area`, `Pie`, …) still come from Recharts.",
    "",
    "**How to use it** — pass a `config` object whose keys match your data keys and describe the human label and color for each series. Render a Recharts chart inside the container and wire `Chart.Tooltip` + `Chart.TooltipContent` and `Chart.Legend` + `Chart.LegendContent` when you want the shared overlays. Use the design-system wrapper whenever a product chart should inherit theming and spacing without hand-writing CSS variables.",
    "",
    "**When to use it** — for dashboard cards, analytics pages, progress visualisations, or anywhere data series need the same tooltip and legend treatment as the rest of the product.",
    "",
    "**When not to use it** — do not use it for a one-off decorative sparkline with no legend or tooltip, or when you are not using Recharts at all. In those cases a lighter bespoke SVG or canvas render is a better fit.",
  ].join("\n"),
  props: [
    {
      name: "showLegend",
      control: "boolean",
      default: true,
    },
    {
      name: "showTooltip",
      control: "boolean",
      default: true,
    },
  ],
} satisfies MetaType<typeof Chart, typeof ChartDemo>;
