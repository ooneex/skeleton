/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogContent } from "../../../src/components/dialog/DialogContent";
import { DialogDescription } from "../../../src/components/dialog/DialogDescription";

afterEach(cleanup);

describe("DialogDescription", () => {
  test("registers its id with the surrounding dialog", () => {
    render(
      <DialogContent>
        <DialogDescription className="custom-description">Details</DialogDescription>
      </DialogContent>,
    );

    const description = screen.getByText("Details");
    const dialog = screen.getByRole("dialog");
    expect(description).toHaveClass("custom-description");
    expect(dialog).toHaveAttribute("aria-describedby", description.getAttribute("id") ?? "");
  });
});
