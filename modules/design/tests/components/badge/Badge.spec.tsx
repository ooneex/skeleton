/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Badge } from "../../../src/components/badge/Badge";

afterEach(cleanup);

describe("Badge", () => {
  test("renders children as text content", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  test("renders a <span> by default", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New").tagName).toBe("SPAN");
  });

  test("applies default variant and size classes", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge.className).toContain("bg-primary/5");
    expect(badge.className).toContain("text-2xs");
  });

  test.each([
    ["default", "bg-primary/5"],
    ["secondary", "bg-secondary/15"],
    ["destructive", "bg-destructive/10"],
    ["outline", "bg-foreground/10"],
    ["ghost", "bg-muted/10"],
    ["link", "bg-primary/10"],
    ["success", "bg-success-100"],
    ["danger", "bg-danger-100"],
    ["warning", "bg-warning-100"],
    ["info", "bg-info-100"],
    ["neutral", "bg-neutral-100"],
  ] as const)("applies %s variant class", (variant, expectedClass) => {
    render(<Badge variant={variant}>Label</Badge>);
    expect(screen.getByText("Label").className).toContain(expectedClass);
  });

  test.each([
    ["xs", "text-2xs"],
    ["sm", "text-xs"],
    ["md", "text-sm"],
    ["lg", "text-base"],
  ] as const)("applies %s size class", (size, expectedClass) => {
    render(<Badge size={size}>Label</Badge>);
    expect(screen.getByText("Label").className).toContain(expectedClass);
  });

  test("merges a custom className without dropping variant classes", () => {
    render(<Badge className="mt-4">Label</Badge>);
    const badge = screen.getByText("Label");
    expect(badge.className).toContain("mt-4");
    expect(badge.className).toContain("bg-primary/5");
  });

  test("renders as an anchor when using the render prop", () => {
    render(<Badge render={<a href="/new" />}>Link badge</Badge>);
    const link = screen.getByText("Link badge");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/new");
  });
});
