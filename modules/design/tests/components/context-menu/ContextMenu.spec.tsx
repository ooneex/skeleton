/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContextMenu, openContextMenu } from "../../../src/components/context-menu/ContextMenu";

afterEach(cleanup);

describe("ContextMenu", () => {
  test("renders items, separators and labels, and resolves the selected value", async () => {
    render(<ContextMenu />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = openContextMenu({ clientX: 10, clientY: 20 }, [
        { type: "label", label: "Actions" },
        { value: "copy", label: "Copy", shortcut: "⌘C" },
        { type: "separator" },
        { value: "delete", label: "Delete", destructive: true },
      ]);
    });

    expect(await screen.findByText("Actions")).toBeInTheDocument();
    expect(screen.getByText("Copy")).toBeInTheDocument();
    expect(screen.getByText("⌘C")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toBeInTheDocument();

    const deleteItem = screen.getByText("Delete").closest("[data-slot='context-menu-item']");
    expect(deleteItem).toHaveAttribute("data-variant", "destructive");

    fireEvent.click(screen.getByText("Copy"));
    expect(await resultPromise).toBe("copy");
  });

  test("calls preventDefault on the triggering pointer event", async () => {
    render(<ContextMenu />);
    let prevented = false;
    const event = { clientX: 0, clientY: 0, preventDefault: () => (prevented = true) };

    await act(async () => {
      openContextMenu(event, [{ value: "a", label: "A" }]);
    });

    expect(prevented).toBe(true);
  });

  test("resolves null when dismissed without a selection", async () => {
    render(<ContextMenu />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = openContextMenu({ clientX: 0, clientY: 0 }, [{ value: "a", label: "A" }]);
    });

    await screen.findByText("A");
    fireEvent.keyDown(document, { key: "Escape" });

    expect(await resultPromise).toBeNull();
  });

  test("renders checkbox and radio rows with their checked state", async () => {
    render(<ContextMenu />);

    await act(async () => {
      openContextMenu({ clientX: 0, clientY: 0 }, [
        { type: "checkbox", value: "bold", label: "Bold", checked: true },
        { type: "radio", value: "left", label: "Align left", checked: true },
      ]);
    });

    expect(await screen.findByText("Bold")).toBeInTheDocument();
    const checkbox = screen.getByText("Bold").closest("[data-slot='context-menu-checkbox-item']");
    expect(checkbox).toHaveAttribute("aria-checked", "true");

    const radio = screen.getByText("Align left").closest("[data-slot='context-menu-radio-item']");
    expect(radio).toHaveAttribute("aria-checked", "true");
  });

  test("renders a submenu trigger for nested items", async () => {
    render(<ContextMenu />);

    await act(async () => {
      openContextMenu({ clientX: 0, clientY: 0 }, [
        {
          type: "sub",
          label: "More",
          items: [{ value: "nested", label: "Nested action" }],
        },
      ]);
    });

    expect(await screen.findByText("More")).toBeInTheDocument();
  });
});
