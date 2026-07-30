/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRef } from "react";
import { useDialogBehavior } from "../../../src/components/dialog/useDialogBehavior";

afterEach(() => {
  cleanup();
  document.body.style.overflow = "";
});

const TestDialog = ({
  modal = true,
  onDismiss = () => {},
}: {
  modal?: boolean | "trap-focus";
  onDismiss?: () => void;
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  useDialogBehavior({ open: true, modal, popupRef, onDismiss });

  return (
    <div ref={popupRef} tabIndex={-1}>
      <button type="button">First</button>
      <button type="button">Last</button>
    </div>
  );
};

describe("useDialogBehavior", () => {
  test("locks body scroll and dismisses on Escape when modal", () => {
    let dismissed = 0;
    render(<TestDialog onDismiss={() => dismissed++} />);

    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(dismissed).toBe(1);
  });

  test("traps focus within the popup on Tab navigation", () => {
    render(<TestDialog modal="trap-focus" />);

    const buttons = screen.getAllByRole("button");
    const last = buttons[1];
    const first = buttons[0];
    expect(last).toBeDefined();
    expect(first).toBeDefined();

    if (!last || !first) {
      throw new Error("Expected both focusable buttons to render.");
    }

    last.focus();
    fireEvent.keyDown(last, { key: "Tab" });

    expect(document.activeElement).toBe(first);
  });
});
