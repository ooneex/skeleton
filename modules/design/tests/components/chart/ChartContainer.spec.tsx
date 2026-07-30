/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChartContainer } from "../../../src/components/chart/ChartContainer";
import type { ChartConfigType } from "../../../src/components/chart/chartContext";

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
  sales: { label: "Sales", color: "#2563EB" },
};

describe("ChartContainer", () => {
  test("renders a chart wrapper, styles, and responsive child content", () => {
    const { container } = render(
      <ChartContainer id="sales" config={config} className="custom-chart">
        <div>Series</div>
      </ChartContainer>,
    );

    const chart = container.querySelector('[data-slot="chart"]');
    expect(chart).toHaveAttribute("data-chart", "chart-sales");
    expect(chart).toHaveClass("custom-chart");
    expect(screen.getByText("Series")).toBeInTheDocument();
    expect(container.querySelector("style")?.innerHTML).toContain("--color-sales: #2563EB;");
  });

  test("forwards arbitrary html props to the wrapper", () => {
    const { container } = render(
      <ChartContainer config={config} aria-label="Revenue chart">
        <div>Series</div>
      </ChartContainer>,
    );

    expect(container.querySelector('[data-slot="chart"]')).toHaveAttribute("aria-label", "Revenue chart");
  });
});
