/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputGroup } from "../../../src/components/input/InputGroup";
import { InputGroupAddon } from "../../../src/components/input/InputGroupAddon";
import { InputGroupButton } from "../../../src/components/input/InputGroupButton";
import { InputGroupInput } from "../../../src/components/input/InputGroupInput";
import { InputGroupText } from "../../../src/components/input/InputGroupText";
import { InputGroupTextarea } from "../../../src/components/input/InputGroupTextarea";

afterEach(cleanup);

describe("InputGroup", () => {
  test("renders as a fieldset with the input-group data-slot", () => {
    const { container } = render(<InputGroup>content</InputGroup>);
    const el = container.firstElementChild as HTMLElement;
    expect(el.tagName).toBe("FIELDSET");
    expect(el).toHaveAttribute("data-slot", "input-group");
  });

  test("defaults to the sm size", () => {
    const { container } = render(<InputGroup>content</InputGroup>);
    expect(container.firstElementChild).toHaveAttribute("data-size", "sm");
  });

  test("applies a custom size", () => {
    const { container } = render(<InputGroup size="lg">content</InputGroup>);
    expect(container.firstElementChild).toHaveAttribute("data-size", "lg");
  });

  test("exposes sub-components as static properties", () => {
    expect(InputGroup.Addon).toBe(InputGroupAddon);
    expect(InputGroup.Button).toBe(InputGroupButton);
    expect(InputGroup.Text).toBe(InputGroupText);
    expect(InputGroup.Input).toBe(InputGroupInput);
    expect(InputGroup.Textarea).toBe(InputGroupTextarea);
  });

  test("renders a full composed group with an addon, input, and button", () => {
    render(
      <InputGroup>
        <InputGroup.Input placeholder="Search" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button>Go</InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>,
    );
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go" })).toBeInTheDocument();
  });
});

describe("InputGroupAddon", () => {
  test("renders its children", () => {
    render(
      <InputGroup>
        <InputGroupAddon>icon</InputGroupAddon>
      </InputGroup>,
    );
    expect(screen.getByText("icon")).toBeInTheDocument();
  });

  test("defaults align to inline-start", () => {
    render(<InputGroupAddon>content</InputGroupAddon>);
    expect(screen.getByText("content")).toHaveAttribute("data-align", "inline-start");
  });

  test("applies a custom align", () => {
    render(<InputGroupAddon align="inline-end">content</InputGroupAddon>);
    expect(screen.getByText("content")).toHaveAttribute("data-align", "inline-end");
  });

  test("focuses the sibling input when clicked outside of a nested button", () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="Focus me" />
        <InputGroupAddon align="inline-start">icon</InputGroupAddon>
      </InputGroup>,
    );
    fireEvent.click(screen.getByText("icon"));
    expect(screen.getByPlaceholderText("Focus me")).toHaveFocus();
  });
});

describe("InputGroupButton", () => {
  test("renders as a button with type=button by default", () => {
    render(<InputGroupButton>Click</InputGroupButton>);
    expect(screen.getByRole("button", { name: "Click" })).toHaveAttribute("type", "button");
  });

  test("fires onClick", () => {
    let clicked = false;
    render(<InputGroupButton onClick={() => (clicked = true)}>Click</InputGroupButton>);
    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(clicked).toBe(true);
  });
});

describe("InputGroupInput", () => {
  test("renders an input and accepts typed text", () => {
    render(<InputGroupInput placeholder="Type" />);
    const input = screen.getByPlaceholderText("Type") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input).toHaveValue("hello");
  });
});

describe("InputGroupText", () => {
  test("renders a span with its text", () => {
    render(<InputGroupText>Helper text</InputGroupText>);
    const el = screen.getByText("Helper text");
    expect(el.tagName).toBe("SPAN");
  });
});

describe("InputGroupTextarea", () => {
  test("renders a textarea and accepts typed text", () => {
    render(<InputGroupTextarea placeholder="Notes" />);
    const textarea = screen.getByPlaceholderText("Notes") as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "some notes" } });
    expect(textarea).toHaveValue("some notes");
  });
});
