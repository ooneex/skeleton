/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioGroup } from "../../../src/components/radio-group/RadioGroup";

afterEach(cleanup);

describe("RadioGroup", () => {
  test("renders each item as a radio", () => {
    render(
      <RadioGroup aria-label="fruit">
        <RadioGroup.Item value="apple" aria-label="apple" />
        <RadioGroup.Item value="banana" aria-label="banana" />
        <RadioGroup.Item value="cherry" aria-label="cherry" />
      </RadioGroup>,
    );

    expect(screen.getAllByRole("radio")).toHaveLength(3);
  });

  test("selects an item via defaultValue", () => {
    render(
      <RadioGroup defaultValue="banana" aria-label="fruit">
        <RadioGroup.Item value="apple" aria-label="apple" />
        <RadioGroup.Item value="banana" aria-label="banana" />
      </RadioGroup>,
    );

    expect(screen.getByRole("radio", { name: "apple" })).toHaveAttribute("aria-checked", "false");
    expect(screen.getByRole("radio", { name: "banana" })).toHaveAttribute("aria-checked", "true");
  });

  test("clicking an item selects it and calls onValueChange", () => {
    let selected: unknown;
    render(
      <RadioGroup aria-label="fruit" onValueChange={(value) => (selected = value)}>
        <RadioGroup.Item value="apple" aria-label="apple" />
        <RadioGroup.Item value="banana" aria-label="banana" />
      </RadioGroup>,
    );

    fireEvent.click(screen.getByRole("radio", { name: "banana" }));

    expect(selected).toBe("banana");
    expect(screen.getByRole("radio", { name: "banana" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("radio", { name: "apple" })).toHaveAttribute("aria-checked", "false");
  });

  test("only one item can be checked at a time", () => {
    render(
      <RadioGroup defaultValue="apple" aria-label="fruit">
        <RadioGroup.Item value="apple" aria-label="apple" />
        <RadioGroup.Item value="banana" aria-label="banana" />
      </RadioGroup>,
    );

    fireEvent.click(screen.getByRole("radio", { name: "banana" }));

    expect(screen.getByRole("radio", { name: "apple" })).toHaveAttribute("aria-checked", "false");
    expect(screen.getByRole("radio", { name: "banana" })).toHaveAttribute("aria-checked", "true");
  });

  test("a disabled item cannot be selected and blocks onValueChange", () => {
    let called = false;
    render(
      <RadioGroup aria-label="fruit" onValueChange={() => (called = true)}>
        <RadioGroup.Item value="apple" aria-label="apple" />
        <RadioGroup.Item value="banana" aria-label="banana" disabled />
      </RadioGroup>,
    );

    const banana = screen.getByRole("radio", { name: "banana" });
    expect(banana).toHaveAttribute("aria-disabled", "true");
    expect(banana).toHaveAttribute("data-disabled");

    fireEvent.click(banana);

    expect(called).toBe(false);
    expect(banana).toHaveAttribute("aria-checked", "false");
  });

  test("disables the whole group when disabled is set on the root", () => {
    render(
      <RadioGroup aria-label="fruit" disabled>
        <RadioGroup.Item value="apple" aria-label="apple" />
        <RadioGroup.Item value="banana" aria-label="banana" />
      </RadioGroup>,
    );

    for (const radio of screen.getAllByRole("radio")) {
      expect(radio).toHaveAttribute("aria-disabled", "true");
    }
  });
});
