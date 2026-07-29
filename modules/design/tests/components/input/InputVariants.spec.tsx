/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputCreditCard } from "../../../src/components/input/InputCreditCard";
import { InputEmail } from "../../../src/components/input/InputEmail";
import { InputFirstName } from "../../../src/components/input/InputFirstName";
import { InputLastName } from "../../../src/components/input/InputLastName";
import { InputSearch } from "../../../src/components/input/InputSearch";
import { InputSearchLight } from "../../../src/components/input/InputSearchLight";
import { InputUrl } from "../../../src/components/input/InputUrl";

afterEach(cleanup);

const variants = [
  { name: "InputCreditCard", Component: InputCreditCard, placeholder: "1234 5678 9012 3456", type: null },
  { name: "InputEmail", Component: InputEmail, placeholder: "email@example.com", type: "email" },
  { name: "InputFirstName", Component: InputFirstName, placeholder: "First name", type: null },
  { name: "InputLastName", Component: InputLastName, placeholder: "Last name", type: null },
  { name: "InputSearch", Component: InputSearch, placeholder: "Search...", type: null },
  { name: "InputSearchLight", Component: InputSearchLight, placeholder: "Search...", type: null },
  { name: "InputUrl", Component: InputUrl, placeholder: "https://example.com", type: "url" },
];

describe.each(variants)("$name", ({ Component, placeholder, type }) => {
  test("renders with its default placeholder", () => {
    render(<Component />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test("supports a custom placeholder", () => {
    render(<Component placeholder="custom placeholder" />);
    expect(screen.getByPlaceholderText("custom placeholder")).toBeInTheDocument();
  });

  test("accepts typed input and reflects the value", () => {
    render(<Component />);
    const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input).toHaveValue("hello");
  });

  test("is disabled when the disabled prop is set", () => {
    render(<Component disabled />);
    expect(screen.getByPlaceholderText(placeholder)).toBeDisabled();
  });

  if (type) {
    test(`renders with type="${type}"`, () => {
      render(<Component />);
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute("type", type);
    });
  }
});
