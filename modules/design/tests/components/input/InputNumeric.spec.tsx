/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputNumeric } from "../../../src/components/input/InputNumeric";

afterEach(cleanup);

describe("InputNumeric", () => {
  test("renders with the default value", () => {
    render(<InputNumeric />);
    expect(screen.getByRole("textbox")).toHaveValue("50");
  });

  test("renders with a custom default value", () => {
    render(<InputNumeric defaultValue={10} />);
    expect(screen.getByRole("textbox")).toHaveValue("10");
  });

  test("increments the value when clicking the increment button", () => {
    render(<InputNumeric defaultValue={10} step={2} />);
    fireEvent.click(screen.getByRole("button", { name: "Increment button" }));
    expect(screen.getByRole("textbox")).toHaveValue("12");
  });

  test("decrements the value when clicking the decrement button", () => {
    render(<InputNumeric defaultValue={10} step={2} />);
    fireEvent.click(screen.getByRole("button", { name: "Decrement button" }));
    expect(screen.getByRole("textbox")).toHaveValue("8");
  });

  test("does not go above max when incrementing", () => {
    render(<InputNumeric defaultValue={9} max={10} step={5} />);
    fireEvent.click(screen.getByRole("button", { name: "Increment button" }));
    expect(screen.getByRole("textbox")).toHaveValue("10");
  });

  test("does not go below min when decrementing", () => {
    render(<InputNumeric defaultValue={1} min={0} step={5} />);
    fireEvent.click(screen.getByRole("button", { name: "Decrement button" }));
    expect(screen.getByRole("textbox")).toHaveValue("0");
  });

  test("wraps to min after reaching max when wrap is enabled", () => {
    render(<InputNumeric defaultValue={10} max={10} min={0} wrap />);
    fireEvent.click(screen.getByRole("button", { name: "Increment button" }));
    expect(screen.getByRole("textbox")).toHaveValue("0");
  });

  test("wraps to max after reaching min when wrap is enabled", () => {
    render(<InputNumeric defaultValue={0} max={10} min={0} wrap />);
    fireEvent.click(screen.getByRole("button", { name: "Decrement button" }));
    expect(screen.getByRole("textbox")).toHaveValue("10");
  });

  test("pads the displayed value with a leading zero when pad is enabled", () => {
    render(<InputNumeric defaultValue={5} pad />);
    expect(screen.getByRole("textbox")).toHaveValue("05");
  });

  test("resets to min when the input is cleared", () => {
    render(<InputNumeric defaultValue={5} min={2} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("2");
  });

  test("strips non-numeric characters from typed input", () => {
    render(<InputNumeric defaultValue={0} max={100} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "a3b" } });
    expect(input).toHaveValue("3");
  });

  test("clamps typed input above max down to max", () => {
    render(<InputNumeric defaultValue={0} max={20} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "999" } });
    expect(input).toHaveValue("20");
  });

  test("calls onChange with the new value", () => {
    let received: number | undefined;
    render(
      <InputNumeric
        defaultValue={5}
        onChange={(value) => {
          received = value;
        }}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Increment button" }));
    expect(received).toBe(6);
  });

  test("behaves as a controlled component when value is provided", () => {
    render(<InputNumeric value={7} onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveValue("7");
    fireEvent.click(screen.getByRole("button", { name: "Increment button" }));
    // Controlled: internal state does not change without the parent updating `value`.
    expect(screen.getByRole("textbox")).toHaveValue("7");
  });
});
