/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogContent } from "../../../src/components/dialog/AlertDialogContent";
import { AlertDialogHeader } from "../../../src/components/dialog/AlertDialogHeader";
import { AlertDialogMedia } from "../../../src/components/dialog/AlertDialogMedia";

afterEach(cleanup);

describe("AlertDialogHeader", () => {
  test("renders header content and adapts layout when media is present", () => {
    render(
      <AlertDialogContent>
        <AlertDialogHeader className="custom-header">
          <AlertDialogMedia>!</AlertDialogMedia>
          <div>Title</div>
        </AlertDialogHeader>
      </AlertDialogContent>,
    );

    expect(screen.getByText("!")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="alert-dialog-header"]')).toHaveClass("custom-header");
  });
});
