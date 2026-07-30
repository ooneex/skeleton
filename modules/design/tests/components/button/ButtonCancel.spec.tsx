/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonCancel } from "../../../src/components/button/ButtonCancel";

afterEach(cleanup);

describe("ButtonCancel", () => {
  test("renders the default cancel label with the ghost variant", () => {
    render(<ButtonCancel />);

    const button = screen.getByRole("button", { name: "Cancel" });
    expect(button.className).toContain("hover:bg-muted");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  test("renders custom children instead of the default label", () => {
    render(<ButtonCancel>Dismiss</ButtonCancel>);

    expect(screen.getByRole("button", { name: "Dismiss" })).toBeInTheDocument();
  });
});
