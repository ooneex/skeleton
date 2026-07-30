/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxList", () => {
  test("renders options inside the scrollable list", async () => {
    render(
      <Combobox items={["Apple", "Banana"]} defaultOpen>
        <Combobox.Content>
          <Combobox.List className="custom-list">
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
    expect(document.querySelector('[data-slot="combobox-list"]')).toHaveClass("custom-list");
  });
});
