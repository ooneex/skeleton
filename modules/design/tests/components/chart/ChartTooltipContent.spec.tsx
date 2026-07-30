/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChartTooltipContent } from "../../../src/components/chart/ChartTooltipContent";
import type { ChartConfigType } from "../../../src/components/chart/chartContext";
import { ChartContext } from "../../../src/components/chart/chartContext";

afterEach(cleanup);

const DotIcon = () => <svg data-testid="tooltip-icon" />;
const config: ChartConfigType = {
  desktop: { label: "Desktop", icon: DotIcon, color: "#3B82F6" },
  revenue: { label: "Revenue", color: "#10B981" },
};

describe("ChartTooltipContent", () => {
  test("renders formatted labels and values for active payload items", () => {
    render(
      <ChartContext.Provider value={{ config }}>
        <ChartTooltipContent
          active
          label="desktop"
          labelFormatter={(value) => `Series: ${value}`}
          payload={[{ dataKey: "desktop", name: "desktop", value: 1200, color: "#3B82F6" }]}
        />
      </ChartContext.Provider>,
    );

    expect(screen.getByText("Series: Desktop")).toBeInTheDocument();
    expect(screen.getByText("1,200")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip-icon")).toBeInTheDocument();
  });

  test("supports custom formatters for line indicators without rendering default rows", () => {
    render(
      <ChartContext.Provider value={{ config }}>
        <ChartTooltipContent
          active
          indicator="line"
          payload={[{ dataKey: "revenue", name: "revenue", value: 40, color: "#10B981" }]}
          formatter={(value, name) => <div>{`${String(name)}: ${String(value)} units`}</div>}
        />
      </ChartContext.Provider>,
    );

    expect(screen.getByText("revenue: 40 units")).toBeInTheDocument();
    expect(screen.queryByText(/^40$/)).not.toBeInTheDocument();
  });
});
