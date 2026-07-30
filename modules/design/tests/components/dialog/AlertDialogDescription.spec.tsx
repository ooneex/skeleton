/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogContent } from "../../../src/components/dialog/AlertDialogContent";
import { AlertDialogDescription } from "../../../src/components/dialog/AlertDialogDescription";

afterEach(cleanup);

describe("AlertDialogDescription", () => {
  test("registers its id with the surrounding alert dialog", () => {
    render(
      <AlertDialogContent>
        <AlertDialogDescription className="custom-description">Description</AlertDialogDescription>
      </AlertDialogContent>,
    );

    const description = screen.getByText("Description");
    const dialog = screen.getByRole("alertdialog");
    expect(description).toHaveClass("custom-description");
    expect(dialog).toHaveAttribute("aria-describedby", description.getAttribute("id") ?? "");
  });
});
