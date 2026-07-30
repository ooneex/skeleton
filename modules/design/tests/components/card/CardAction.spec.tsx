/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardAction } from "../../../src/components/card/CardAction";

afterEach(cleanup);

describe("CardAction", () => {
  test("renders action content in its slot container", () => {
    render(<CardAction>Edit</CardAction>);

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-action"]')).toBeInTheDocument();
  });

  test("merges a custom className with the alignment styles", () => {
    render(<CardAction className="custom-action">Edit</CardAction>);

    const action = document.querySelector('[data-slot="card-action"]');
    expect(action).toHaveClass("custom-action");
    expect(action?.className).toContain("justify-self-end");
  });
});
