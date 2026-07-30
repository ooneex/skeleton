/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardTitle } from "../../../src/components/card/CardTitle";

afterEach(cleanup);

describe("CardTitle", () => {
  test("renders the card title text", () => {
    render(<CardTitle>Invoice #1</CardTitle>);

    expect(screen.getByText("Invoice #1")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-title"]')).toBeInTheDocument();
  });

  test("merges a custom className with the base typography styles", () => {
    render(<CardTitle className="custom-title">Invoice #1</CardTitle>);

    const title = document.querySelector('[data-slot="card-title"]');
    expect(title).toHaveClass("custom-title");
    expect(title?.className).toContain("font-medium");
  });
});
