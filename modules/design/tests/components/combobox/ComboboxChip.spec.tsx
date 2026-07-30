/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";
import { ComboboxChip } from "../../../src/components/combobox/ComboboxChip";
import { ComboboxChips } from "../../../src/components/combobox/ComboboxChips";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxChip", () => {
  test("renders chip text with a remove action by default", () => {
    render(
      <Combobox items={["Apple", "Banana"]} multiple defaultValue={["Apple"]}>
        <ComboboxChips>
          <ComboboxChip>Apple</ComboboxChip>
        </ComboboxChips>
      </Combobox>,
    );

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="combobox-chip-remove"]')).toBeInTheDocument();
  });

  test("can hide the remove action", () => {
    render(
      <Combobox items={["Apple", "Banana"]} multiple defaultValue={["Apple"]}>
        <ComboboxChips>
          <ComboboxChip showRemove={false} className="custom-chip">
            Apple
          </ComboboxChip>
        </ComboboxChips>
      </Combobox>,
    );

    expect(document.querySelector('[data-slot="combobox-chip"]')).toHaveClass("custom-chip");
    expect(document.querySelector('[data-slot="combobox-chip-remove"]')).toBeNull();
  });
});
