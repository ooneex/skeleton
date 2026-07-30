import { describe, expect, test } from "bun:test";
import * as RechartsPrimitive from "recharts";
import { ChartLegend } from "../../../src/components/chart/ChartLegend";

describe("ChartLegend", () => {
  test("re-exports recharts legend", () => {
    expect(ChartLegend).toBe(RechartsPrimitive.Legend);
  });
});
