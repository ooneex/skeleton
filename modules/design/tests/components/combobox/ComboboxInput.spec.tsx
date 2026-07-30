/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

afterEach(cleanup);

describe("ComboboxInput", () => {
  test("renders an input with trigger and clear actions", () => {
    render(
      <Combobox items={["Apple", "Banana"]} defaultValue="Banana">
        <Combobox.Input placeholder="Search fruit" showClear className="custom-input" />
      </Combobox>,
    );

    expect(screen.getByRole("combobox")).toHaveAttribute("placeholder", "Search fruit");
    expect(document.querySelector('[data-slot="input-group"]')).toHaveClass("custom-input");
    expect(document.querySelector('[data-slot="input-group-button"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="combobox-clear"]')).toBeInTheDocument();
  });

  test("can hide the trigger button", () => {
    render(
      <Combobox items={["Apple"]}>
        <Combobox.Input placeholder="Search fruit" showTrigger={false} />
      </Combobox>,
    );

    expect(document.querySelector('[data-slot="input-group-button"]')).toBeNull();
  });
});
