/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Switch, switchVariants } from "../../../src/components/switch/Switch";

afterEach(cleanup);

describe("Switch", () => {
  test("renders unchecked by default", () => {
    render(<Switch aria-label="airplane mode" />);
    const sw = screen.getByRole("switch", { name: "airplane mode" });
    expect(sw).toBeInTheDocument();
    expect(sw).toHaveAttribute("aria-checked", "false");
  });

  test("renders checked when defaultChecked is true", () => {
    render(<Switch aria-label="airplane mode" defaultChecked />);
    expect(screen.getByRole("switch", { name: "airplane mode" })).toHaveAttribute("aria-checked", "true");
  });

  test("toggles checked state on click and calls onCheckedChange", () => {
    let checked: boolean | undefined;
    render(<Switch aria-label="airplane mode" onCheckedChange={(value) => (checked = value)} />);
    const sw = screen.getByRole("switch", { name: "airplane mode" });

    fireEvent.click(sw);
    expect(sw).toHaveAttribute("aria-checked", "true");
    expect(checked).toBe(true);

    fireEvent.click(sw);
    expect(sw).toHaveAttribute("aria-checked", "false");
    expect(checked).toBe(false);
  });

  test("supports the disabled state and blocks interaction", () => {
    let called = false;
    render(<Switch aria-label="airplane mode" disabled onCheckedChange={() => (called = true)} />);
    const sw = screen.getByRole("switch", { name: "airplane mode" });

    expect(sw).toHaveAttribute("aria-disabled", "true");
    fireEvent.click(sw);
    expect(called).toBe(false);
  });

  test("applies size variants via switchVariants", () => {
    const { container, rerender } = render(<Switch aria-label="airplane mode" size="lg" />);
    expect(container.querySelector('[data-slot="switch"]')?.className).toContain("h-5");

    rerender(<Switch aria-label="airplane mode" size="xs" />);
    expect(container.querySelector('[data-slot="switch"]')?.className).toContain("h-3");
  });

  test("defaults to the md size when none is given", () => {
    render(<Switch aria-label="airplane mode" />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-size", "md");
  });

  test("switchVariants exposes the expected size classes", () => {
    expect(switchVariants({ size: "sm" })).toContain("h-3.5");
    expect(switchVariants({ size: "md" })).toContain("w-8");
  });
});
