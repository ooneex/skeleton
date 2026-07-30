/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Command } from "../../../src/components/command/Command";
import { CommandSeparator } from "../../../src/components/command/CommandSeparator";

afterEach(cleanup);

describe("CommandSeparator", () => {
  test("renders a visual separator between command groups", () => {
    render(
      <Command>
        <Command.List>
          <Command.Item>Open</Command.Item>
          <CommandSeparator className="custom-separator" />
          <Command.Item>Close</Command.Item>
        </Command.List>
      </Command>,
    );

    expect(screen.getByRole("separator")).toHaveClass("custom-separator");
    expect(document.querySelector('[data-slot="command-separator"]')?.className).toContain("h-px");
  });
});
