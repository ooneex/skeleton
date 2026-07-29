/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Calendar } from "../../../src/components/calendar/Calendar";

afterEach(cleanup);

// Full month rendering relies on react-day-picker's own date-math and DOM grid
// generation which happy-dom supports well; the tests below assert the real
// rendered structure rather than only "renders without crashing".
describe("Calendar", () => {
  const fixedMonth = new Date(2024, 0, 1); // January 2024

  test("renders a grid of days for the given month", () => {
    render(<Calendar mode="single" month={fixedMonth} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
    // January 2024 has 31 days
    expect(screen.getByRole("gridcell", { name: "15" })).toBeInTheDocument();
  });

  test("renders the month/year caption label", () => {
    render(<Calendar mode="single" month={fixedMonth} />);
    expect(screen.getByText(/January 2024/i)).toBeInTheDocument();
  });

  test("clicking a day selects it and calls onSelect", () => {
    let selected: Date | undefined;
    render(
      <Calendar
        mode="single"
        month={fixedMonth}
        onSelect={(date) => {
          selected = date;
        }}
      />,
    );

    const dayButton = screen.getByRole("gridcell", { name: "15" }).querySelector("button");
    expect(dayButton).not.toBeNull();
    fireEvent.click(dayButton as HTMLButtonElement);

    expect(selected?.getDate()).toBe(15);
  });

  test("clicking the previous/next navigation changes the visible month", () => {
    render(<Calendar mode="single" defaultMonth={fixedMonth} />);
    expect(screen.getByText(/January 2024/i)).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /go to the next month/i });
    fireEvent.click(nextButton);

    expect(screen.getByText(/February 2024/i)).toBeInTheDocument();
  });

  test("applies fullWidth layout classes when fullWidth is set", () => {
    render(<Calendar mode="single" month={fixedMonth} fullWidth />);
    const grid = screen.getByRole("grid");
    expect(grid.className).toContain("w-full");
  });

  test("merges a custom className onto the root without dropping defaults", () => {
    render(<Calendar mode="single" month={fixedMonth} className="my-calendar" />);
    const grid = screen.getByRole("grid");
    const root = grid.closest(".my-calendar");
    expect(root).toBeInTheDocument();
  });
});
