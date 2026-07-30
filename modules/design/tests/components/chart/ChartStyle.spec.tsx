/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChartStyle } from "../../../src/components/chart/ChartStyle";

afterEach(cleanup);

describe("ChartStyle", () => {
  test("renders light and dark css variables for themed series", () => {
    const { container } = render(
      <ChartStyle
        id="chart-theme"
        config={{
          revenue: { label: "Revenue", theme: { light: "#111827", dark: "#F9FAFB" } },
        }}
      />,
    );

    const style = container.querySelector("style");
    expect(style?.innerHTML).toContain("[data-chart=chart-theme]");
    expect(style?.innerHTML).toContain("--color-revenue: #111827;");
    expect(style?.innerHTML).toContain(".dark [data-chart=chart-theme]");
    expect(style?.innerHTML).toContain("--color-revenue: #F9FAFB;");
  });

  test("renders nothing when the config has no colors", () => {
    const { container } = render(<ChartStyle id="chart-empty" config={{ revenue: { label: "Revenue" } }} />);
    expect(container.firstChild).toBeNull();
  });
});
