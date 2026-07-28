import { describe, expect, mock, test } from "bun:test";
import reportWebVitals from "../../src/bootstrap/reportWebVitals";

const flush = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 0));

const metrics = ["onCLS", "onINP", "onFCP", "onLCP", "onTTFB"] as const;

const mockWebVitals = () => {
  const calls: string[] = [];
  const module = Object.fromEntries(
    metrics.map((metric) => [
      metric,
      (callback: () => void) => {
        calls.push(metric);
        callback();
      },
    ]),
  );

  mock.module("web-vitals", () => module);

  return calls;
};

describe("reportWebVitals", () => {
  test("should forward every web vital to the given callback", async () => {
    const calls = mockWebVitals();
    let reported = 0;

    reportWebVitals(() => {
      reported += 1;
    });
    await flush();

    expect(calls).toEqual([...metrics]);
    expect(reported).toBe(metrics.length);
  });

  test("should not load web-vitals when no callback is given", async () => {
    const calls = mockWebVitals();

    reportWebVitals();
    await flush();

    expect(calls).toEqual([]);
  });

  test("should ignore a callback that is not a function", async () => {
    const calls = mockWebVitals();

    reportWebVitals("not a function" as unknown as () => void);
    await flush();

    expect(calls).toEqual([]);
  });
});
