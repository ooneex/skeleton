/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Command } from "../../../src/components/command/Command";
import { CommandPalette } from "../../../src/components/command/CommandDialog";

afterEach(cleanup);

describe("Command", () => {
  test("renders input, groups and items", () => {
    render(
      <Command>
        <Command.Input placeholder="Type a command..." />
        <Command.List>
          <Command.Empty>No results.</Command.Empty>
          <Command.Group heading="Actions">
            <Command.Item>
              Open
              <Command.Shortcut>⌘O</Command.Shortcut>
            </Command.Item>
            <Command.Item>New file</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>,
    );

    expect(screen.getByPlaceholderText("Type a command...")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /Open/ })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "New file" })).toBeInTheDocument();
    expect(screen.getByText("⌘O")).toBeInTheDocument();
  });

  test("filters items as the user types and shows Command.Empty when nothing matches", () => {
    render(
      <Command>
        <Command.Input placeholder="Search" />
        <Command.List>
          <Command.Empty>No results.</Command.Empty>
          <Command.Item value="Open file">Open file</Command.Item>
          <Command.Item value="Close file">Close file</Command.Item>
        </Command.List>
      </Command>,
    );

    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "open" } });

    expect(screen.getByRole("option", { name: "Open file" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Close file" })).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "zzz-no-match" } });
    expect(screen.getByText("No results.")).toBeInTheDocument();
    expect(screen.queryByRole("option")).not.toBeInTheDocument();
  });

  test("clicking an item invokes its onSelect handler", () => {
    let selected: string | null = null;
    render(
      <Command>
        <Command.List>
          <Command.Item value="save" onSelect={(value) => (selected = value)}>
            Save
          </Command.Item>
        </Command.List>
      </Command>,
    );

    fireEvent.click(screen.getByRole("option", { name: "Save" }));
    expect(selected as string | null).toBe("save");
  });

  test("renders a separator between groups", () => {
    render(
      <Command>
        <Command.List>
          <Command.Group heading="A">
            <Command.Item>One</Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="B">
            <Command.Item>Two</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>,
    );

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});

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

    expect(await screen.findByText("New file")).toBeInTheDocument();
    expect(screen.getByText("⌘N")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Open…"));

    expect(await resultPromise).toBe("open");
  });

  test("shows the empty message and resolves null when dismissed", async () => {
    render(<CommandPalette />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = CommandPalette.call({
        items: [{ value: "only", label: "Only item" }],
        emptyMessage: "Nothing found",
      });
    });

    const input = await screen.findByPlaceholderText("Type a command or search…");
    fireEvent.change(input, { target: { value: "does-not-exist" } });
    expect(screen.getByText("Nothing found")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(await resultPromise).toBeNull();
  });
});
