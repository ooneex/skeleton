/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogOverlay } from "../../../src/components/dialog/AlertDialogOverlay";

afterEach(cleanup);

describe("AlertDialogOverlay", () => {
  test("stops intercepting pointer events and drops the blur while it animates out", () => {
    render(<AlertDialogOverlay open={false} />);
    const overlay = document.querySelector('[data-slot="alert-dialog-overlay"]') as HTMLElement;
    expect(overlay).toHaveAttribute("inert");
    expect(overlay.className).toContain("data-closed:fill-mode-forwards");
    expect(overlay.className).toContain("pointer-events-none");
    expect(overlay.className).not.toContain("backdrop-blur");
  });

  test("renders open and closed state data attributes", () => {
    const { rerender } = render(<AlertDialogOverlay className="custom-overlay" />);
    expect(document.querySelector('[data-slot="alert-dialog-overlay"]')).toHaveAttribute("data-open", "");

    rerender(<AlertDialogOverlay open={false} className="custom-overlay" />);
    const overlay = document.querySelector('[data-slot="alert-dialog-overlay"]');
    expect(overlay).toHaveAttribute("data-closed", "");
    expect(overlay).toHaveClass("custom-overlay");
  });
});
