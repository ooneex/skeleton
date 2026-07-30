/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BreadcrumbLink } from "../../../src/components/breadcrumb/BreadcrumbLink";

afterEach(cleanup);

describe("BreadcrumbLink", () => {
  test("renders an anchor element with its href", () => {
    render(<BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>);

    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute("href", "/dashboard");
  });

  test("merges a custom className with the default hover styles", () => {
    render(
      <BreadcrumbLink href="/dashboard" className="custom-link">
        Dashboard
      </BreadcrumbLink>,
    );

    const link = screen.getByRole("link", { name: "Dashboard" });
    expect(link).toHaveClass("custom-link");
    expect(link.className).toContain("hover:text-foreground");
  });
});
