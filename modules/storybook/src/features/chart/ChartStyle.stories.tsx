import { ChartStyle } from "@module/design/components/chart/ChartStyle";
import { type ChartConfigType, THEMES } from "@module/design/components/chart/chartContext";
import type { MetaType } from "../../shared/story";

const styleConfig = {
  revenue: {
    label: "Revenue",
    theme: {
      light: "var(--color-info-600)",
      dark: "var(--color-info-400)",
    },
  },
  profit: {
    label: "Profit",
    theme: {
      light: "var(--color-success-700)",
      dark: "var(--color-success-400)",
    },
  },
} satisfies ChartConfigType;

type ChartStylePreviewPropsType = {
  id?: string;
};

const ChartStylePreview = ({ id = "storybook-chart-style" }: ChartStylePreviewPropsType) => {
  return (
    <div className="w-full max-w-xl rounded border border-border p-4">
      <ChartStyle id={id} config={styleConfig} />
      <div data-chart={id} className="grid gap-3">
        <div>
          <p className="mb-2 text-sm font-medium">Theme-driven CSS variables</p>
          <div className="grid gap-2">
            <div className="flex items-center gap-3">
              <div className="h-3 w-24 rounded-full bg-(--color-revenue)" />
              <span className="text-sm text-muted-foreground">Revenue</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-20 rounded-full bg-(--color-profit)" />
              <span className="text-sm text-muted-foreground">Profit</span>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Theme selectors</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(THEMES).map(([theme, selector]) => (
              <code key={theme} className="rounded bg-muted px-2 py-1 text-xs">
                {theme}: {selector || "<root>"}
              </code>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ChartStylePreview.displayName = "ChartStyle";

export const meta = {
  title: "Chart.Style",
  group: "Components",
  tags: [],
  component: ChartStylePreview,
  usage: [
    "**Chart.Style** is the tiny helper that injects CSS custom properties for a chart's configured series colors. `ChartContainer` mounts it automatically, but this isolated preview shows the exact contract: it writes `--color-<key>` variables scoped to the chart id, with light and dark theme fallbacks when the config provides them.",
    "",
    "**How to use it** — you rarely mount it directly. Instead, pass the same `config` object to `Chart` or `ChartContainer` and let the wrapper inject the style tag for you. The only time to use it by hand is when you are building a bespoke chart shell outside those wrappers but still want the shared `--color-*` variables.",
    "",
    "**When to use it** — for advanced custom chart shells that still want the design system's theme-aware series colors.",
    "",
    "**When not to use it** — do not mount it twice for the same chart id, and do not reach for it when `ChartContainer` already wraps the chart because that work is already done for you.",
  ].join("\n"),
  props: [
    {
      name: "id",
      control: "text",
      default: "storybook-chart-style",
    },
  ],
} satisfies MetaType<typeof ChartStylePreview>;
