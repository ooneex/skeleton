/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Chart } from "../../../src/components/chart/Chart";
import { ChartLegendContent } from "../../../src/components/chart/ChartLegendContent";
import { ChartTooltipContent } from "../../../src/components/chart/ChartTooltipContent";
import type { ChartConfigType } from "../../../src/components/chart/chartContext";
import { ChartContext, useChart } from "../../../src/components/chart/chartContext";

// happy-dom does not implement ResizeObserver, which recharts' ResponsiveContainer relies on.
// It also reports 0 for getBoundingClientRect, so ResponsiveContainer would never render
// children (recharts bails out when the measured size isn't positive). Stub both locally,
// for this spec file only, so charts can measure a non-zero size.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
// biome-ignore lint/suspicious/noExplicitAny: test stub
(globalThis as any).ResizeObserver = ResizeObserverStub;
// biome-ignore lint/suspicious/noExplicitAny: test stub
HTMLElement.prototype.getBoundingClientRect = function (this: any) {
  return { width: 400, height: 300, top: 0, left: 0, right: 400, bottom: 300, x: 0, y: 0, toJSON() {} };
};

afterEach(cleanup);

const config: ChartConfigType = {
  desktop: { label: "Desktop", color: "#3B82F6" },
  mobile: { label: "Mobile", color: "#10B981" },
};

describe("Chart", () => {
  test("renders ChartContainer with a chart data-slot and provides chart context to children", () => {
    let seenConfig: ChartConfigType | undefined;
    const Probe = () => {
      seenConfig = useChart().config;
      return <div>probe</div>;
    };

    const { container } = render(
      <Chart config={config}>
        <Probe />
      </Chart>,
    );

    expect(container.querySelector('[data-slot="chart"]')).toBeInTheDocument();
    expect(seenConfig).toEqual(config);
  });

  test("useChart throws outside of a ChartContainer", () => {
    const Probe = () => {
      useChart();
      return null;
    };
    expect(() => render(<Probe />)).toThrow("useChart must be used within a <ChartContainer />");
  });

  test("Chart.Style injects CSS variables for colors defined in config", () => {
    const { container } = render(<Chart.Style id="chart-1" config={config} />);
    const style = container.querySelector("style");
    expect(style?.innerHTML).toContain("--color-desktop: #3B82F6;");
    expect(style?.innerHTML).toContain("--color-mobile: #10B981;");
  });

  test("Chart.Style renders nothing when no color/theme is configured", () => {
    const { container } = render(<Chart.Style id="chart-2" config={{ desktop: { label: "Desktop" } }} />);
    expect(container.querySelector("style")).not.toBeInTheDocument();
  });

  test("ChartTooltipContent renders nothing when inactive or payload is empty", () => {
    const { container } = render(
      <ChartContext.Provider value={{ config }}>
        <ChartTooltipContent active={false} payload={[{ dataKey: "desktop", value: 10, name: "desktop" }]} />
      </ChartContext.Provider>,
    );
    expect(container.firstChild).toBeNull();
  });

  test("ChartTooltipContent renders label and item values when active with payload", () => {
    render(
      <ChartContext.Provider value={{ config }}>
        <ChartTooltipContent
          active
          label="desktop"
          payload={[{ dataKey: "desktop", value: 120, name: "desktop", color: "#3B82F6" }]}
        />
      </ChartContext.Provider>,
    );

    expect(screen.getAllByText("Desktop").length).toBeGreaterThan(0);
    expect(screen.getByText("120")).toBeInTheDocument();
  });

  test("ChartLegendContent renders nothing when payload is empty", () => {
    const { container } = render(
      <ChartContext.Provider value={{ config }}>
        <ChartLegendContent payload={[]} />
      </ChartContext.Provider>,
    );
    expect(container.firstChild).toBeNull();
  });

  test("ChartLegendContent renders a label per payload entry using config", () => {
    render(
      <ChartContext.Provider value={{ config }}>
        <ChartLegendContent
          payload={[
            { value: "desktop", dataKey: "desktop", color: "#3B82F6" },
            { value: "mobile", dataKey: "mobile", color: "#10B981" },
          ]}
        />
      </ChartContext.Provider>,
    );

    expect(screen.getByText("Desktop")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
  });
});
