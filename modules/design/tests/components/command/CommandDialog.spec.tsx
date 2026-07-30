/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CommandPalette } from "../../../src/components/command/CommandDialog";

afterEach(cleanup);

describe("CommandPalette", () => {
  test("opens with grouped items and resolves the selected value", async () => {
    render(<CommandPalette />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = CommandPalette.call({
        items: [
          { value: "new", label: "New file", group: "Actions", shortcut: "⌘N" },
          { value: "open", label: "Open…", group: "Actions" },
        ],
      });
    });

    expect(await screen.findByText("Actions")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Open…"));

    expect(await resultPromise).toBe("open");
  });

  test("shows a custom empty message when nothing matches", async () => {
    render(<CommandPalette />);

    await act(async () => {
      CommandPalette.call({
        items: [{ value: "only", label: "Only item" }],
        emptyMessage: "Nothing found",
      });
    });

    const input = await screen.findByPlaceholderText("Type a command or search…");
    fireEvent.change(input, { target: { value: "zzz" } });

    expect(screen.getByText("Nothing found")).toBeInTheDocument();
  });
});
