/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { pickColor, SimpleColorPicker } from "../../../src/components/color/SimpleColorPicker";

afterEach(cleanup);

describe("SimpleColorPicker", () => {
  test("resolves with the clicked color", async () => {
    render(<SimpleColorPicker />);

    const promise = pickColor({ title: "Pick a color" });

    const swatch = await screen.findByTitle("Blue");
    swatch.click();

    await expect(promise).resolves.toBe("#3B82F6");
  });

  test("resolves with null when Reset is pressed", async () => {
    render(<SimpleColorPicker />);

    const promise = pickColor({ value: "#3B82F6" });

    const resetButton = await screen.findByRole("button", { name: /reset/i });
    resetButton.click();

    await expect(promise).resolves.toBeNull();
  });

  test("renders the provided title in the dialog header", async () => {
    render(<SimpleColorPicker />);

    pickColor({ title: "Choose brand color" });

    expect(await screen.findByText("Choose brand color")).toBeInTheDocument();
  });

  test("restricts the palette to the provided colors list", async () => {
    render(<SimpleColorPicker />);

    pickColor({ colors: ["#3B82F6", "#10B981"] });

    await screen.findByTitle("Blue");
    expect(screen.getByTitle("Green")).toBeInTheDocument();
    expect(screen.queryByTitle("Amber")).not.toBeInTheDocument();
  });
});
