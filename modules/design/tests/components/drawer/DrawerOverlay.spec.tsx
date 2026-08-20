/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DrawerOverlay } from "../../../src/components/drawer/DrawerOverlay";

afterEach(cleanup);

describe("DrawerOverlay", () => {
  test("dismisses only when pointer down and click both happen on the overlay", () => {
    let dismissed = 0;
    render(<DrawerOverlay onDismiss={() => dismissed++} className="custom-overlay" />);

    const overlay = document.querySelector('[data-slot="drawer-overlay"]') as HTMLElement;
    fireEvent.pointerDown(overlay);
    fireEvent.click(overlay);
    expect(dismissed).toBe(1);
    expect(overlay).toHaveClass("custom-overlay");
  });

  test("ignores a click that started outside the overlay", () => {
    let dismissed = 0;
    render(<DrawerOverlay onDismiss={() => dismissed++} />);

    const overlay = document.querySelector('[data-slot="drawer-overlay"]') as HTMLElement;
    fireEvent.click(overlay);
    expect(dismissed).toBe(0);
  });

  test("stops intercepting pointer events while it animates out", () => {
    let dismissed = 0;
    const { rerender } = render(<DrawerOverlay onDismiss={() => dismissed++} />);
    rerender(<DrawerOverlay open={false} onDismiss={() => dismissed++} />);

    const overlay = document.querySelector('[data-slot="drawer-overlay"]') as HTMLElement;
    expect(overlay).toHaveAttribute("data-closed", "");
    expect(overlay).toHaveAttribute("inert");
    expect(overlay.className).toContain("pointer-events-none");

    fireEvent.pointerDown(overlay);
    fireEvent.click(overlay);
    expect(dismissed).toBe(0);
  });
});
