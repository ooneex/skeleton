/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardContent } from "../../../src/components/card/CardContent";

afterEach(cleanup);

describe("CardContent", () => {
  test("renders body content inside the content slot", () => {
    render(<CardContent>Body content</CardContent>);

    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-content"]')).toBeInTheDocument();
  });

  test("merges a custom className with the base spacing", () => {
    render(<CardContent className="custom-content">Body content</CardContent>);

    const content = document.querySelector('[data-slot="card-content"]');
    expect(content).toHaveClass("custom-content");
    expect(content?.className).toContain("p-0");
  });
});
