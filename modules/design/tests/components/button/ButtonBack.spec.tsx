/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonBack } from "../../../src/components/button/ButtonBack";

afterEach(cleanup);

describe("ButtonBack", () => {
  test("renders the default label and icon", () => {
    render(<ButtonBack />);

    const button = screen.getByRole("button", { name: "Back" });
    expect(button.className).toContain("ring-1");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  test("renders custom children instead of the default label", () => {
    render(<ButtonBack>Previous step</ButtonBack>);

    expect(screen.getByRole("button", { name: "Previous step" })).toBeInTheDocument();
  });
});
