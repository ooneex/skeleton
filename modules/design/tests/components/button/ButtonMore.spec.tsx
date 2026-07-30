/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonMore } from "../../../src/components/button/ButtonMore";

afterEach(cleanup);

describe("ButtonMore", () => {
  test("renders an icon-only button with rounded styling", () => {
    render(<ButtonMore aria-label="More actions" />);

    const button = screen.getByRole("button", { name: "More actions" });
    expect(button.className).toContain("rounded-full");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  test("merges a custom className", () => {
    render(<ButtonMore aria-label="More actions" className="custom-more" />);

    expect(screen.getByRole("button", { name: "More actions" })).toHaveClass("custom-more");
  });
});
