/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputPrice } from "../../../src/components/input/InputPrice";

afterEach(cleanup);

describe("InputPrice", () => {
  test("renders a numeric input with the default placeholder", () => {
    render(<InputPrice />);
    const input = screen.getByPlaceholderText("0.00");
    expect(input).toHaveAttribute("type", "number");
  });

  test("defaults to USD currency", () => {
    render(<InputPrice />);
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  test("supports a custom initial currency", () => {
    render(<InputPrice currency="EUR" />);
    expect(screen.getByText("EUR")).toBeInTheDocument();
  });

  test("accepts typed numeric input", () => {
    render(<InputPrice />);
    const input = screen.getByPlaceholderText("0.00") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "42.5" } });
    expect(input).toHaveValue(42.5);
  });

  test("supports a custom placeholder", () => {
    render(<InputPrice placeholder="Amount" />);
    expect(screen.getByPlaceholderText("Amount")).toBeInTheDocument();
  });
});
