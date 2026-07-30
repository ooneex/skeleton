/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxClear", () => {
  test("clears the selected value when clicked", () => {
    let selected: unknown = "Banana";
    render(
      <Combobox items={["Apple", "Banana"]} defaultValue="Banana" onValueChange={(value) => (selected = value)}>
        <Combobox.Input placeholder="Search fruit" showClear />
      </Combobox>,
    );

    const clear = document.querySelector('[data-slot="combobox-clear"]');
    expect(clear).toBeInTheDocument();

    if (clear instanceof HTMLElement) {
      fireEvent.click(clear);
    }

    expect(selected).toBeNull();
    expect(screen.getByRole("combobox")).toHaveValue("");
  });

  test("honors disabled state", () => {
    render(
      <Combobox items={["Apple"]} defaultValue="Apple">
        <Combobox.Input placeholder="Search fruit" showClear disabled />
      </Combobox>,
    );

    expect(document.querySelector('[data-slot="combobox-clear"]')).toBeDisabled();
  });
});
