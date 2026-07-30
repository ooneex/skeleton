/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

afterEach(cleanup);

describe("ComboboxLabel", () => {
  test("renders a group label with its text", () => {
    render(
      <Combobox items={["Apple"]} defaultOpen>
        <Combobox.Content>
          <Combobox.Group items={["Apple"]}>
            <Combobox.Label className="custom-label">Fruits</Combobox.Label>
          </Combobox.Group>
        </Combobox.Content>
      </Combobox>,
    );

    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="combobox-label"]')).toHaveClass("custom-label");
  });
});
