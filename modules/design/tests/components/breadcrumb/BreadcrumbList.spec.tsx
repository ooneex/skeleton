/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BreadcrumbList } from "../../../src/components/breadcrumb/BreadcrumbList";

afterEach(cleanup);

describe("BreadcrumbList", () => {
  test("renders breadcrumb items inside an ordered list", () => {
    render(
      <BreadcrumbList>
        <li>Home</li>
      </BreadcrumbList>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="breadcrumb-list"]')).toBeInTheDocument();
  });

  test("applies the selected size variant and custom classes", () => {
    render(
      <BreadcrumbList size="lg" className="custom-list">
        <li>Home</li>
      </BreadcrumbList>,
    );

    const list = document.querySelector('[data-slot="breadcrumb-list"]');
    expect(list).toHaveClass("custom-list");
    expect(list?.className).toContain("text-lg");
  });
});
