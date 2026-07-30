/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogContent } from "../../../src/components/dialog/AlertDialogContent";
import { AlertDialogFooter } from "../../../src/components/dialog/AlertDialogFooter";

afterEach(cleanup);

describe("AlertDialogFooter", () => {
  test("renders footer content and merges layout classes", () => {
    render(
      <AlertDialogContent size="sm">
        <AlertDialogFooter className="custom-footer">
          <button type="button">Confirm</button>
        </AlertDialogFooter>
      </AlertDialogContent>,
    );

    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
    expect(document.querySelector('[data-slot="alert-dialog-footer"]')).toHaveClass("custom-footer");
  });
});
