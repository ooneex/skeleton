/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toggle } from "../../../src/components/toggle/Toggle";

afterEach(cleanup);

describe("Toggle", () => {
  test("renders as an off button by default", () => {
    render(<Toggle aria-label="bold">B</Toggle>);
    const toggle = screen.getByRole("button", { name: "bold" });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-pressed", "false");
  });

  test("renders pressed when defaultPressed is true", () => {
    render(
      <Toggle aria-label="bold" defaultPressed>
        B
      </Toggle>,
    );
    expect(screen.getByRole("button", { name: "bold" })).toHaveAttribute("aria-pressed", "true");
  });

  test("toggles pressed state on click and calls onPressedChange", () => {
    let pressed: boolean | undefined;
    render(
      <Toggle aria-label="bold" onPressedChange={(value) => (pressed = value)}>
        B
      </Toggle>,
    );
    const toggle = screen.getByRole("button", { name: "bold" });

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(pressed).toBe(true);

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-pressed", "false");
    expect(pressed).toBe(false);
  });

  test("supports a controlled pressed value", () => {
    const { rerender } = render(
      <Toggle aria-label="bold" pressed={false} onPressedChange={() => {}}>
        B
      </Toggle>,
    );
    expect(screen.getByRole("button", { name: "bold" })).toHaveAttribute("aria-pressed", "false");

    rerender(
      <Toggle aria-label="bold" pressed={true} onPressedChange={() => {}}>
        B
      </Toggle>,
    );
    expect(screen.getByRole("button", { name: "bold" })).toHaveAttribute("aria-pressed", "true");
  });

  test("blocks interaction and press changes when disabled", () => {
    let called = false;
    render(
      <Toggle aria-label="bold" disabled onPressedChange={() => (called = true)}>
        B
      </Toggle>,
    );
    const toggle = screen.getByRole("button", { name: "bold" });

    expect(toggle).toBeDisabled();
    fireEvent.click(toggle);
    expect(called).toBe(false);
    expect(toggle).toHaveAttribute("aria-pressed", "false");
  });

  test("applies the outline variant and larger size classes", () => {
    render(
      <Toggle aria-label="bold" variant="outline" size="lg">
        B
      </Toggle>,
    );
    const toggle = screen.getByRole("button", { name: "bold" });
    expect(toggle.className).toContain("border");
    expect(toggle.className).toContain("h-10");
  });
});
