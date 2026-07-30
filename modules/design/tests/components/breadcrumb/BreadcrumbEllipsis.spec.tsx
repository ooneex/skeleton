/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BreadcrumbEllipsis } from "../../../src/components/breadcrumb/BreadcrumbEllipsis";

afterEach(cleanup);

describe("BreadcrumbEllipsis", () => {
  test("renders the accessible more label with the icon", () => {
    render(<BreadcrumbEllipsis />);

    expect(screen.getByText("More")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="breadcrumb-ellipsis"] svg')).toBeInTheDocument();
  });

  test("applies the requested size variant", () => {
    render(<BreadcrumbEllipsis size="lg" className="custom-ellipsis" />);

    const ellipsis = document.querySelector('[data-slot="breadcrumb-ellipsis"]');
    expect(ellipsis).toHaveClass("custom-ellipsis");
    expect(ellipsis?.className).toContain("size-7");
  });
});
