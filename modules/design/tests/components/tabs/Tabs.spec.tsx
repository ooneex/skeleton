/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tabs } from "../../../src/components/tabs/Tabs";
import { tabsListVariants } from "../../../src/components/tabs/TabsList";

afterEach(cleanup);

const ComposedTabs = ({ defaultValue = "a" }: { defaultValue?: string }) => (
  <Tabs defaultValue={defaultValue}>
    <Tabs.List>
      <Tabs.Trigger value="a">Tab A</Tabs.Trigger>
      <Tabs.Trigger value="b">Tab B</Tabs.Trigger>
      <Tabs.Trigger value="c" disabled>
        Tab C
      </Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content value="a">Panel A</Tabs.Content>
    <Tabs.Content value="b">Panel B</Tabs.Content>
    <Tabs.Content value="c">Panel C</Tabs.Content>
  </Tabs>
);

describe("Tabs", () => {
  test("renders the tab list and only the active panel's content is selected", () => {
    render(<ComposedTabs />);
    expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute("aria-selected", "false");
  });

  test("switching tabs via click updates the selected tab and visible panel", () => {
    render(<ComposedTabs />);
    const tabA = screen.getByRole("tab", { name: "Tab A" });
    const tabB = screen.getByRole("tab", { name: "Tab B" });

    fireEvent.click(tabB);

    expect(tabB).toHaveAttribute("aria-selected", "true");
    expect(tabA).toHaveAttribute("aria-selected", "false");
    expect(screen.getByText("Panel B")).toBeInTheDocument();
  });

  test("keyboard arrow navigation moves focus between tabs", async () => {
    render(<ComposedTabs />);
    const tabA = screen.getByRole("tab", { name: "Tab A" });
    const tabB = screen.getByRole("tab", { name: "Tab B" });

    await act(async () => {
      tabA.focus();
      fireEvent.keyDown(tabA, { key: "ArrowRight" });
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    expect(tabB).toHaveFocus();
  });

  test("disabled tabs cannot be activated", () => {
    render(<ComposedTabs />);
    const tabC = screen.getByRole("tab", { name: "Tab C" });

    expect(tabC).toHaveAttribute("aria-disabled", "true");
    fireEvent.click(tabC);
    expect(tabC).toHaveAttribute("aria-selected", "false");
    expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("aria-selected", "true");
  });

  test("respects a non-default initial active tab", () => {
    render(<ComposedTabs defaultValue="b" />);
    expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Panel B")).toBeInTheDocument();
  });

  test("root sets data-orientation defaulting to horizontal", () => {
    const { container } = render(<ComposedTabs />);
    expect(container.querySelector('[data-slot="tabs"]')).toHaveAttribute("data-orientation", "horizontal");
  });

  test("tabsListVariants exposes the expected variant/size classes", () => {
    expect(tabsListVariants({ variant: "line" })).toContain("rounded-none");
    expect(tabsListVariants({ size: "lg" })).toContain("h-10");
  });
});
