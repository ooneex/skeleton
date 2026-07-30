/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox, useComboboxAnchor } from "../../../src/components/combobox";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("combobox index", () => {
  test("re-exports the Combobox compound component", async () => {
    render(
      <Combobox items={["Apple"]} defaultOpen>
        <Combobox.Input placeholder="Search fruit" />
        <Combobox.Content>
          <Combobox.List>
            {(item: string) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox>,
    );

    expect(await screen.findByRole("option", { name: "Apple" })).toBeInTheDocument();
  });

  test("re-exports the combobox anchor hook", () => {
    const { result } = renderHook(() => useComboboxAnchor());
    expect(result.current.current).toBeNull();
  });
});
