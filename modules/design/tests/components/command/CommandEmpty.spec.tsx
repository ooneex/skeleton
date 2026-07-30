/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Command } from "../../../src/components/command/Command";
import { CommandEmpty } from "../../../src/components/command/CommandEmpty";

afterEach(cleanup);

describe("CommandEmpty", () => {
  test("renders the empty message when no results are available", () => {
    render(
      <Command>
        <Command.List>
          <CommandEmpty className="custom-empty">No commands.</CommandEmpty>
        </Command.List>
      </Command>,
    );

    expect(screen.getByText("No commands.")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="command-empty"]')).toHaveClass("custom-empty");
  });
});
