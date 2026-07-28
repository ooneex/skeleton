import { describe, expect, test } from "bun:test";
import { chainHandlers } from "../../src/utils/chainHandlers";

describe("chainHandlers", () => {
  test("should run every handler in order with the same arguments", () => {
    const calls: string[] = [];
    const chained = chainHandlers<[string]>(
      (value) => calls.push(`first:${value}`),
      (value) => calls.push(`second:${value}`),
    );

    chained("click");

    expect(calls).toEqual(["first:click", "second:click"]);
  });

  test("should skip undefined handlers", () => {
    const calls: string[] = [];
    const chained = chainHandlers<[]>(undefined, () => calls.push("only"), undefined);

    chained();

    expect(calls).toEqual(["only"]);
  });

  test("should be a no-op when no handler is given", () => {
    expect(() => chainHandlers<[]>()()).not.toThrow();
  });
});
