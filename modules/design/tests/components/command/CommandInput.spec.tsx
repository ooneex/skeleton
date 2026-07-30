/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Command } from "../../../src/components/command/Command";
import { CommandInput } from "../../../src/components/command/CommandInput";

afterEach(cleanup);

describe("CommandInput", () => {
  test("renders the search input with its icon wrapper", () => {
    render(
      <Command>
        <CommandInput placeholder="Search commands" className="custom-input" />
      </Command>,
    );

    expect(screen.getByPlaceholderText("Search commands")).toHaveClass("custom-input");
    expect(document.querySelector('[data-slot="command-input-wrapper"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="command-input-wrapper"] svg')).toBeInTheDocument();
  });
});
