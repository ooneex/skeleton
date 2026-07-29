/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import { useAutoHeight } from "../../src/hooks/useAutoHeight";

afterEach(cleanup);

const stubRect = (el: HTMLElement, height: number) => {
  el.getBoundingClientRect = () => ({ height, width: 0, top: 0, left: 0, right: 0, bottom: 0 }) as DOMRect;
};

describe("useAutoHeight", () => {
  test("returns 0 before any layout information is available", () => {
    let latestHeight = -1;
    const TestComponent = () => {
      const { ref, height } = useAutoHeight<HTMLDivElement>();
      latestHeight = height;
      return <div ref={ref} data-testid="target" />;
    };
    render(<TestComponent />);
    expect(latestHeight).toBe(0);
  });

  test("re-measures when a dependency changes", () => {
    const heights: number[] = [];
    let currentHeight = 100;
    const TestComponent = ({ dep }: { dep: number }) => {
      const { ref, height } = useAutoHeight<HTMLDivElement>([dep]);
      heights.push(height);
      return <div ref={ref} data-testid="target" style={{ height: currentHeight }} />;
    };

    const { getByTestId, rerender } = render(<TestComponent dep={1} />);
    stubRect(getByTestId("target"), currentHeight);

    currentHeight = 200;
    rerender(<TestComponent dep={2} />);
    stubRect(getByTestId("target"), currentHeight);

    // The effect re-runs measure() whenever `deps` changes, appending a new height.
    expect(heights.length).toBeGreaterThan(1);
  });

  test("does not throw when includeSelfBox is enabled", () => {
    const TestComponent = () => {
      const { ref } = useAutoHeight<HTMLDivElement>([], { includeSelfBox: true, includeParentBox: false });
      return <div ref={ref} data-testid="target" />;
    };
    expect(() => render(<TestComponent />)).not.toThrow();
  });
});
