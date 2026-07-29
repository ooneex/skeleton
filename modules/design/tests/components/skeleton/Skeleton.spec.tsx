/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Skeleton } from "../../../src/components/skeleton/Skeleton";

afterEach(cleanup);

describe("Skeleton", () => {
  test("renders a div with the skeleton slot and default classes", () => {
    const { container } = render(<Skeleton />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el).toBeInTheDocument();
    expect(el?.tagName).toBe("DIV");
    expect(el?.className).toContain("animate-pulse");
    expect(el?.className).toContain("bg-muted");
  });

  test("merges a custom className with the defaults", () => {
    const { container } = render(<Skeleton className="h-10 w-10" />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el?.className).toContain("h-10");
    expect(el?.className).toContain("animate-pulse");
  });

  test("forwards arbitrary div props", () => {
    const { container } = render(<Skeleton aria-label="loading" />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el).toHaveAttribute("aria-label", "loading");
  });
});
