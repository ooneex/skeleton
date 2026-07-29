/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { cleanup, fireEvent, render, renderHook } from "@testing-library/react";
import type { RefObject } from "react";
import { useRef } from "react";
import useClickOutside from "../../src/hooks/useClickOutside";

afterEach(cleanup);

const setup = (handler: (event: MouseEvent | TouchEvent) => void) => {
  let inside: HTMLDivElement | null = null;
  let outside: HTMLDivElement | null = null;

  const TestComponent = () => {
    const ref = useRef<HTMLDivElement>(null);
    // The hook's declared type expects `RefObject<T>` (non-nullable), but `useRef(null)`
    // always yields `RefObject<T | null>`; the runtime null-check inside the hook
    // handles this fine, so the assertion below just bridges the type mismatch.
    useClickOutside(ref as RefObject<HTMLDivElement>, handler);
    return (
      <div>
        <div ref={ref} data-testid="inside">
          Inside
        </div>
        <div data-testid="outside">Outside</div>
      </div>
    );
  };

  const { getByTestId } = render(<TestComponent />);
  inside = getByTestId("inside") as HTMLDivElement;
  outside = getByTestId("outside") as HTMLDivElement;

  return { inside, outside };
};

describe("useClickOutside", () => {
  test("calls the handler on mousedown outside the ref'd element", () => {
    const handler = mock(() => {});
    const { outside } = setup(handler);
    fireEvent.mouseDown(outside);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test("does not call the handler on mousedown inside the ref'd element", () => {
    const handler = mock(() => {});
    const { inside } = setup(handler);
    fireEvent.mouseDown(inside);
    expect(handler).not.toHaveBeenCalled();
  });

  test("calls the handler on touchstart outside the ref'd element", () => {
    const handler = mock(() => {});
    const { outside } = setup(handler);
    fireEvent.touchStart(outside);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test("removes its listeners on unmount", () => {
    const handler = mock(() => {});
    const ref = { current: document.createElement("div") };
    document.body.appendChild(ref.current);
    const { unmount } = renderHook(() => useClickOutside(ref, handler));
    unmount();
    fireEvent.mouseDown(document.body);
    expect(handler).not.toHaveBeenCalled();
    ref.current.remove();
  });
});
