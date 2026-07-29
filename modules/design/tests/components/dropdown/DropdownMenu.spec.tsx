/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DropdownMenu } from "../../../src/components/dropdown/DropdownMenu";

afterEach(cleanup);

const BasicMenu = (props: Partial<React.ComponentProps<typeof DropdownMenu>> = {}) => (
  <DropdownMenu {...props}>
    <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Label>Actions</DropdownMenu.Label>
      <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
      <DropdownMenu.Item disabled>Disabled item</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>
        <DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu>
);

describe("DropdownMenu", () => {
  test("renders the trigger and keeps the menu closed by default", () => {
    render(<BasicMenu />);
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  test("opens the menu when the trigger is clicked", async () => {
    render(<BasicMenu />);
    fireEvent.click(screen.getByRole("button", { name: "Open" }));

    const menu = await screen.findByRole("menu");
    expect(menu).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  test("toggles closed when the trigger is clicked again", async () => {
    render(<BasicMenu />);
    const trigger = screen.getByRole("button", { name: "Open" });
    fireEvent.click(trigger);
    await screen.findByRole("menu");

    fireEvent.click(trigger);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  test("sets aria-expanded and data-popup-open on the trigger while open", async () => {
    render(<BasicMenu />);
    const trigger = screen.getByRole("button", { name: "Open" });

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).not.toHaveAttribute("data-popup-open");

    fireEvent.click(trigger);
    await screen.findByRole("menu");

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(trigger).toHaveAttribute("data-popup-open", "");
  });

  test("ArrowDown while closed opens the menu", async () => {
    render(<BasicMenu />);
    const trigger = screen.getByRole("button", { name: "Open" });
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(await screen.findByRole("menu")).toBeInTheDocument();
  });

  test("clicking an item calls its onClick handler and closes the menu (closeOnClick default true)", async () => {
    let clicked = false;
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item onClick={() => (clicked = true)}>Edit</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    await screen.findByRole("menu");

    fireEvent.click(screen.getByText("Edit"));

    expect(clicked).toBe(true);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  test("clicking a disabled item does not invoke its onClick nor close the menu", async () => {
    let clicked = false;
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item disabled onClick={() => (clicked = true)}>
            Disabled
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    await screen.findByRole("menu");

    fireEvent.click(screen.getByText("Disabled"));

    expect(clicked).toBe(false);
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  test("respects a controlled open prop and calls onOpenChange", async () => {
    let openValue: boolean | undefined;
    render(
      <DropdownMenu open={true} onOpenChange={(open) => (openValue = open)}>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );

    expect(await screen.findByRole("menu")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(openValue).toBe(false);
  });

  test("defaultOpen renders the menu open initially", async () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    expect(await screen.findByText("Item")).toBeInTheDocument();
  });

  test("closes when Escape is pressed", async () => {
    render(<BasicMenu />);
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    const menu = await screen.findByRole("menu");

    fireEvent.keyDown(menu, { key: "Escape" });
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  test("Tab closes the whole menu", async () => {
    render(<BasicMenu />);
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    const menu = await screen.findByRole("menu");

    fireEvent.keyDown(menu, { key: "Tab" });
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});

describe("DropdownMenu.CheckboxItem", () => {
  test("toggles its checked state on click, uncontrolled, and stays open by default", async () => {
    let checked: boolean | undefined;
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.CheckboxItem onCheckedChange={(value) => (checked = value)}>Bold</DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    const item = await screen.findByRole("menuitemcheckbox", { name: "Bold" });
    expect(item).toHaveAttribute("aria-checked", "false");

    fireEvent.click(item);

    expect(checked).toBe(true);
    expect(item).toHaveAttribute("aria-checked", "true");
    // Menu stays open: closeOnClick defaults to false for checkbox items.
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  test("supports a controlled checked value", async () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.CheckboxItem checked={true}>Bold</DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    const item = await screen.findByRole("menuitemcheckbox", { name: "Bold" });
    expect(item).toHaveAttribute("aria-checked", "true");
  });

  test("does not toggle when disabled", async () => {
    let called = false;
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.CheckboxItem disabled onCheckedChange={() => (called = true)}>
            Bold
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    const item = await screen.findByRole("menuitemcheckbox", { name: "Bold" });
    fireEvent.click(item);
    expect(called).toBe(false);
    expect(item).toHaveAttribute("aria-checked", "false");
  });
});

describe("DropdownMenu.RadioGroup / RadioItem", () => {
  test("selecting a radio item calls onValueChange with its value", async () => {
    let value: string | undefined;
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.RadioGroup value="a" onValueChange={(v) => (value = v)}>
            <DropdownMenu.RadioItem value="a">A</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="b">B</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    const optionA = await screen.findByRole("menuitemradio", { name: "A" });
    const optionB = screen.getByRole("menuitemradio", { name: "B" });
    expect(optionA).toHaveAttribute("aria-checked", "true");
    expect(optionB).toHaveAttribute("aria-checked", "false");

    fireEvent.click(optionB);
    expect(value).toBe("b");
  });
});

describe("DropdownMenu.Sub", () => {
  const NestedMenu = () => (
    <DropdownMenu defaultOpen>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Top level</DropdownMenu.Item>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>More tools</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Nested item</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
      </DropdownMenu.Content>
    </DropdownMenu>
  );

  test("the submenu is closed until its trigger is clicked", async () => {
    render(<NestedMenu />);
    await screen.findByText("More tools");
    expect(screen.queryByText("Nested item")).not.toBeInTheDocument();
  });

  test("clicking the sub trigger opens the submenu", async () => {
    render(<NestedMenu />);
    const subTrigger = await screen.findByText("More tools");
    fireEvent.click(subTrigger);

    expect(await screen.findByText("Nested item")).toBeInTheDocument();
    expect(subTrigger).toHaveAttribute("aria-expanded", "true");
  });

  test("ArrowRight on the sub trigger opens the submenu", async () => {
    render(<NestedMenu />);
    const subTrigger = await screen.findByText("More tools");
    fireEvent.keyDown(subTrigger, { key: "ArrowRight" });

    expect(await screen.findByText("Nested item")).toBeInTheDocument();
  });
});

describe("DropdownMenu.Shortcut", () => {
  test("renders its children", async () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            Save
            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    expect(await screen.findByText("⌘S")).toBeInTheDocument();
  });
});
