/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BreadcrumbSeparator } from "../../../src/components/breadcrumb/BreadcrumbSeparator";

afterEach(cleanup);

describe("BreadcrumbSeparator", () => {
  test("renders the default chevron icon when no children are provided", () => {
    render(
      <ol>
        <BreadcrumbSeparator />
      </ol>,
    );

    expect(document.querySelector('[data-slot="breadcrumb-separator"] svg')).toBeInTheDocument();
  });

  test("renders custom separator content instead of the default icon", () => {
    render(
      <ol>
        <BreadcrumbSeparator className="custom-separator">/</BreadcrumbSeparator>
      </ol>,
    );

    const separator = document.querySelector('[data-slot="breadcrumb-separator"]');
    expect(separator).toHaveTextContent("/");
    expect(separator).toHaveClass("custom-separator");
  });
});
