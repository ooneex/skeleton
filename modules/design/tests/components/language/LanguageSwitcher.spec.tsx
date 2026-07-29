/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { LanguageSwitcher } from "../../../src/components/language/LanguageSwitcher";

afterEach(cleanup);

describe("LanguageSwitcher", () => {
  test("renders the trigger with the default language label", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole("combobox", { name: "Language" })).toHaveTextContent("English");
  });

  test("respects defaultValue for the initial selection", () => {
    render(<LanguageSwitcher defaultValue="fr" />);
    expect(screen.getByRole("combobox", { name: "Language" })).toHaveTextContent("Français");
  });

  test("mirrors the selected language onto <html lang>", () => {
    render(<LanguageSwitcher defaultValue="de" />);
    expect(document.documentElement.lang).toBe("de");
  });

  test("opens the popup listing every supported language", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);
    await user.click(screen.getByRole("combobox", { name: "Language" }));

    expect(await screen.findByRole("option", { name: /English/ })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /Deutsch/ })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /Español/ })).toBeInTheDocument();
  });

  test("calls onChange with the selected language when picking an option", async () => {
    const user = userEvent.setup();
    let selected: string | undefined;
    render(<LanguageSwitcher onChange={(lang) => (selected = lang)} />);

    await user.click(screen.getByRole("combobox", { name: "Language" }));
    await user.click(await screen.findByRole("option", { name: /Deutsch/ }));

    expect(selected).toBe("de");
    expect(screen.getByRole("combobox", { name: "Language" })).toHaveTextContent("Deutsch");
  });

  test("is disabled when the disabled prop is set", () => {
    render(<LanguageSwitcher disabled />);
    expect(screen.getByRole("combobox", { name: "Language" })).toBeDisabled();
  });

  test("supports a controlled value", () => {
    const { rerender } = render(<LanguageSwitcher value="es" onChange={() => {}} />);
    expect(screen.getByRole("combobox", { name: "Language" })).toHaveTextContent("Español");

    rerender(<LanguageSwitcher value="ro" onChange={() => {}} />);
    expect(screen.getByRole("combobox", { name: "Language" })).toHaveTextContent("Română");
  });
});
