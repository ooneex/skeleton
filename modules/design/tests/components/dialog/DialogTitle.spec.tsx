/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogContent } from "../../../src/components/dialog/DialogContent";
import { DialogTitle } from "../../../src/components/dialog/DialogTitle";

afterEach(cleanup);

describe("DialogTitle", () => {
  test("registers its id with the surrounding dialog", () => {
    render(
      <DialogContent>
        <DialogTitle className="custom-title">Rename</DialogTitle>
      </DialogContent>,
    );

    const title = screen.getByText("Rename");
    const dialog = screen.getByRole("dialog");
    expect(title).toHaveClass("custom-title");
    expect(dialog).toHaveAttribute("aria-labelledby", title.getAttribute("id") ?? "");
  });
});
