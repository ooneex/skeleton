/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonSave } from "../../../src/components/button/ButtonSave";

afterEach(cleanup);

describe("ButtonSave", () => {
  test("renders the default save label with an icon", () => {
    render(<ButtonSave />);

    const button = screen.getByRole("button", { name: "Save" });
    expect(button.className).toContain("bg-primary");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  test("renders custom children instead of the default label", () => {
    render(<ButtonSave>Store</ButtonSave>);

    expect(screen.getByRole("button", { name: "Store" })).toBeInTheDocument();
  });
});
