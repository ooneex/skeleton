/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ScrollArea } from "../../../src/components/scroll-area/ScrollArea";
import { ScrollBar } from "../../../src/components/scroll-area/ScrollBar";

afterEach(cleanup);

describe("ScrollArea", () => {
  test("renders children inside the viewport", () => {
    const { container } = render(
      <ScrollArea className="h-20">
        <div>Content</div>
      </ScrollArea>,
    );

    const root = container.querySelector('[data-slot="scroll-area"]');
    const viewport = container.querySelector('[data-slot="scroll-area-viewport"]');
    expect(root).not.toBeNull();
    expect(viewport).not.toBeNull();
    expect(viewport).toHaveTextContent("Content");
  });

  test("merges a custom className onto the root without dropping base classes", () => {
    const { container } = render(
      <ScrollArea className="h-20">
        <div>Content</div>
      </ScrollArea>,
    );

    const root = container.querySelector('[data-slot="scroll-area"]');
    expect(root?.className).toContain("h-20");
    expect(root?.className).toContain("overflow-hidden");
  });

  test("applies viewportClassName to the scrolling viewport", () => {
    const { container } = render(
      <ScrollArea viewportClassName="max-h-40">
        <div>Content</div>
      </ScrollArea>,
    );

    const viewport = container.querySelector('[data-slot="scroll-area-viewport"]');
    expect(viewport?.className).toContain("max-h-40");
  });

  test("exposes ScrollBar as ScrollArea.Bar for the compound API", () => {
    expect(ScrollArea.Bar).toBe(ScrollBar);
  });

  test("hideScrollbar does not throw and still renders content", () => {
    const { container } = render(
      <ScrollArea hideScrollbar>
        <div>Content</div>
      </ScrollArea>,
    );

    expect(container.querySelector('[data-slot="scroll-area-viewport"]')).toHaveTextContent("Content");
  });
});

describe("ScrollBar", () => {
  test("defaults to a vertical orientation", () => {
    const { container } = render(
      <ScrollArea>
        <ScrollBar keepMounted />
        <div>Content</div>
      </ScrollArea>,
    );

    const bar = container.querySelector('[data-slot="scroll-area-scrollbar"]');
    expect(bar).toHaveAttribute("data-orientation", "vertical");
    expect(bar?.querySelector('[data-slot="scroll-area-thumb"]')).not.toBeNull();
  });

  test("renders a horizontal orientation when requested", () => {
    const { container } = render(
      <ScrollArea>
        <ScrollBar keepMounted orientation="horizontal" />
        <div>Content</div>
      </ScrollArea>,
    );

    const bar = container.querySelector('[data-slot="scroll-area-scrollbar"]');
    expect(bar).toHaveAttribute("data-orientation", "horizontal");
  });
});
