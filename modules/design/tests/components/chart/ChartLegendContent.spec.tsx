/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChartLegendContent } from "../../../src/components/chart/ChartLegendContent";
import type { ChartConfigType } from "../../../src/components/chart/chartContext";
import { ChartContext } from "../../../src/components/chart/chartContext";

afterEach(cleanup);

const DotIcon = () => <svg data-testid="legend-icon" />;
const config: ChartConfigType = {
  desktop: { label: "Desktop", icon: DotIcon, color: "#3B82F6" },
  mobile: { label: "Mobile", color: "#10B981" },
};

describe("ChartLegendContent", () => {
  test("renders configured icons and labels for payload entries", () => {
    render(
      <ChartContext.Provider value={{ config }}>
        <ChartLegendContent payload={[{ value: "desktop", dataKey: "desktop", color: "#3B82F6" }]} />
      </ChartContext.Provider>,
    );

    expect(screen.getByText("Desktop")).toBeInTheDocument();
    expect(screen.getByTestId("legend-icon")).toBeInTheDocument();
  });

  test("filters hidden entries and applies top spacing when requested", () => {
    const { container } = render(
      <ChartContext.Provider value={{ config }}>
        <ChartLegendContent
          verticalAlign="top"
          hideIcon
          payload={[
            { value: "desktop", dataKey: "desktop", color: "#3B82F6" },
            { value: "mobile", dataKey: "mobile", color: "#10B981", type: "none" },
          ]}
        />
      </ChartContext.Provider>,
    );

    expect(screen.getByText("Desktop")).toBeInTheDocument();
    expect(screen.queryByText("Mobile")).not.toBeInTheDocument();
    expect(container.firstChild).toHaveClass("pb-3");
  });
});
