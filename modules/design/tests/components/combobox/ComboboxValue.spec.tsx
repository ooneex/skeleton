/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

afterEach(cleanup);

describe("ComboboxValue", () => {
  test("renders the selected value and keeps the hidden input in sync", () => {
    const { container } = render(
      <Combobox items={["Apple", "Banana"]} defaultValue="Banana">
        <Combobox.Value />
        <Combobox.Trigger aria-label="Open fruits" />
      </Combobox>,
    );

    expect(container.textContent).toContain("Banana");
    expect(document.querySelector('input[aria-hidden="true"]')).toHaveAttribute("value", "Banana");
  });
});
