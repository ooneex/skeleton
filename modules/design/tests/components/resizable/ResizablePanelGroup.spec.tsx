/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ResizablePanelGroup } from "../../../src/components/resizable/ResizablePanelGroup";

afterEach(cleanup);

// react-resizable-panels drives layout/resize measurement via ResizeObserver,
// which happy-dom does not implement, so full drag-resize can't be exercised here;
// these are structural/aria smoke tests instead. Note: the installed
// react-resizable-panels version takes an `orientation` prop (not `direction`) and
// reflects it as `aria-orientation` — the `data-[panel-group-direction=vertical]`
// Tailwind selector in ResizablePanelGroup.tsx/ResizableHandle.tsx targets an
// attribute this library version never renders, so that vertical styling looks
// like dead code (flagged for the maintainers, not fixed here).
describe("ResizablePanelGroup", () => {
  test("renders panels and a handle for a horizontal layout", () => {
    const { container } = render(
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanelGroup.Panel defaultSize={50}>Left</ResizablePanelGroup.Panel>
        <ResizablePanelGroup.Handle />
        <ResizablePanelGroup.Panel defaultSize={50}>Right</ResizablePanelGroup.Panel>
      </ResizablePanelGroup>,
    );

    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
    const group = container.querySelector('[data-slot="resizable-panel-group"]') as HTMLElement;
    expect(group).not.toBeNull();
    expect(group.style.flexDirection).toBe("row");
  });

  test("the handle exposes the separator role and is focusable", () => {
    const { container } = render(
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanelGroup.Panel defaultSize={50}>Left</ResizablePanelGroup.Panel>
        <ResizablePanelGroup.Handle />
        <ResizablePanelGroup.Panel defaultSize={50}>Right</ResizablePanelGroup.Panel>
      </ResizablePanelGroup>,
    );

    const handle = container.querySelector('[data-slot="resizable-handle"]') as HTMLElement;
    expect(handle).not.toBeNull();
    expect(handle.getAttribute("role")).toBe("separator");
    expect(handle).toHaveAttribute("tabindex", "0");
  });

  test("renders a visible grip when withHandle is set", () => {
    const { container } = render(
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanelGroup.Panel defaultSize={50}>Left</ResizablePanelGroup.Panel>
        <ResizablePanelGroup.Handle withHandle />
        <ResizablePanelGroup.Panel defaultSize={50}>Right</ResizablePanelGroup.Panel>
      </ResizablePanelGroup>,
    );

    const handle = container.querySelector('[data-slot="resizable-handle"]') as HTMLElement;
    expect(handle.querySelector(".bg-border")).not.toBeNull();
  });

  test("does not render a grip when withHandle is omitted", () => {
    const { container } = render(
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanelGroup.Panel defaultSize={50}>Left</ResizablePanelGroup.Panel>
        <ResizablePanelGroup.Handle />
        <ResizablePanelGroup.Panel defaultSize={50}>Right</ResizablePanelGroup.Panel>
      </ResizablePanelGroup>,
    );

    const handle = container.querySelector('[data-slot="resizable-handle"]') as HTMLElement;
    expect(handle.querySelector(".bg-border")).toBeNull();
  });

  test("switches to a vertical layout when direction is vertical", () => {
    const { container } = render(
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanelGroup.Panel defaultSize={50}>Top</ResizablePanelGroup.Panel>
        <ResizablePanelGroup.Handle />
        <ResizablePanelGroup.Panel defaultSize={50}>Bottom</ResizablePanelGroup.Panel>
      </ResizablePanelGroup>,
    );

    const group = container.querySelector('[data-slot="resizable-panel-group"]') as HTMLElement;
    expect(group.style.flexDirection).toBe("column");
  });
});
