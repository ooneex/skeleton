/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogMedia } from "../../../src/components/dialog/AlertDialogMedia";

afterEach(cleanup);

describe("AlertDialogMedia", () => {
  test("renders media content with its slot styling", () => {
    render(<AlertDialogMedia className="custom-media">!</AlertDialogMedia>);

    expect(screen.getByText("!")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="alert-dialog-media"]')).toHaveClass("custom-media");
  });
});
