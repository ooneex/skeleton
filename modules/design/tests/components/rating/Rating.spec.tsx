/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Rating } from "../../../src/components/rating/Rating";

afterEach(cleanup);

describe("Rating", () => {
  test("renders 5 radio items by default (star variant)", () => {
    render(<Rating value={0} />);
    expect(screen.getAllByRole("radio")).toHaveLength(5);
  });

  test("renders the requested count of items", () => {
    render(<Rating value={0} count={3} />);
    expect(screen.getAllByRole("radio")).toHaveLength(3);
  });

  test("marks the star matching the current value as checked", () => {
    render(<Rating value={3} />);
    expect(screen.getByRole("radio", { name: "3" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("radio", { name: "2" })).toHaveAttribute("aria-checked", "false");
    expect(screen.getByRole("radio", { name: "4" })).toHaveAttribute("aria-checked", "false");
  });

  test("value 0 leaves every star unchecked (minimum boundary)", () => {
    render(<Rating value={0} />);
    for (const radio of screen.getAllByRole("radio")) {
      expect(radio).toHaveAttribute("aria-checked", "false");
    }
  });

  test("value equal to count checks the last star (maximum boundary)", () => {
    render(<Rating value={5} count={5} />);
    expect(screen.getByRole("radio", { name: "5" })).toHaveAttribute("aria-checked", "true");
  });

  test("clicking a star calls onValueChange with the selected value", () => {
    let selected: number | undefined;
    render(<Rating value={0} onValueChange={(value) => (selected = value)} />);

    fireEvent.click(screen.getByRole("radio", { name: "4" }));

    expect(selected).toBe(4);
  });

  test("readOnly blocks interaction", () => {
    let called = false;
    render(<Rating value={2} readOnly onValueChange={() => (called = true)} />);

    fireEvent.click(screen.getByRole("radio", { name: "4" }));

    expect(called).toBe(false);
  });

  test("disabled blocks interaction and disables each item", () => {
    let called = false;
    render(<Rating value={2} disabled onValueChange={() => (called = true)} />);

    for (const radio of screen.getAllByRole("radio")) {
      expect(radio).toBeDisabled();
    }

    fireEvent.click(screen.getByRole("radio", { name: "4" }));
    expect(called).toBe(false);
  });

  test("text variant renders numeric labels by default", () => {
    render(<Rating value={0} variant="text" count={3} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("text variant renders custom labels when provided", () => {
    render(<Rating value={0} variant="text" labels={["Bad", "Ok", "Great"]} />);
    expect(screen.getByText("Bad")).toBeInTheDocument();
    expect(screen.getByText("Ok")).toBeInTheDocument();
    expect(screen.getByText("Great")).toBeInTheDocument();
  });

  test("emoji variant renders the default emoji set", () => {
    render(<Rating value={0} variant="emoji" />);
    expect(screen.getByText("😡")).toBeInTheDocument();
    expect(screen.getByText("😍")).toBeInTheDocument();
  });

  test("emoji variant renders custom emojis when provided", () => {
    render(<Rating value={0} variant="emoji" emojis={["🙁", "🙂"]} />);
    expect(screen.getByText("🙁")).toBeInTheDocument();
    expect(screen.getByText("🙂")).toBeInTheDocument();
  });

  test("gradient variant renders a single slider instead of radios", () => {
    render(<Rating value={2} variant="gradient" count={5} />);
    const slider = screen.getByRole("slider", { name: "Gradient rating" });
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "5");
    expect(slider).toHaveAttribute("aria-valuenow", "2");
    expect(screen.queryAllByRole("radio")).toHaveLength(0);
  });

  test("gradient variant updates the value with arrow keys", () => {
    let selected: number | undefined;
    render(<Rating value={2} variant="gradient" count={5} onValueChange={(value) => (selected = value)} />);

    fireEvent.keyDown(screen.getByRole("slider", { name: "Gradient rating" }), { key: "ArrowUp" });

    expect(selected).toBe(3);
  });

  test("gradient variant ignores arrow keys when readOnly", () => {
    let called = false;
    render(<Rating value={2} variant="gradient" readOnly onValueChange={() => (called = true)} />);

    fireEvent.keyDown(screen.getByRole("slider", { name: "Gradient rating" }), { key: "ArrowUp" });

    expect(called).toBe(false);
  });
});
