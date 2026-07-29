/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "../../../src/components/input/Input";

afterEach(cleanup);

describe("Input", () => {
  test("renders a text input with a placeholder", () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
  });

  test("updates its value when the user types", () => {
    render(<Input placeholder="name" />);
    const input = screen.getByPlaceholderText("name") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Jane" } });
    expect(input).toHaveValue("Jane");
  });

  test("passes through the type prop", () => {
    render(<Input type="email" placeholder="email" />);
    expect(screen.getByPlaceholderText("email")).toHaveAttribute("type", "email");
  });

  test("applies the default sm size class", () => {
    render(<Input placeholder="x" />);
    expect(screen.getByPlaceholderText("x")).toHaveClass("h-8");
  });

  test("applies a custom size class", () => {
    render(<Input placeholder="x" size="lg" />);
    expect(screen.getByPlaceholderText("x")).toHaveClass("h-10");
  });

  test("is disabled when the disabled prop is set", () => {
    render(<Input placeholder="x" disabled />);
    expect(screen.getByPlaceholderText("x")).toBeDisabled();
  });

  test("merges a custom className", () => {
    render(<Input placeholder="x" className="custom-input" />);
    expect(screen.getByPlaceholderText("x")).toHaveClass("custom-input");
  });
});
