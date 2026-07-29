/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputPassword } from "../../../src/components/input/InputPassword";

afterEach(cleanup);

describe("InputPassword", () => {
  test("renders a password-type input with the default placeholder", () => {
    render(<InputPassword />);
    const input = screen.getByPlaceholderText("Password");
    expect(input).toHaveAttribute("type", "password");
  });

  test("masks typed characters (value is set, but not exposed as plain text type)", () => {
    render(<InputPassword />);
    const input = screen.getByPlaceholderText("Password") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "secret123" } });
    expect(input).toHaveValue("secret123");
    expect(input).toHaveAttribute("type", "password");
  });

  test("supports a custom placeholder", () => {
    render(<InputPassword placeholder="Enter password" />);
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });
});
