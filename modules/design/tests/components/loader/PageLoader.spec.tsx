/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PageLoader } from "../../../src/components/loader/PageLoader";

afterEach(cleanup);

describe("PageLoader", () => {
  test("renders the Talos logo", () => {
    render(<PageLoader />);
    expect(screen.getByRole("img", { name: "Talos" })).toBeInTheDocument();
  });

  test("applies base layout classes", () => {
    const { container } = render(<PageLoader />);
    const root = container.querySelector('[data-slot="page-loader"]');
    expect(root).toHaveClass("flex", "flex-col", "items-center", "justify-center", "min-h-screen");
  });

  test("merges a custom className without dropping the base classes", () => {
    const { container } = render(<PageLoader className="bg-background" />);
    const root = container.querySelector('[data-slot="page-loader"]');
    expect(root).toHaveClass("bg-background", "flex");
  });

  test("forwards extra props to the root element", () => {
    render(<PageLoader data-testid="loader-root" />);
    expect(screen.getByTestId("loader-root")).toBeInTheDocument();
  });
});
