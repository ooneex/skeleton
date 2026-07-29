/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Popover } from "../../../src/components/popover/Popover";

afterEach(cleanup);

const BasicPopover = (props: Partial<React.ComponentProps<typeof Popover>> = {}) => (
  <Popover {...props}>
    <Popover.Trigger>Open</Popover.Trigger>
    <Popover.Content>
      <Popover.Header>
        <Popover.Title>Title</Popover.Title>
        <Popover.Description>Description text</Popover.Description>
      </Popover.Header>
      <div>Popover body</div>
    </Popover.Content>
  </Popover>
);

describe("Popover", () => {
  test("renders the trigger and keeps content closed by default", () => {
    render(<BasicPopover />);

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("opens the content when the trigger is clicked", async () => {
    render(<BasicPopover />);

    fireEvent.click(screen.getByRole("button", { name: "Open" }));

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description text")).toBeInTheDocument();
    expect(screen.getByText("Popover body")).toBeInTheDocument();
  });

  test("toggles closed when the trigger is clicked again", async () => {
    render(<BasicPopover />);

    const trigger = screen.getByRole("button", { name: "Open" });
    fireEvent.click(trigger);
    await screen.findByRole("dialog");

    fireEvent.click(trigger);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("sets aria-expanded and data-popup-open on the trigger while open", async () => {
    render(<BasicPopover />);
    const trigger = screen.getByRole("button", { name: "Open" });

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).not.toHaveAttribute("data-popup-open");

    fireEvent.click(trigger);
    await screen.findByRole("dialog");

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(trigger).toHaveAttribute("data-popup-open", "");
  });

  test("respects a controlled open prop and calls onOpenChange", async () => {
    let openValue: boolean | undefined;
    const onOpenChange = (open: boolean) => {
      openValue = open;
    };

    render(
      <Popover open={true} onOpenChange={onOpenChange}>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>
          <div>Controlled body</div>
        </Popover.Content>
      </Popover>,
    );

    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(openValue).toBe(false);
  });

  test("defaultOpen renders the content open initially", async () => {
    render(
      <Popover defaultOpen>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>
          <div>Default open body</div>
        </Popover.Content>
      </Popover>,
    );

    expect(await screen.findByText("Default open body")).toBeInTheDocument();
  });

  test("closes when Escape is pressed", async () => {
    render(<BasicPopover />);

    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    const dialog = await screen.findByRole("dialog");

    fireEvent.keyDown(dialog, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("renders nothing for Popover.Content when there is no context and closed", () => {
    const { container } = render(
      <Popover.Content>
        <div>Should not render</div>
      </Popover.Content>,
    );
    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByText("Should not render")).not.toBeInTheDocument();
  });
});
