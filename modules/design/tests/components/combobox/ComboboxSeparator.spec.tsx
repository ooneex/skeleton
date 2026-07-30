/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxSeparator", () => {
  test("renders a separator between groups", async () => {
    render(
      <Combobox items={["Apple"]} defaultOpen>
        <Combobox.Content>
          <Combobox.List>
            {(item: string) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
          <Combobox.Separator className="custom-separator" />
        </Combobox.Content>
      </Combobox>,
    );

    await screen.findByRole("option", { name: "Apple" });
    const separator = document.body.querySelector('[data-slot="combobox-separator"]');
    expect(separator).toHaveClass("custom-separator");
    expect(separator?.className).toContain("h-px");
  });
});
