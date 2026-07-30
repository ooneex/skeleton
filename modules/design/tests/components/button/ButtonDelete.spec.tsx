/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonDelete } from "../../../src/components/button/ButtonDelete";

afterEach(cleanup);

describe("ButtonDelete", () => {
  test("renders the default delete label with destructive styling", () => {
    render(<ButtonDelete />);

    const button = screen.getByRole("button", { name: "Delete" });
    expect(button.className).toContain("text-destructive");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  test("renders custom children instead of the default label", () => {
    render(<ButtonDelete>Remove</ButtonDelete>);

    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });
});
