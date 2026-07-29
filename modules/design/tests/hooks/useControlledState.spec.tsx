/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { act, cleanup, renderHook } from "@testing-library/react";
import { useControlledState } from "../../src/hooks/useControlledState";

afterEach(cleanup);

describe("useControlledState", () => {
  test("initializes from defaultValue when uncontrolled", () => {
    const { result } = renderHook(() => useControlledState<string>({ defaultValue: "a" }));
    expect(result.current[0]).toBe("a");
  });

  test("updates its own state when uncontrolled", () => {
    const { result } = renderHook(() => useControlledState<string>({ defaultValue: "a" }));
    act(() => result.current[1]("b"));
    expect(result.current[0]).toBe("b");
  });

  test("calls onChange with the new value and extra args when updated", () => {
    const onChange = mock((_value: string, ..._args: number[]) => {});
    const { result } = renderHook(() => useControlledState<string, [number]>({ defaultValue: "a", onChange }));
    act(() => result.current[1]("b", 42));
    expect(onChange).toHaveBeenCalledWith("b", 42);
  });

  test("mirrors an externally-controlled value", () => {
    const { result, rerender } = renderHook((props: { value: string }) => useControlledState<string>(props), {
      initialProps: { value: "a" },
    });
    expect(result.current[0]).toBe("a");
    rerender({ value: "b" });
    expect(result.current[0]).toBe("b");
  });

  test("still calls onChange when controlled, letting the parent own the state", () => {
    const onChange = mock((_value: string) => {});
    const { result } = renderHook(() => useControlledState<string>({ value: "a", onChange }));
    act(() => result.current[1]("b"));
    expect(onChange).toHaveBeenCalledWith("b");
  });
});
