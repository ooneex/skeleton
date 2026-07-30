/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardAction } from "../../../src/components/card/CardAction";
import { CardDescription } from "../../../src/components/card/CardDescription";
import { CardHeader } from "../../../src/components/card/CardHeader";
import { CardTitle } from "../../../src/components/card/CardTitle";

afterEach(cleanup);

describe("CardHeader", () => {
  test("lays out title, description, and action content", () => {
    render(
      <CardHeader>
        <CardTitle>Invoice #1</CardTitle>
        <CardDescription>Due next week</CardDescription>
        <CardAction>Edit</CardAction>
      </CardHeader>,
    );

    expect(screen.getByText("Invoice #1")).toBeInTheDocument();
    expect(screen.getByText("Due next week")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });

  test("merges a custom className with the grid layout classes", () => {
    render(<CardHeader className="custom-header">Header</CardHeader>);

    const header = document.querySelector('[data-slot="card-header"]');
    expect(header).toHaveClass("custom-header");
    expect(header?.className).toContain("grid");
  });
});
