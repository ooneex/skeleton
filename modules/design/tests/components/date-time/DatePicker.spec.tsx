/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatePicker, pickDate } from "../../../src/components/date-time/DatePicker";

afterEach(cleanup);

// Fixed reference date so the calendar month is deterministic across runs.
const FIXED_VALUE = new Date(2024, 0, 15); // January 15, 2024

describe("DatePicker", () => {
  test("renders the optional title and a calendar seeded with the given value", async () => {
    render(<DatePicker />);

    await act(async () => {
      pickDate({ value: FIXED_VALUE, title: "Pick a date", calendarProps: { month: FIXED_VALUE } });
    });

    expect(await screen.findByText("Pick a date")).toBeInTheDocument();
    expect(screen.getByText(/January 2024/i)).toBeInTheDocument();
    const selectedCell = screen.getByRole("gridcell", { name: "15" });
    expect(selectedCell).toHaveAttribute("data-selected", "true");
  });

  test("resolves the chosen date when a day is clicked", async () => {
    render(<DatePicker />);

    let resultPromise!: Promise<Date | null>;
    await act(async () => {
      resultPromise = pickDate({ value: FIXED_VALUE, calendarProps: { month: FIXED_VALUE } });
    });

    await screen.findByRole("grid");
    const dayButton = screen.getByRole("gridcell", { name: "22" }).querySelector("button") as HTMLButtonElement;
    fireEvent.click(dayButton);

    const result = await resultPromise;
    expect(result?.getDate()).toBe(22);
  });

  test("resolves null when dismissed without choosing a date", async () => {
    render(<DatePicker />);

    let resultPromise!: Promise<Date | null>;
    await act(async () => {
      resultPromise = pickDate({ calendarProps: { month: FIXED_VALUE } });
    });

    await screen.findByRole("grid");
    fireEvent.keyDown(document, { key: "Escape" });

    expect(await resultPromise).toBeNull();
  });
});
