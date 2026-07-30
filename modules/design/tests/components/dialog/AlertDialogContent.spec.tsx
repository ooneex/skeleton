/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogContent } from "../../../src/components/dialog/AlertDialogContent";
import { AlertDialogDescription } from "../../../src/components/dialog/AlertDialogDescription";
import { AlertDialogTitle } from "../../../src/components/dialog/AlertDialogTitle";

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("AlertDialogContent", () => {
  test("renders alertdialog semantics and wires title/description ids", () => {
    render(
      <AlertDialogContent size="sm">
        <AlertDialogTitle>Delete item</AlertDialogTitle>
        <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
      </AlertDialogContent>,
    );

    const dialog = screen.getByRole("alertdialog");
    expect(dialog).toHaveAttribute("data-size", "sm");
    expect(dialog).toHaveAttribute("aria-labelledby");
    expect(dialog).toHaveAttribute("aria-describedby");
  });

  test("dismisses on Escape but ignores overlay clicks", () => {
    let dismissed = 0;
    render(<AlertDialogContent onDismiss={() => dismissed++}>Body</AlertDialogContent>);

    fireEvent.click(document.querySelector('[data-slot="alert-dialog-overlay"]') as HTMLElement);
    expect(dismissed).toBe(0);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(dismissed).toBe(1);
  });
});
