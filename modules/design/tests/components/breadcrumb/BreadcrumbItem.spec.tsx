/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BreadcrumbItem } from "../../../src/components/breadcrumb/BreadcrumbItem";

afterEach(cleanup);

describe("BreadcrumbItem", () => {
  test("renders its child content as a list item", () => {
    render(
      <ol>
        <BreadcrumbItem>Home</BreadcrumbItem>
      </ol>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="breadcrumb-item"]')).toBeInTheDocument();
  });

  test("applies size variants and merges custom classes", () => {
    render(
      <ol>
        <BreadcrumbItem size="lg" className="custom-item">
          Home
        </BreadcrumbItem>
      </ol>,
    );

    const item = document.querySelector('[data-slot="breadcrumb-item"]');
    expect(item).toHaveClass("custom-item");
    expect(item?.className).toContain("gap-2.5");
  });
});
