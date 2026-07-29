/// <reference lib="dom" />

import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeSwitcher } from "../../../src/components/theme/ThemeSwitcher";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});

describe("ThemeSwitcher", () => {
  test("renders the trigger with the default (system) theme label", () => {
    render(<ThemeSwitcher />);
    expect(screen.getByRole("combobox", { name: "Theme" })).toHaveTextContent("System");
  });

  test("respects defaultValue for the initial selection", () => {
    render(<ThemeSwitcher defaultValue="dark" />);
    expect(screen.getByRole("combobox", { name: "Theme" })).toHaveTextContent("Dark");
  });

  test("mirrors the selected theme onto <html data-theme>", () => {
    render(<ThemeSwitcher defaultValue="light" />);
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  test("opens the popup listing every supported theme", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);
    await user.click(screen.getByRole("combobox", { name: "Theme" }));

    expect(await screen.findByRole("option", { name: /System/ })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /Light/ })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /Dark/ })).toBeInTheDocument();
  });

  test("calls onChange with the selected theme when picking an option", async () => {
    const user = userEvent.setup();
    let selected: string | undefined;
    render(<ThemeSwitcher onChange={(theme) => (selected = theme)} />);

    await user.click(screen.getByRole("combobox", { name: "Theme" }));
    await user.click(await screen.findByRole("option", { name: /Dark/ }));

    expect(selected).toBe("dark");
    expect(screen.getByRole("combobox", { name: "Theme" })).toHaveTextContent("Dark");
  });

  test("persists the selection to localStorage and restores it on next mount", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<ThemeSwitcher />);

    await user.click(screen.getByRole("combobox", { name: "Theme" }));
    await user.click(await screen.findByRole("option", { name: /Dark/ }));
    expect(window.localStorage.getItem("theme")).toBe("dark");

    unmount();
    render(<ThemeSwitcher />);
    expect(screen.getByRole("combobox", { name: "Theme" })).toHaveTextContent("Dark");
  });

  test("is disabled when the disabled prop is set", () => {
    render(<ThemeSwitcher disabled />);
    expect(screen.getByRole("combobox", { name: "Theme" })).toBeDisabled();
  });

  test("supports a controlled value", () => {
    const { rerender } = render(<ThemeSwitcher value="light" onChange={() => {}} />);
    expect(screen.getByRole("combobox", { name: "Theme" })).toHaveTextContent("Light");

    rerender(<ThemeSwitcher value="dark" onChange={() => {}} />);
    expect(screen.getByRole("combobox", { name: "Theme" })).toHaveTextContent("Dark");
  });
});
