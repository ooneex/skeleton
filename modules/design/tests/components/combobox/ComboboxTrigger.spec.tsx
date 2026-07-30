/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxTrigger", () => {
  test("opens the popup when clicked", async () => {
    render(
      <Combobox items={["Apple", "Banana"]}>
        <Combobox.Trigger aria-label="Open fruits" className="custom-trigger" />
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

    const trigger = screen.getByRole("combobox", { name: "Open fruits" });
    fireEvent.click(trigger);

    expect(await screen.findByRole("option", { name: "Apple" })).toBeInTheDocument();
    expect(trigger).toHaveClass("custom-trigger");
  });
});
