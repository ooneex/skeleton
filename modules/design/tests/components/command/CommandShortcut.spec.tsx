/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CommandShortcut } from "../../../src/components/command/CommandShortcut";

afterEach(cleanup);

describe("CommandShortcut", () => {
  test("renders keyboard hint text with the shortcut slot styling", () => {
    render(<CommandShortcut className="custom-shortcut">⌘K</CommandShortcut>);

    expect(screen.getByText("⌘K")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="command-shortcut"]')).toHaveClass("custom-shortcut");
  });
});
