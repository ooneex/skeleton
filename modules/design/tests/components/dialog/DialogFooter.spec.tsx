/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogContext } from "../../../src/components/dialog/DialogContext";
import { DialogFooter } from "../../../src/components/dialog/DialogFooter";

afterEach(cleanup);

describe("DialogFooter", () => {
  test("renders children and optional close button that dismisses via context", () => {
    let dismissed = false;
    render(
      <DialogContext.Provider
        value={{
          open: true,
          dismiss: () => {
            dismissed = true;
          },
          titleId: "title",
          descriptionId: "description",
          setHasTitle: () => {},
          setHasDescription: () => {},
        }}
      >
        <DialogFooter showCloseButton className="custom-footer">
          <button type="button">Save</button>
        </DialogFooter>
      </DialogContext.Provider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(dismissed).toBe(true);
    expect(document.querySelector('[data-slot="dialog-footer"]')).toHaveClass("custom-footer");
  });
});
