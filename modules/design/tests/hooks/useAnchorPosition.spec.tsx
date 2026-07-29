/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import { useRef } from "react";
import { useAnchorPosition } from "../../src/hooks/useAnchorPosition";

afterEach(cleanup);

const stubRect = (el: HTMLElement, rect: { top: number; left: number; width: number; height: number }) => {
  el.getBoundingClientRect = () =>
    ({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      right: rect.left + rect.width,
      bottom: rect.top + rect.height,
      x: rect.left,
      y: rect.top,
      toJSON: () => ({}),
    }) as DOMRect;
};

const setViewport = (width: number, height: number) => {
  Object.defineProperty(document.documentElement, "clientWidth", { configurable: true, value: width });
  Object.defineProperty(document.documentElement, "clientHeight", { configurable: true, value: height });
};

type TestProps = {
  open: boolean;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

const TestComponent = ({ open, side, align, sideOffset }: TestProps) => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const positionerRef = useRef<HTMLDivElement>(null);
  useAnchorPosition({ open, anchorRef, positionerRef, side, align, sideOffset });
  return (
    <>
      <button type="button" ref={anchorRef} data-testid="anchor">
        Anchor
      </button>
      <div ref={positionerRef} data-testid="positioner">
        Popup
      </div>
    </>
  );
};

describe("useAnchorPosition", () => {
  test("positions the popup below the anchor for the default side", () => {
    setViewport(1000, 800);
    const { getByTestId, rerender } = render(<TestComponent open={false} />);
    const anchor = getByTestId("anchor");
    const positioner = getByTestId("positioner");
    stubRect(anchor, { top: 100, left: 100, width: 80, height: 20 });
    stubRect(positioner, { top: 0, left: 0, width: 120, height: 40 });

    rerender(<TestComponent open={true} />);

    expect(positioner.style.top).not.toBe("");
    expect(positioner.style.left).not.toBe("");
  });

  test("sets the --anchor-width CSS variable to the anchor's width", () => {
    setViewport(1000, 800);
    const { getByTestId, rerender } = render(<TestComponent open={false} />);
    const anchor = getByTestId("anchor");
    const positioner = getByTestId("positioner");
    stubRect(anchor, { top: 100, left: 100, width: 80, height: 20 });
    stubRect(positioner, { top: 0, left: 0, width: 120, height: 40 });

    rerender(<TestComponent open={true} />);

    expect(positioner.style.getPropertyValue("--anchor-width")).toBe("80px");
  });

  test("flips to the opposite side when there is not enough space and the opposite side has more room", () => {
    setViewport(1000, 200);
    const { getByTestId, rerender } = render(<TestComponent open={false} side="bottom" />);
    const anchor = getByTestId("anchor");
    const positioner = getByTestId("positioner");
    // Anchor sits near the bottom of a short viewport: little room below, plenty above.
    stubRect(anchor, { top: 150, left: 100, width: 80, height: 20 });
    stubRect(positioner, { top: 0, left: 0, width: 120, height: 100 });

    rerender(<TestComponent open={true} side="bottom" />);

    const top = Number.parseFloat(positioner.style.top);
    // Flipped to "top": popup bottom edge should sit at/above the anchor's top (150), not below it.
    expect(top).toBeLessThan(150);
  });

  test("clamps the popup within the viewport instead of overflowing", () => {
    setViewport(300, 300);
    const { getByTestId, rerender } = render(<TestComponent open={false} align="start" />);
    const anchor = getByTestId("anchor");
    const positioner = getByTestId("positioner");
    // Anchor near the right edge, popup wider than remaining space.
    stubRect(anchor, { top: 50, left: 280, width: 10, height: 10 });
    stubRect(positioner, { top: 0, left: 0, width: 150, height: 40 });

    rerender(<TestComponent open={true} align="start" />);

    const left = Number.parseFloat(positioner.style.left);
    expect(left).toBeLessThanOrEqual(300 - 150);
  });

  test("does nothing while closed", () => {
    setViewport(1000, 800);
    const { getByTestId } = render(<TestComponent open={false} />);
    const positioner = getByTestId("positioner");
    expect(positioner.style.top).toBe("");
    expect(positioner.style.left).toBe("");
  });

  test("removes its window/document listeners on unmount", () => {
    setViewport(1000, 800);
    const removeEventListenerSpy: string[] = [];
    const originalRemove = window.removeEventListener.bind(window);
    window.removeEventListener = ((type: string, listener: EventListenerOrEventListenerObject) => {
      removeEventListenerSpy.push(type);
      originalRemove(type, listener);
    }) as typeof window.removeEventListener;

    const { unmount } = render(<TestComponent open={true} />);
    unmount();

    expect(removeEventListenerSpy).toContain("resize");
    window.removeEventListener = originalRemove;
  });
});
