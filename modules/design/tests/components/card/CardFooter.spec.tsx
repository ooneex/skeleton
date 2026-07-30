/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardFooter } from "../../../src/components/card/CardFooter";

afterEach(cleanup);

describe("CardFooter", () => {
  test("renders footer actions inside the footer slot", () => {
    render(<CardFooter>Save</CardFooter>);

    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-footer"]')).toBeInTheDocument();
  });

  test("merges a custom className with the footer layout styles", () => {
    render(<CardFooter className="custom-footer">Save</CardFooter>);

    const footer = document.querySelector('[data-slot="card-footer"]');
    expect(footer).toHaveClass("custom-footer");
    expect(footer?.className).toContain("items-center");
  });
});
