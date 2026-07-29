/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, renderHook } from "@testing-library/react";
import { useIsMobile } from "../../src/hooks/useMobile";

afterEach(() => {
  cleanup();
  window.innerWidth = 1024;
});

const setInnerWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", { configurable: true, writable: true, value: width });
};

describe("useIsMobile", () => {
  test("returns false when the viewport is wider than the breakpoint", () => {
    setInnerWidth(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  test("returns true when the viewport is narrower than the breakpoint", () => {
    setInnerWidth(500);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  test("updates when the matchMedia query changes", () => {
    setInnerWidth(1024);

    let onChange: (() => void) | undefined;
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = ((query: string) => {
      const mql = originalMatchMedia(query);
      const originalAddEventListener = mql.addEventListener.bind(mql);
      mql.addEventListener = ((type: string, listener: () => void) => {
        if (type === "change") onChange = listener;
        originalAddEventListener(type, listener);
      }) as typeof mql.addEventListener;
      return mql;
    }) as typeof window.matchMedia;

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    setInnerWidth(500);
    act(() => onChange?.());

    expect(result.current).toBe(true);
    window.matchMedia = originalMatchMedia;
  });
});
