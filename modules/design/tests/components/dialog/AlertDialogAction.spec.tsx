/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogAction } from "../../../src/components/dialog/AlertDialogAction";

afterEach(cleanup);

describe("AlertDialogAction", () => {
  test("renders a button and merges custom classes", () => {
    render(<AlertDialogAction className="custom-action">Confirm</AlertDialogAction>);

    const button = screen.getByRole("button", { name: "Confirm" });
    expect(button).toHaveAttribute("data-slot", "alert-dialog-action");
    expect(button).toHaveClass("custom-action");
  });
});
