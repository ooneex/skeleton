/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialog, alert, confirm } from "../../../src/components/dialog/AlertDialog";
import { createDialog, Dialog } from "../../../src/components/dialog/Dialog";

afterEach(cleanup);

describe("Dialog", () => {
  test("renders title, description and children while open, and resolves on dismiss", async () => {
    render(<Dialog />);

    let resultPromise!: Promise<void>;
    await act(async () => {
      resultPromise = Dialog.call({ title: "Heads up", description: "Something happened", children: <p>Body</p> });
    });

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Heads up")).toBeInTheDocument();
    expect(screen.getByText("Something happened")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    await resultPromise;
  });

  test("renders without a header when no title/description is given", async () => {
    render(<Dialog />);

    await act(async () => {
      Dialog.call({ children: <p>Just content</p> });
    });

    const dialogEl = await screen.findByRole("dialog");
    expect(dialogEl).not.toHaveAttribute("aria-labelledby");
    expect(screen.getByText("Just content")).toBeInTheDocument();
  });

  test("clicking the overlay dismisses the dialog (pointer dismissal enabled by default)", async () => {
    render(<Dialog />);

    let resultPromise!: Promise<void>;
    await act(async () => {
      resultPromise = Dialog.call({ title: "Dismiss me" });
    });

    await screen.findByRole("dialog");
    const overlay = document.querySelector("[data-slot='dialog-overlay']") as HTMLElement;
    expect(overlay).not.toBeNull();

    fireEvent.pointerDown(overlay);
    fireEvent.click(overlay);

    await resultPromise;
  });
});

describe("createDialog", () => {
  test("resolves the value passed to call.end", async () => {
    const RenameDialog = createDialog<{ current: string }, string | null>(
      ({ call, current }) => (
        <button type="button" onClick={() => call.end(`${current}!`)}>
          Save
        </button>
      ),
      { dismissValue: null },
    );

    render(<RenameDialog />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = RenameDialog.call({ current: "Untitled" });
    });

    fireEvent.click(await screen.findByRole("button", { name: "Save" }));
    expect(await resultPromise).toBe("Untitled!");
  });

  test("resolves with dismissValue when dismissed via Escape", async () => {
    const PromptDialog = createDialog<void, string | null>(() => <p>Prompt</p>, { dismissValue: null });

    render(<PromptDialog />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = PromptDialog.call();
    });

    await screen.findByText("Prompt");
    fireEvent.keyDown(document, { key: "Escape" });

    expect(await resultPromise).toBeNull();
  });
});

describe("AlertDialog", () => {
  test("confirm() resolves true when the action button is clicked", async () => {
    render(<AlertDialog />);

    let resultPromise!: Promise<boolean>;
    await act(async () => {
      resultPromise = confirm({ title: "Delete item?", description: "This can't be undone." });
    });

    expect(await screen.findByText("Delete item?")).toBeInTheDocument();
    expect(screen.getByText("This can't be undone.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Confirm" }));
    expect(await resultPromise).toBe(true);
  });

  test("confirm() resolves false when Cancel is clicked", async () => {
    render(<AlertDialog />);

    let resultPromise!: Promise<boolean>;
    await act(async () => {
      resultPromise = confirm({ title: "Delete item?" });
    });

    fireEvent.click(await screen.findByRole("button", { name: "Cancel" }));
    expect(await resultPromise).toBe(false);
  });

  test("alert() only shows a single acknowledge button and resolves true", async () => {
    render(<AlertDialog />);

    let resultPromise!: Promise<boolean>;
    await act(async () => {
      resultPromise = alert({ title: "Saved" });
    });

    expect(await screen.findByText("Saved")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Cancel" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "OK" }));
    expect(await resultPromise).toBe(true);
  });
});
