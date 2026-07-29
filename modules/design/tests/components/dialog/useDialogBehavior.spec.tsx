/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRef } from "react";
import { useDialogBehavior } from "../../../src/components/dialog/useDialogBehavior";

afterEach(cleanup);

const DialogHarness = ({
  open,
  modal = true,
  onDismiss,
}: {
  open: boolean;
  modal?: boolean | "trap-focus";
  onDismiss: () => void;
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  useDialogBehavior({ open, modal, popupRef, onDismiss });
  return (
    <div ref={popupRef} tabIndex={-1}>
      <button type="button">Inside</button>
    </div>
  );
};

describe("useDialogBehavior", () => {
  test("calls onDismiss on Escape while open", () => {
    let dismissed = 0;
    render(<DialogHarness open onDismiss={() => (dismissed += 1)} />);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(dismissed).toBe(1);
  });

  test("does not call onDismiss on Escape when closed", () => {
    let dismissed = 0;
    render(<DialogHarness open={false} onDismiss={() => (dismissed += 1)} />);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(dismissed).toBe(0);
  });

  test("ignores keys other than Escape", () => {
    let dismissed = 0;
    render(<DialogHarness open onDismiss={() => (dismissed += 1)} />);

    fireEvent.keyDown(document, { key: "Enter" });
    expect(dismissed).toBe(0);
  });

  test("only the topmost open dialog reacts to Escape", () => {
    let outerDismissed = 0;
    let innerDismissed = 0;

    const Nested = () => (
      <>
        <DialogHarness open onDismiss={() => (outerDismissed += 1)} />
        <DialogHarness open onDismiss={() => (innerDismissed += 1)} />
      </>
    );
    render(<Nested />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(innerDismissed).toBe(1);
    expect(outerDismissed).toBe(0);
  });

  test("locks body scroll while a modal dialog is open and restores it on close", () => {
    const { rerender, unmount } = render(<DialogHarness open modal onDismiss={() => {}} />);
    expect(document.body.style.overflow).toBe("hidden");

    rerender(<DialogHarness open={false} modal onDismiss={() => {}} />);
    expect(document.body.style.overflow).not.toBe("hidden");

    unmount();
  });

  test("does not lock body scroll for 'trap-focus' dialogs", () => {
    render(<DialogHarness open modal="trap-focus" onDismiss={() => {}} />);
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  test("focuses the popup when opened as modal", () => {
    render(<DialogHarness open modal onDismiss={() => {}} />);
    expect(document.activeElement?.tagName).toBe("DIV");
  });
});
