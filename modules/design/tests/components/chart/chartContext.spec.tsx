/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import {
  ChartContext,
  getPayloadConfigFromPayload,
  THEMES,
  useChart,
} from "../../../src/components/chart/chartContext";

afterEach(cleanup);

describe("chartContext", () => {
  test("useChart returns context values from the provider", () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ChartContext.Provider value={{ config: { desktop: { label: "Desktop", color: "#3B82F6" } } }}>
        {children}
      </ChartContext.Provider>
    );

    const { result } = renderHook(() => useChart(), { wrapper });

    expect(result.current.config.desktop?.label).toBe("Desktop");
    expect(THEMES.dark).toBe(".dark");
  });

  test("getPayloadConfigFromPayload resolves nested payload keys and falls back when absent", () => {
    const config = {
      revenue: { label: "Revenue", color: "#10B981" },
      desktop: { label: "Desktop", color: "#3B82F6" },
    };

    expect(
      getPayloadConfigFromPayload(config, { payload: { series: "revenue" }, dataKey: "desktop" }, "series"),
    ).toEqual(config.revenue);
    expect(getPayloadConfigFromPayload(config, { dataKey: "desktop" }, "dataKey")).toEqual(config.desktop);
    expect(getPayloadConfigFromPayload(config, null, "dataKey")).toBeUndefined();
  });
});
