/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Kbd } from "../../../src/components/kbd/Kbd";
import { KbdGroup } from "../../../src/components/kbd/KbdGroup";

afterEach(cleanup);

describe("Kbd", () => {
  test("renders the key text", () => {
    render(<Kbd>⌘K</Kbd>);
    expect(screen.getByText("⌘K")).toBeInTheDocument();
  });

  test("renders as a <kbd> element with the kbd data-slot", () => {
    render(<Kbd>Esc</Kbd>);
    const el = screen.getByText("Esc");
    expect(el.tagName).toBe("KBD");
    expect(el).toHaveAttribute("data-slot", "kbd");
  });

  test("merges a custom className", () => {
    render(<Kbd className="custom-kbd">A</Kbd>);
    expect(screen.getByText("A")).toHaveClass("custom-kbd");
  });

  test("exposes KbdGroup as Kbd.Group", () => {
    expect(Kbd.Group).toBe(KbdGroup);
  });
});

describe("Kbd.Group", () => {
  test("renders its children grouped together", () => {
    render(
      <Kbd.Group>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </Kbd.Group>,
    );
    expect(screen.getByText("Ctrl")).toBeInTheDocument();
    expect(screen.getByText("K")).toBeInTheDocument();
  });

  test("carries the kbd-group data-slot", () => {
    const { container } = render(<KbdGroup>content</KbdGroup>);
    expect(container.firstElementChild).toHaveAttribute("data-slot", "kbd-group");
  });
});
