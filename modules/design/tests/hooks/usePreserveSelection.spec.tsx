/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, renderHook } from "@testing-library/react";
import usePreserveSelection from "../../src/hooks/usePreserveSelection";

afterEach(cleanup);

describe("usePreserveSelection", () => {
  test("prevents the default behaviour of a mousedown on the attached node", () => {
    const { result } = renderHook(() => usePreserveSelection<HTMLDivElement>());
    const node = document.createElement("div");
    result.current(node);

    const event = new MouseEvent("mousedown", { cancelable: true });
    node.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
  });

  test("does nothing when called with null", () => {
    const { result } = renderHook(() => usePreserveSelection<HTMLDivElement>());
    expect(() => result.current(null)).not.toThrow();
  });

  test("removes the listener once the ref callback's cleanup runs", () => {
    const { result } = renderHook(() => usePreserveSelection<HTMLDivElement>());
    const node = document.createElement("div");
    const teardown = result.current(node);
    teardown?.();

    const event = new MouseEvent("mousedown", { cancelable: true });
    node.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
  });

  test("returns a stable callback across re-renders", () => {
    const { result, rerender } = renderHook(() => usePreserveSelection<HTMLDivElement>());
    const first = result.current;
    rerender();
    expect(result.current).toBe(first);
  });
});
