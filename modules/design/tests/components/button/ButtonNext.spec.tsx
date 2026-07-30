/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonNext } from "../../../src/components/button/ButtonNext";

afterEach(cleanup);

describe("ButtonNext", () => {
  test("renders the default next label with a trailing icon", () => {
    render(<ButtonNext />);

    const button = screen.getByRole("button", { name: "Next" });
    expect(button.className).toContain("bg-primary");
    expect(button.querySelector('[data-icon="inline-end"]')).toBeInTheDocument();
  });

  test("renders custom children instead of the default label", () => {
    render(<ButtonNext>Continue</ButtonNext>);

    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();
  });
});
