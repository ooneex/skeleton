/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonEdit } from "../../../src/components/button/ButtonEdit";

afterEach(cleanup);

describe("ButtonEdit", () => {
  test("renders the default edit label with the outline variant", () => {
    render(<ButtonEdit />);

    const button = screen.getByRole("button", { name: "Edit" });
    expect(button.className).toContain("ring-1");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  test("renders custom children instead of the default label", () => {
    render(<ButtonEdit>Rename</ButtonEdit>);

    expect(screen.getByRole("button", { name: "Rename" })).toBeInTheDocument();
  });
});
