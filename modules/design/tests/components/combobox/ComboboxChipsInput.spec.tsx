/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";
import { ComboboxChips } from "../../../src/components/combobox/ComboboxChips";
import { ComboboxChipsInput } from "../../../src/components/combobox/ComboboxChipsInput";

afterEach(cleanup);

describe("ComboboxChipsInput", () => {
  test("renders a combobox input inside the chips wrapper", () => {
    render(
      <Combobox items={["Apple"]} multiple>
        <ComboboxChips>
          <ComboboxChipsInput placeholder="Search fruit" />
        </ComboboxChips>
      </Combobox>,
    );

    expect(screen.getByRole("combobox")).toHaveAttribute("placeholder", "Search fruit");
  });

  test("merges a custom className", () => {
    render(
      <Combobox items={["Apple"]} multiple>
        <ComboboxChips>
          <ComboboxChipsInput placeholder="Search fruit" className="custom-chip-input" />
        </ComboboxChips>
      </Combobox>,
    );

    expect(screen.getByRole("combobox")).toHaveClass("custom-chip-input");
  });
});
