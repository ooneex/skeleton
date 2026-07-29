/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Breadcrumb } from "../../../src/components/breadcrumb/Breadcrumb";

afterEach(cleanup);

describe("Breadcrumb", () => {
  test("renders a navigation landmark with the breadcrumb label", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>,
    );

    expect(screen.getByRole("navigation", { name: "breadcrumb" })).toBeInTheDocument();
  });

  test("renders links, separators, current page and ellipsis together", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Ellipsis />
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Current</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>,
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");

    const current = screen.getByText("Current");
    expect(current).toHaveAttribute("aria-current", "page");

    // BreadcrumbEllipsis renders visually-hidden "More" text for a11y
    expect(screen.getByText("More")).toBeInTheDocument();
  });

  test("separator defaults to a chevron icon when no children are given", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Separator data-testid="sep" />
        </Breadcrumb.List>
      </Breadcrumb>,
    );

    const separator = document.querySelector("[data-slot='breadcrumb-separator']");
    expect(separator).toBeInTheDocument();
    expect(separator?.querySelector("svg")).toBeInTheDocument();
  });

  test("separator renders custom children instead of the default icon", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
        </Breadcrumb.List>
      </Breadcrumb>,
    );

    const separator = document.querySelector("[data-slot='breadcrumb-separator']");
    expect(separator).toHaveTextContent("/");
    expect(separator?.querySelector("svg")).not.toBeInTheDocument();
  });

  test("applies size variant classes to the list", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.List size="lg">
          <Breadcrumb.Item>
            <Breadcrumb.Page>Only</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>,
    );

    const list = document.querySelector("[data-slot='breadcrumb-list']");
    expect(list?.className).toContain("text-lg");
  });
});
