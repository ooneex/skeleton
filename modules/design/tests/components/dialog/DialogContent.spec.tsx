/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogContent } from "../../../src/components/dialog/DialogContent";
import { DialogDescription } from "../../../src/components/dialog/DialogDescription";
import { DialogTitle } from "../../../src/components/dialog/DialogTitle";

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("DialogContent", () => {
  test("wires title and description ids into dialog aria attributes", () => {
    render(
      <DialogContent>
        <DialogTitle>Rename file</DialogTitle>
        <DialogDescription>Choose a new name.</DialogDescription>
      </DialogContent>,
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-labelledby");
    expect(dialog).toHaveAttribute("aria-describedby");
  });

  test("shows a close button when requested and can disable pointer dismissal", () => {
    let dismissed = 0;
    render(
      <DialogContent showCloseButton disablePointerDismissal onDismiss={() => dismissed++}>
        Body
      </DialogContent>,
    );

    const overlay = document.querySelector('[data-slot="dialog-overlay"]') as HTMLElement;
    fireEvent.pointerDown(overlay);
    fireEvent.click(overlay);
    expect(dismissed).toBe(0);

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(dismissed).toBe(1);
  });
});
