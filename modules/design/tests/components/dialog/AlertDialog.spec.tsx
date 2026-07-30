/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialog, alert, confirm } from "../../../src/components/dialog/AlertDialog";

afterEach(cleanup);

describe("AlertDialog", () => {
  test("confirm renders cancel and confirm actions and resolves true on confirm", async () => {
    render(<AlertDialog />);

    let result!: Promise<boolean>;
    await act(async () => {
      result = confirm({ title: "Delete?", description: "This cannot be undone." });
    });

    expect(await screen.findByRole("alertdialog")).toBeInTheDocument();
    expect(screen.getByText("Delete?")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Confirm" }));

    expect(await result).toBe(true);
  });

  test("alert renders a single OK button and resolves false on Escape dismissal", async () => {
    render(<AlertDialog />);

    let result!: Promise<boolean>;
    await act(async () => {
      result = alert({ title: "Saved" });
    });

    expect(await screen.findByText("Saved")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Cancel" })).not.toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape" });

    expect(await result).toBe(false);
  });
});
