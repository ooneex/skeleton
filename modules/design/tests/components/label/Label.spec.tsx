/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "../../../src/components/label/Label";

afterEach(cleanup);

describe("Label", () => {
  test("renders its text content", () => {
    render(<Label>Email address</Label>);
    expect(screen.getByText("Email address")).toBeInTheDocument();
  });

  test("renders as a <label> element with the label data-slot", () => {
    render(<Label>Name</Label>);
    const el = screen.getByText("Name").closest("label");
    expect(el).toHaveAttribute("data-slot", "label");
  });

  test("does not show a required marker by default", () => {
    render(<Label>Name</Label>);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  test("shows a required marker when required is set", () => {
    render(<Label required>Name</Label>);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  test("applies the default xs size class", () => {
    render(<Label>Name</Label>);
    const el = screen.getByText("Name").closest("label");
    expect(el).toHaveClass("text-xs");
  });

  test("applies a custom size", () => {
    render(<Label size="lg">Name</Label>);
    const el = screen.getByText("Name").closest("label");
    expect(el).toHaveClass("text-lg");
  });

  test("merges a custom className", () => {
    render(<Label className="custom-label">Name</Label>);
    const el = screen.getByText("Name").closest("label");
    expect(el).toHaveClass("custom-label");
  });
});
