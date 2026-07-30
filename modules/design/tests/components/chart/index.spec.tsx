/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Chart } from "../../../src/components/chart";

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

describe("chart index", () => {
  test("re-exports the compound Chart component", () => {
    const { container } = render(
      <Chart config={{ sales: { label: "Sales", color: "#2563EB" } }}>
        <div>Series</div>
      </Chart>,
    );

    expect(container.querySelector('[data-slot="chart"]')).toBeInTheDocument();
    expect(typeof Chart.TooltipContent).toBe("function");
  });
});
