/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Command } from "../../../src/components/command/Command";
import { CommandGroup } from "../../../src/components/command/CommandGroup";

afterEach(cleanup);

describe("CommandGroup", () => {
  test("renders a heading with its grouped items", () => {
    render(
      <Command>
        <Command.List>
          <CommandGroup heading="Actions" className="custom-group">
            <Command.Item>Open</Command.Item>
          </CommandGroup>
        </Command.List>
      </Command>,
    );

    expect(screen.getByText("Actions")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Open" })).toBeInTheDocument();
    expect(document.querySelector('[data-slot="command-group"]')).toHaveClass("custom-group");
  });
});
