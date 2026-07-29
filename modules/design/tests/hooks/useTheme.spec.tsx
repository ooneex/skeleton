/// <reference lib="dom" />

import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { act, cleanup, renderHook } from "@testing-library/react";
import { THEME_STORAGE_KEY, useApplyTheme, useTheme, useThemeScheme } from "../../src/hooks/useTheme";

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

const setPrefersDark = (matches: boolean) => {
  const originalMatchMedia = window.matchMedia;
  window.matchMedia = ((query: string) => {
    const mql = originalMatchMedia(query);
    Object.defineProperty(mql, "matches", { configurable: true, get: () => matches });
    return mql;
  }) as typeof window.matchMedia;
};

beforeEach(() => setPrefersDark(false));

describe("useTheme", () => {
  test("defaults to 'system' when nothing is persisted", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("system");
  });

  test("restores a previously persisted theme", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  test("ignores an unknown persisted theme code", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "not-a-real-theme");
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("system");
  });

  test("uses defaultValue when nothing is persisted", () => {
    const { result } = renderHook(() => useTheme({ defaultValue: "light" }));
    expect(result.current.theme).toBe("light");
  });

  test("persists every selection change to localStorage", () => {
    const { result } = renderHook(() => useTheme());
    act(() => result.current.setTheme("dark"));
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
  });

  test("updates the selection and mirrors it on <html data-theme>", () => {
    const { result } = renderHook(() => useTheme());
    act(() => result.current.setTheme("light"));
    expect(result.current.theme).toBe("light");
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  test("mirrors a controlled value instead of owning state", () => {
    const { result, rerender } = renderHook((props: { value: "light" | "dark" }) => useTheme(props), {
      initialProps: { value: "light" as "light" | "dark" },
    });
    expect(result.current.theme).toBe("light");
    rerender({ value: "dark" });
    expect(result.current.theme).toBe("dark");
  });
});

describe("useApplyTheme", () => {
  test("mirrors a concrete theme directly onto <html data-theme>", () => {
    renderHook(() => useApplyTheme("dark"));
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  test("resolves 'system' using the OS light/dark preference", () => {
    setPrefersDark(true);
    renderHook(() => useApplyTheme("system"));
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  test("resolves 'system' to light when the OS has no dark preference", () => {
    setPrefersDark(false);
    renderHook(() => useApplyTheme("system"));
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});

describe("useThemeScheme", () => {
  test("defaults to 'light' when no theme has been applied yet", () => {
    const { result } = renderHook(() => useThemeScheme());
    expect(result.current).toBe("light");
  });

  test("reads the scheme from the currently applied theme", () => {
    document.documentElement.dataset.theme = "dark";
    const { result } = renderHook(() => useThemeScheme());
    expect(result.current).toBe("dark");
  });

  test("updates when <html data-theme> changes after mount", async () => {
    const { result } = renderHook(() => useThemeScheme());
    expect(result.current).toBe("light");

    await act(async () => {
      document.documentElement.dataset.theme = "dark";
      await Promise.resolve();
    });

    expect(result.current).toBe("dark");
  });
});
