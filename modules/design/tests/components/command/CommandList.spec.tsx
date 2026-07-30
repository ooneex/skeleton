/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Command } from "../../../src/components/command/Command";
import { CommandList } from "../../../src/components/command/CommandList";

afterEach(cleanup);

describe("CommandList", () => {
  test("renders options inside the scrollable list", () => {
    render(
      <Command>
        <CommandList className="custom-list">
          <Command.Item>Open</Command.Item>
          <Command.Item>Close</Command.Item>
        </CommandList>
      </Command>,
    );

    expect(screen.getByRole("option", { name: "Open" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Close" })).toBeInTheDocument();
    expect(document.querySelector('[data-slot="command-list"]')).toHaveClass("custom-list");
  });
});
