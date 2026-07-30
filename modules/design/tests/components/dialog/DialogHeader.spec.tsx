/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogHeader } from "../../../src/components/dialog/DialogHeader";

afterEach(cleanup);

describe("DialogHeader", () => {
  test("renders header content with layout classes", () => {
    render(<DialogHeader className="custom-header">Title</DialogHeader>);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dialog-header"]')).toHaveClass("custom-header");
  });
});
