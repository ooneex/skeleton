/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Select } from "../../../src/components/select";
import { ThemeSwitcherOption } from "../../../src/components/theme/ThemeSwitcherOption";

afterEach(cleanup);

const renderOptions = () =>
  render(
    <Select defaultValue="system">
      <Select.Trigger aria-label="Theme">Theme</Select.Trigger>
      <Select.Content>
        <ThemeSwitcherOption value="system" />
        <ThemeSwitcherOption value="light" />
        <ThemeSwitcherOption value="dark" />
      </Select.Content>
    </Select>,
  );

describe("ThemeSwitcherOption", () => {
  test("renders the label with no scheme suffix for the system theme", async () => {
    const user = userEvent.setup();
    renderOptions();
    await user.click(screen.getByRole("combobox", { name: "Theme" }));

    const option = await screen.findByRole("option", { name: "System" });
    expect(option).toHaveTextContent("System");
    expect(option).not.toHaveTextContent("(Light)");
    expect(option).not.toHaveTextContent("(Dark)");
  });

  test("appends the (Light) suffix for the light theme", async () => {
    const user = userEvent.setup();
    renderOptions();
    await user.click(screen.getByRole("combobox", { name: "Theme" }));

    expect(await screen.findByRole("option", { name: /Light \(Light\)/ })).toBeInTheDocument();
  });

  test("appends the (Dark) suffix for the dark theme", async () => {
    const user = userEvent.setup();
    renderOptions();
    await user.click(screen.getByRole("combobox", { name: "Theme" }));

    expect(await screen.findByRole("option", { name: /Dark \(Dark\)/ })).toBeInTheDocument();
  });

  test("supports custom children instead of the default icon/label", async () => {
    const user = userEvent.setup();
    render(
      <Select defaultValue="system">
        <Select.Trigger aria-label="Theme">Theme</Select.Trigger>
        <Select.Content>
          <ThemeSwitcherOption value="system">Custom label</ThemeSwitcherOption>
        </Select.Content>
      </Select>,
    );
    await user.click(screen.getByRole("combobox", { name: "Theme" }));

    expect(await screen.findByRole("option", { name: "Custom label" })).toBeInTheDocument();
  });
});
