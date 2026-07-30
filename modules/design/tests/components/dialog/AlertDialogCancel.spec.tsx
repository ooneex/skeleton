/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogCancel } from "../../../src/components/dialog/AlertDialogCancel";
import { DialogContext } from "../../../src/components/dialog/DialogContext";

afterEach(cleanup);

describe("AlertDialogCancel", () => {
  test("uses outline/sm defaults and dismisses through dialog context", () => {
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
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </DialogContext.Provider>,
    );

    const button = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(button);

    expect(dismissed).toBe(true);
    expect(button.className).toContain("ring-1");
    expect(button.className).toContain("h-8");
  });
});
