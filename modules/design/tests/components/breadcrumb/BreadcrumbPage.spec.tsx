/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BreadcrumbPage } from "../../../src/components/breadcrumb/BreadcrumbPage";

afterEach(cleanup);

describe("BreadcrumbPage", () => {
  test("marks the current page with aria-current", () => {
    render(<BreadcrumbPage>Current</BreadcrumbPage>);

    expect(screen.getByText("Current")).toHaveAttribute("aria-current", "page");
  });

  test("merges a custom className with the base text styles", () => {
    render(<BreadcrumbPage className="custom-page">Current</BreadcrumbPage>);

    const page = screen.getByText("Current");
    expect(page).toHaveClass("custom-page");
    expect(page.className).toContain("text-foreground");
  });
});
