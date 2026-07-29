/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Tooltip } from "../../../src/components/tooltip/Tooltip";

afterEach(cleanup);

describe("Tooltip", () => {
  test("shows content on hover and hides again on pointer leave", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip delay={0}>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tooltip text</Tooltip.Content>
      </Tooltip>,
    );

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);

    const content = await screen.findByRole("tooltip", {}, { timeout: 2000 });
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("Tooltip text");

    // rendered via portal directly under body
    expect(document.body.contains(content)).toBe(true);

    await user.unhover(trigger);
    await waitFor(() => expect(screen.queryByRole("tooltip")).not.toBeInTheDocument());
  });

  test("shows content on focus", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip delay={0}>
        <Tooltip.Trigger render={<button type="button" />}>Focus me</Tooltip.Trigger>
        <Tooltip.Content>Focused tooltip</Tooltip.Content>
      </Tooltip>,
    );

    await user.tab();
    const content = await screen.findByRole("tooltip", {}, { timeout: 2000 });
    expect(content).toHaveTextContent("Focused tooltip");
  });

  test("supports controlled open state via open/onOpenChange", async () => {
    const onOpenChange = () => {};
    render(
      <Tooltip open={true} onOpenChange={onOpenChange}>
        <Tooltip.Trigger>Trigger</Tooltip.Trigger>
        <Tooltip.Content>Always open</Tooltip.Content>
      </Tooltip>,
    );

    expect(await screen.findByRole("tooltip")).toHaveTextContent("Always open");
  });

  test("does not render content when closed by default", () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>Trigger</Tooltip.Trigger>
        <Tooltip.Content>Hidden</Tooltip.Content>
      </Tooltip>,
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
