/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Command } from "../../../src/components/command";

afterEach(cleanup);

describe("command index", () => {
  test("re-exports the compound Command component", () => {
    render(
      <Command>
        <Command.List>
          <Command.Item>Open</Command.Item>
        </Command.List>
      </Command>,
    );

    expect(screen.getByRole("option", { name: "Open" })).toBeInTheDocument();
    expect(typeof Command.Shortcut).toBe("function");
  });
});
