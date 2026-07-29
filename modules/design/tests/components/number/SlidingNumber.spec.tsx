/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SlidingNumber } from "../../../src/components/number/SlidingNumber";

afterEach(cleanup);

const digitWrappers = (container: HTMLElement) => container.querySelectorAll(".w-\\[1ch\\]");

describe("SlidingNumber", () => {
  test("renders one digit column per integer digit", () => {
    const { container } = render(<SlidingNumber value={42} />);
    expect(digitWrappers(container)).toHaveLength(2);
  });

  test("renders a single digit column for single-digit values without padding", () => {
    const { container } = render(<SlidingNumber value={5} />);
    expect(digitWrappers(container)).toHaveLength(1);
  });

  test("pads single-digit values to two columns when padStart is true", () => {
    const { container } = render(<SlidingNumber value={5} padStart />);
    expect(digitWrappers(container)).toHaveLength(2);
  });

  test("does not pad values already at or above 10 when padStart is true", () => {
    const { container } = render(<SlidingNumber value={42} padStart />);
    expect(digitWrappers(container)).toHaveLength(2);
  });

  test("renders a leading minus sign for negative values", () => {
    const { container } = render(<SlidingNumber value={-7} />);
    expect(container.querySelector('[data-slot="sliding-number"]')?.textContent).toStartWith("-");
  });

  test("does not render a minus sign for positive values", () => {
    const { container } = render(<SlidingNumber value={7} />);
    expect(container.querySelector('[data-slot="sliding-number"]')?.textContent?.startsWith("-")).toBe(false);
  });

  test("renders decimal digits separated by the default separator", () => {
    const { container } = render(<SlidingNumber value={3.14} />);
    const root = container.querySelector('[data-slot="sliding-number"]');
    expect(root?.textContent).toContain(".");
    // integer part (1 column) + decimal part (2 columns)
    expect(digitWrappers(container)).toHaveLength(3);
  });

  test("uses a custom decimal separator", () => {
    const { container } = render(<SlidingNumber value={3.14} decimalSeparator="," />);
    const root = container.querySelector('[data-slot="sliding-number"]');
    expect(root?.textContent).toContain(",");
  });

  test("renders no decimal separator for integer values", () => {
    const { container } = render(<SlidingNumber value={42} />);
    const root = container.querySelector('[data-slot="sliding-number"]');
    expect(root?.textContent).not.toContain(".");
  });

  test("merges a custom className without dropping the base classes", () => {
    const { container } = render(<SlidingNumber value={1} className="text-primary" />);
    const root = container.querySelector('[data-slot="sliding-number"]');
    expect(root).toHaveClass("text-primary", "flex", "items-center");
  });
});
