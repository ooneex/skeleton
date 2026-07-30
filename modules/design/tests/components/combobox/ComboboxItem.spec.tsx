/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";
import {
  ComboboxItem,
  comboboxItemIconVariants,
  comboboxItemVariants,
} from "../../../src/components/combobox/ComboboxItem";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxItem", () => {
  test("selects an option and exposes size variants", async () => {
    let selected: unknown;
    render(
      <Combobox items={["Apple", "Banana"]} defaultOpen onValueChange={(value) => (selected = value)}>
        <Combobox.Content>
          <Combobox.List>
            {(item: string) => (
              <ComboboxItem key={item} value={item} size="lg" className="custom-item">
                {item}
              </ComboboxItem>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox>,
    );

    const option = await screen.findByRole("option", { name: "Apple" });
    fireEvent.click(option);

    expect(selected).toBe("Apple");
    expect(option).toHaveAttribute("data-size", "lg");
    expect(option).toHaveClass("custom-item");
  });

  test("exports reusable item variant helpers", () => {
    expect(comboboxItemVariants({ size: "xs" })).toContain("text-xs");
    expect(comboboxItemIconVariants({ size: "lg" })).toContain("size-4.5");
  });
});
