/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { CURRENCIES } from "@talosjs/currencies";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { CurrencySelector } from "../../../src/components/currency/CurrencySelector";

afterEach(cleanup);

describe("CurrencySelector", () => {
  test("renders US dollars by default", () => {
    render(<CurrencySelector />);

    expect(screen.getByRole("combobox", { name: "Currency" })).toHaveTextContent("🇺🇸USD");
  });

  test("respects defaultValue for the initial selection", () => {
    render(<CurrencySelector defaultValue="EUR" />);

    expect(screen.getByRole("combobox", { name: "Currency" })).toHaveTextContent("🇪🇺EUR");
  });

  test("lists every supported currency", async () => {
    const user = userEvent.setup();
    render(<CurrencySelector />);

    await user.click(screen.getByRole("combobox", { name: "Currency" }));

    expect(await screen.findByRole("option", { name: "USD US Dollar" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "EUR Euro" })).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(CURRENCIES.length);
  });

  test("updates an uncontrolled selection and calls onChange", async () => {
    const user = userEvent.setup();
    let selected: string | undefined;
    render(<CurrencySelector onChange={(currency) => (selected = currency)} />);

    await user.click(screen.getByRole("combobox", { name: "Currency" }));
    await user.click(await screen.findByRole("option", { name: "EUR Euro" }));

    expect(selected).toBe("EUR");
    expect(screen.getByRole("combobox", { name: "Currency" })).toHaveTextContent("🇪🇺EUR");
  });

  test("supports a controlled value", () => {
    const { rerender } = render(<CurrencySelector value="GBP" onChange={() => {}} />);
    expect(screen.getByRole("combobox", { name: "Currency" })).toHaveTextContent("🇬🇧GBP");

    rerender(<CurrencySelector value="JPY" onChange={() => {}} />);
    expect(screen.getByRole("combobox", { name: "Currency" })).toHaveTextContent("🇯🇵JPY");
  });

  test("forwards trigger state and styling props", () => {
    render(<CurrencySelector disabled size="lg" className="currency-trigger" />);

    const trigger = screen.getByRole("combobox", { name: "Currency" });
    expect(trigger).toBeDisabled();
    expect(trigger).toHaveAttribute("data-size", "lg");
    expect(trigger).toHaveClass("currency-trigger");
  });
});
