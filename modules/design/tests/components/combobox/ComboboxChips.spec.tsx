/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";
import { ComboboxChip } from "../../../src/components/combobox/ComboboxChip";
import { ComboboxChips } from "../../../src/components/combobox/ComboboxChips";
import { ComboboxChipsInput } from "../../../src/components/combobox/ComboboxChipsInput";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxChips", () => {
  test("renders selected chips alongside the input", () => {
    render(
      <Combobox items={["Apple", "Banana"]} multiple defaultValue={["Apple"]}>
        <ComboboxChips>
          <ComboboxChip>Apple</ComboboxChip>
          <ComboboxChipsInput placeholder="Search fruit" />
        </ComboboxChips>
      </Combobox>,
    );

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search fruit")).toBeInTheDocument();
  });

  test("merges a custom className with the chips layout classes", () => {
    render(
      <Combobox items={["Apple"]} multiple>
        <ComboboxChips className="custom-chips">
          <ComboboxChipsInput placeholder="Search fruit" />
        </ComboboxChips>
      </Combobox>,
    );

    const chips = document.querySelector('[data-slot="combobox-chips"]');
    expect(chips).toHaveClass("custom-chips");
    expect(chips?.className).toContain("flex-wrap");
  });
});
