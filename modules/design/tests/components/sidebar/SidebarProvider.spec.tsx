/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "../../../src/components/sidebar/Sidebar";
import { useSidebar } from "../../../src/components/sidebar/useSidebar";

afterEach(cleanup);

const StateReader = () => {
  const { state, open, isMobile } = useSidebar();
  return <div data-testid="reader" data-state={state} data-open={String(open)} data-mobile={String(isMobile)} />;
};

describe("useSidebar", () => {
  test("throws when used outside a SidebarProvider", () => {
    expect(() => render(<StateReader />)).toThrow("useSidebar must be used within a SidebarProvider.");
  });

  test("exposes expanded/open state by default inside a provider", () => {
    render(
      <Sidebar.Provider>
        <StateReader />
      </Sidebar.Provider>,
    );
    const reader = screen.getByTestId("reader");
    expect(reader).toHaveAttribute("data-state", "expanded");
    expect(reader).toHaveAttribute("data-open", "true");
    expect(reader).toHaveAttribute("data-mobile", "false");
  });

  test("respects defaultOpen={false}", () => {
    render(
      <Sidebar.Provider defaultOpen={false}>
        <StateReader />
      </Sidebar.Provider>,
    );
    const reader = screen.getByTestId("reader");
    expect(reader).toHaveAttribute("data-state", "collapsed");
    expect(reader).toHaveAttribute("data-open", "false");
  });
});

describe("SidebarProvider + SidebarTrigger", () => {
  test("clicking the trigger toggles the sidebar open state", () => {
    render(
      <Sidebar.Provider>
        <Sidebar.Trigger />
        <StateReader />
      </Sidebar.Provider>,
    );

    const trigger = screen.getByRole("button", { name: "Toggle Sidebar" });
    const reader = screen.getByTestId("reader");
    expect(reader).toHaveAttribute("data-state", "expanded");

    fireEvent.click(trigger);
    expect(reader).toHaveAttribute("data-state", "collapsed");
    expect(reader).toHaveAttribute("data-open", "false");

    fireEvent.click(trigger);
    expect(reader).toHaveAttribute("data-state", "expanded");
    expect(reader).toHaveAttribute("data-open", "true");
  });

  test("custom onClick handlers on the trigger still run alongside the toggle", () => {
    let clicked = false;
    render(
      <Sidebar.Provider>
        <Sidebar.Trigger onClick={() => (clicked = true)} />
        <StateReader />
      </Sidebar.Provider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Toggle Sidebar" }));
    expect(clicked).toBe(true);
    expect(screen.getByTestId("reader")).toHaveAttribute("data-state", "collapsed");
  });

  test("is a controlled component when open/onOpenChange are provided", () => {
    let controlledOpen = true;
    const onOpenChange = (value: boolean) => {
      controlledOpen = value;
    };

    const { rerender } = render(
      <Sidebar.Provider open={controlledOpen} onOpenChange={onOpenChange}>
        <Sidebar.Trigger />
        <StateReader />
      </Sidebar.Provider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle Sidebar" }));
    expect(controlledOpen).toBe(false);
    // The internal state does not change on its own since `open` is controlled by the caller.
    expect(screen.getByTestId("reader")).toHaveAttribute("data-state", "expanded");

    rerender(
      <Sidebar.Provider open={controlledOpen} onOpenChange={onOpenChange}>
        <Sidebar.Trigger />
        <StateReader />
      </Sidebar.Provider>,
    );
    expect(screen.getByTestId("reader")).toHaveAttribute("data-state", "collapsed");
  });
});

describe("SidebarRail", () => {
  test("clicking the rail toggles the sidebar", () => {
    render(
      <Sidebar.Provider>
        <Sidebar>
          <Sidebar.Rail />
        </Sidebar>
        <StateReader />
      </Sidebar.Provider>,
    );

    const rail = screen.getByTitle("Toggle Sidebar");
    fireEvent.click(rail);
    expect(screen.getByTestId("reader")).toHaveAttribute("data-state", "collapsed");
  });
});

describe("Sidebar root", () => {
  test("renders the desktop layout with side/variant/collapsible data attributes", () => {
    const { container } = render(
      <Sidebar.Provider>
        <Sidebar side="right" variant="floating" collapsible="icon">
          <Sidebar.Content>content</Sidebar.Content>
        </Sidebar>
      </Sidebar.Provider>,
    );
    const root = container.querySelector('[data-slot="sidebar"]');
    expect(root).toHaveAttribute("data-side", "right");
    expect(root).toHaveAttribute("data-variant", "floating");
    expect(root).toHaveAttribute("data-state", "expanded");
  });

  test("collapsible='none' renders a static, always-visible sidebar", () => {
    const { container } = render(
      <Sidebar.Provider>
        <Sidebar collapsible="none">
          <Sidebar.Content>static content</Sidebar.Content>
        </Sidebar>
      </Sidebar.Provider>,
    );
    expect(screen.getByText("static content")).toBeInTheDocument();
    expect(container.querySelector('[data-slot="sidebar"]')).not.toHaveAttribute("data-collapsible");
  });
});
