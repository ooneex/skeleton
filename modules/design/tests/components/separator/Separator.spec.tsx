/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Separator } from "../../../src/components/separator/Separator";

afterEach(cleanup);

describe("Separator", () => {
  test("renders with horizontal orientation by default", () => {
    render(<Separator data-testid="sep" />);
    const separator = screen.getByTestId("sep");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("data-orientation", "horizontal");
  });

  test("applies the vertical orientation when requested", () => {
    render(<Separator data-testid="sep" orientation="vertical" />);
    expect(screen.getByTestId("sep")).toHaveAttribute("data-orientation", "vertical");
  });

  test("merges a custom className without dropping the base classes", () => {
    render(<Separator data-testid="sep" className="my-custom-class" />);
    const separator = screen.getByTestId("sep");
    expect(separator.className).toContain("my-custom-class");
    expect(separator.className).toContain("bg-border");
  });

  test("has the data-slot attribute for styling hooks", () => {
    render(<Separator data-testid="sep" />);
    expect(screen.getByTestId("sep")).toHaveAttribute("data-slot", "separator");
  });
});
