/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "../../../src/components/checkbox/Checkbox";

afterEach(cleanup);

describe("Checkbox", () => {
  test("renders unchecked by default", () => {
    render(<Checkbox aria-label="agree" />);
    const checkbox = screen.getByRole("checkbox", { name: "agree" });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  test("renders checked when defaultChecked is true", () => {
    render(<Checkbox aria-label="agree" defaultChecked />);
    expect(screen.getByRole("checkbox", { name: "agree" })).toHaveAttribute("aria-checked", "true");
  });

  test("toggles checked state on click and calls onCheckedChange", () => {
    let checked: boolean | undefined;
    render(<Checkbox aria-label="agree" onCheckedChange={(value) => (checked = value)} />);
    const checkbox = screen.getByRole("checkbox", { name: "agree" });

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "true");
    expect(checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "false");
    expect(checked).toBe(false);
  });

  test("supports the disabled state and blocks interaction", () => {
    let called = false;
    render(<Checkbox aria-label="agree" disabled onCheckedChange={() => (called = true)} />);
    const checkbox = screen.getByRole("checkbox", { name: "agree" });

    expect(checkbox).toHaveAttribute("aria-disabled", "true");
    fireEvent.click(checkbox);
    expect(called).toBe(false);
  });

  test("supports the indeterminate mixed state", () => {
    render(<Checkbox aria-label="agree" indeterminate />);
    expect(screen.getByRole("checkbox", { name: "agree" })).toHaveAttribute("aria-checked", "mixed");
  });

  test("applies size variants via checkboxVariants", () => {
    const { container, rerender } = render(<Checkbox aria-label="agree" size="lg" />);
    expect(container.querySelector('[data-slot="checkbox"]')?.className).toContain("size-5");

    rerender(<Checkbox aria-label="agree" size="xs" />);
    expect(container.querySelector('[data-slot="checkbox"]')?.className).toContain("size-3.5");
  });
});
