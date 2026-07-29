/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../../../src/components/button/Button";

afterEach(cleanup);

describe("Button", () => {
  test("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  test("applies the default variant and size classes", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-primary");
    expect(button.className).toContain("h-8");
  });

  test("applies a custom variant", () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByRole("button").className).toContain("bg-destructive/10");
  });

  test("merges a custom className without dropping variant classes", () => {
    render(<Button className="mt-4">Styled</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("mt-4");
    expect(button.className).toContain("bg-primary");
  });

  test("is disabled when the disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
