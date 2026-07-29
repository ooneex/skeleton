/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Textarea } from "../../../src/components/textarea/Textarea";

afterEach(cleanup);

describe("Textarea", () => {
  test("renders a textarea element", () => {
    render(<Textarea aria-label="bio" />);
    const textarea = screen.getByRole("textbox", { name: "bio" });
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe("TEXTAREA");
    expect(textarea).toHaveAttribute("data-slot", "textarea");
  });

  test("renders the placeholder and default value", () => {
    render(<Textarea aria-label="bio" placeholder="Tell us about yourself" defaultValue="Hello" />);
    const textarea = screen.getByRole("textbox", { name: "bio" }) as HTMLTextAreaElement;
    expect(textarea).toHaveAttribute("placeholder", "Tell us about yourself");
    expect(textarea.value).toBe("Hello");
  });

  test("accepts typed input and calls onChange", () => {
    let value = "";
    render(<Textarea aria-label="bio" onChange={(e) => (value = e.target.value)} />);
    const textarea = screen.getByRole("textbox", { name: "bio" });

    fireEvent.change(textarea, { target: { value: "Some bio text" } });
    expect(value).toBe("Some bio text");
    expect((textarea as HTMLTextAreaElement).value).toBe("Some bio text");
  });

  test("merges a custom className with the base styles", () => {
    render(<Textarea aria-label="bio" className="custom-textarea" />);
    const textarea = screen.getByRole("textbox", { name: "bio" });
    expect(textarea.className).toContain("custom-textarea");
    expect(textarea.className).toContain("rounded");
  });

  test("supports the disabled state", () => {
    render(<Textarea aria-label="bio" disabled />);
    const textarea = screen.getByRole("textbox", { name: "bio" });

    expect(textarea).toBeDisabled();
    expect(textarea.className).toContain("disabled:cursor-not-allowed");
  });
});
