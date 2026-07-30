/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Command } from "../../../src/components/command/Command";
import { CommandItem } from "../../../src/components/command/CommandItem";

afterEach(cleanup);

describe("CommandItem", () => {
  test("invokes onSelect when chosen", () => {
    let selected: string | null = null;
    render(
      <Command>
        <Command.List>
          <CommandItem value="save" className="custom-item" onSelect={(value: string) => (selected = value)}>
            Save
          </CommandItem>
        </Command.List>
      </Command>,
    );

    const option = screen.getByRole("option", { name: "Save" });
    fireEvent.click(option);

    expect(selected === "save").toBe(true);
    expect(option).toHaveClass("custom-item");
  });
});
