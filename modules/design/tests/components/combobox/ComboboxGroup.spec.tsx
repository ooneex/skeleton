/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxGroup", () => {
  test("renders grouped items under the supplied label", async () => {
    render(
      <Combobox items={["Apple", "Banana"]} defaultOpen>
        <Combobox.Input placeholder="Search fruit" />
        <Combobox.Content>
          <Combobox.Group items={["Apple", "Banana"]} className="custom-group">
            <Combobox.Label>Fruits</Combobox.Label>
            <Combobox.List>
              {(item: string) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Group>
        </Combobox.Content>
      </Combobox>,
    );

    expect(await screen.findByText("Fruits")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="combobox-group"]')).toHaveClass("custom-group");
  });
});
