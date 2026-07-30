/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardDescription } from "../../../src/components/card/CardDescription";

afterEach(cleanup);

describe("CardDescription", () => {
  test("renders descriptive copy for the card", () => {
    render(<CardDescription>Due next week</CardDescription>);

    expect(screen.getByText("Due next week")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-description"]')).toBeInTheDocument();
  });

  test("merges a custom className with the muted text style", () => {
    render(<CardDescription className="custom-description">Due next week</CardDescription>);

    const description = document.querySelector('[data-slot="card-description"]');
    expect(description).toHaveClass("custom-description");
    expect(description?.className).toContain("text-muted-foreground");
  });
});
