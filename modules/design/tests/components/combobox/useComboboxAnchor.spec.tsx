/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, renderHook } from "@testing-library/react";
import { useComboboxAnchor } from "../../../src/components/combobox/useComboboxAnchor";

afterEach(cleanup);

describe("useComboboxAnchor", () => {
  test("returns a mutable ref for combobox anchor elements", () => {
    const { result } = renderHook(() => useComboboxAnchor());
    const anchor = document.createElement("div");

    expect(result.current.current).toBeNull();
    result.current.current = anchor;
    expect(result.current.current).toBe(anchor);
  });
});
