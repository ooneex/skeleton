/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { pickTime, TimePicker } from "../../../src/components/date-time/TimePicker";

afterEach(cleanup);

describe("TimePicker", () => {
  test("renders the title, seeded hour/minute selects and confirm button", async () => {
    render(<TimePicker />);

    await act(async () => {
      pickTime({ value: "09:30", title: "Pick a time" });
    });

    expect(await screen.findByText("Pick a time")).toBeInTheDocument();
    expect(screen.getByText("09")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Done" })).toBeInTheDocument();
  });

  test("resolves the selected HH:MM string when confirmed", async () => {
    render(<TimePicker />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = pickTime({ value: "09:30" });
    });

    await screen.findByRole("button", { name: "Done" });
    fireEvent.click(screen.getByRole("button", { name: "Done" }));

    expect(await resultPromise).toBe("09:30");
  });

  test("uses a custom confirmLabel when provided", async () => {
    render(<TimePicker />);

    await act(async () => {
      pickTime({ value: "10:00", confirmLabel: "Set reminder" });
    });

    expect(await screen.findByRole("button", { name: "Set reminder" })).toBeInTheDocument();
  });

  test("restricts hour options to those at or after minTime", async () => {
    render(<TimePicker />);

    await act(async () => {
      pickTime({ value: "10:00", minTime: "09:00" });
    });

    const hourTrigger = (await screen.findAllByRole("combobox"))[0] as HTMLElement;
    fireEvent.click(hourTrigger);

    expect(await screen.findByRole("option", { name: "09" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "08" })).not.toBeInTheDocument();
  });

  test("resolves null when dismissed via Escape", async () => {
    render(<TimePicker />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = pickTime();
    });

    await screen.findByRole("button", { name: "Done" });
    fireEvent.keyDown(document, { key: "Escape" });

    expect(await resultPromise).toBeNull();
  });
});
