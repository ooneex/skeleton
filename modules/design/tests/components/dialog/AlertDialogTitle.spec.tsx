/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogContent } from "../../../src/components/dialog/AlertDialogContent";
import { AlertDialogTitle } from "../../../src/components/dialog/AlertDialogTitle";

afterEach(cleanup);

describe("AlertDialogTitle", () => {
  test("registers its id with the surrounding alert dialog", () => {
    render(
      <AlertDialogContent>
        <AlertDialogTitle className="custom-title">Delete item</AlertDialogTitle>
      </AlertDialogContent>,
    );

    const title = screen.getByText("Delete item");
    const dialog = screen.getByRole("alertdialog");
    expect(title).toHaveClass("custom-title");
    expect(dialog).toHaveAttribute("aria-labelledby", title.getAttribute("id") ?? "");
  });
});
