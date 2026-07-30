import { describe, expect, test } from "bun:test";
import * as RechartsPrimitive from "recharts";
import { ChartTooltip } from "../../../src/components/chart/ChartTooltip";

describe("ChartTooltip", () => {
  test("re-exports recharts tooltip", () => {
    expect(ChartTooltip).toBe(RechartsPrimitive.Tooltip);
  });
});
