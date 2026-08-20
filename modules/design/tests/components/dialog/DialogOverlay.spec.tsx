/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogOverlay } from "../../../src/components/dialog/DialogOverlay";

afterEach(cleanup);

describe("DialogOverlay", () => {
  test("dismisses only when pointer down and click both happen on the overlay", () => {
    let dismissed = 0;
    render(<DialogOverlay onDismiss={() => dismissed++} className="custom-overlay" />);

    const overlay = document.querySelector('[data-slot="dialog-overlay"]') as HTMLElement;
    fireEvent.pointerDown(overlay);
    fireEvent.click(overlay);
    expect(dismissed).toBe(1);
    expect(overlay).toHaveClass("custom-overlay");
  });

  test("supports non-blocking mode and closed state", () => {
    render(<DialogOverlay open={false} blocking={false} />);
    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    expect(overlay).toHaveAttribute("data-closed", "");
    expect(overlay?.className).toContain("pointer-events-none");
  });

  test("stops intercepting pointer events and drops the blur while it animates out", () => {
    let dismissed = 0;
    const { rerender } = render(<DialogOverlay onDismiss={() => dismissed++} />);
    rerender(<DialogOverlay open={false} onDismiss={() => dismissed++} />);

    const overlay = document.querySelector('[data-slot="dialog-overlay"]') as HTMLElement;
    expect(overlay).toHaveAttribute("inert");
    expect(overlay.className).toContain("data-closed:fill-mode-forwards");
    expect(overlay.className).toContain("pointer-events-none");
    expect(overlay.className).not.toContain("backdrop-blur");

    fireEvent.pointerDown(overlay);
    fireEvent.click(overlay);
    expect(dismissed).toBe(0);
  });
});
