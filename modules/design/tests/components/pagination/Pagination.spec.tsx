/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pagination } from "../../../src/components/pagination/Pagination";

afterEach(cleanup);

const renderPagination = (currentPage: number, onNavigate: (page: number | "prev" | "next") => void) => (
  <Pagination>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.Previous
          href="#"
          aria-disabled={currentPage === 1}
          onClick={(event) => {
            event.preventDefault();
            if (currentPage > 1) onNavigate("prev");
          }}
        />
      </Pagination.Item>
      {[1, 2, 3].map((page) => (
        <Pagination.Item key={page}>
          <Pagination.Link
            href="#"
            isActive={page === currentPage}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(page);
            }}
          >
            {page}
          </Pagination.Link>
        </Pagination.Item>
      ))}
      <Pagination.Item>
        <Pagination.Ellipsis />
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Next
          href="#"
          aria-disabled={currentPage === 3}
          onClick={(event) => {
            event.preventDefault();
            if (currentPage < 3) onNavigate("next");
          }}
        />
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>
);

describe("Pagination", () => {
  test("renders a navigation landmark labeled 'pagination'", () => {
    render(renderPagination(1, () => {}));
    expect(screen.getByRole("navigation", { name: "pagination" })).toBeInTheDocument();
  });

  test("renders a link per page and marks the current page as active", () => {
    render(renderPagination(2, () => {}));
    const active = screen.getByText("2").closest("a");
    expect(active).toHaveAttribute("aria-current", "page");
    expect(active).toHaveAttribute("data-active", "true");

    const inactive = screen.getByText("1").closest("a");
    expect(inactive).not.toHaveAttribute("aria-current");
    expect(inactive).toHaveAttribute("data-active", "false");
  });

  test("renders previous/next controls with accessible labels", () => {
    render(renderPagination(2, () => {}));
    expect(screen.getByRole("button", { name: "Go to previous page" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go to next page" })).toBeInTheDocument();
  });

  test("renders an ellipsis that is hidden from assistive tech", () => {
    const { container } = render(renderPagination(2, () => {}));
    const ellipsis = container.querySelector('[data-slot="pagination-ellipsis"]');
    expect(ellipsis).toHaveAttribute("aria-hidden");
  });

  test("clicking a page link notifies the caller with the page number", () => {
    let navigated: number | string | undefined;
    render(renderPagination(1, (page) => (navigated = page)));

    fireEvent.click(screen.getByText("3"));
    expect(navigated).toBe(3);
  });

  test("clicking next/previous notifies the caller", () => {
    let navigated: number | string | undefined;
    render(renderPagination(2, (page) => (navigated = page)));

    fireEvent.click(screen.getByRole("button", { name: "Go to next page" }));
    expect(navigated).toBe("next");

    fireEvent.click(screen.getByRole("button", { name: "Go to previous page" }));
    expect(navigated).toBe("prev");
  });

  test("marks previous as disabled on the first page and next as disabled on the last page", () => {
    let navigated: number | string | undefined;
    render(renderPagination(1, (page) => (navigated = page)));

    fireEvent.click(screen.getByRole("button", { name: "Go to previous page" }));
    expect(navigated).toBeUndefined();
    expect(screen.getByRole("button", { name: "Go to previous page" })).toHaveAttribute("aria-disabled", "true");
  });

  test("applies the size context to sub-components' gap classes", () => {
    const { container, rerender } = render(
      <Pagination size="lg">
        <Pagination.Content />
      </Pagination>,
    );
    expect(container.querySelector('[data-slot="pagination-content"]')).toHaveClass("gap-1.5");

    rerender(
      <Pagination size="xs">
        <Pagination.Content />
      </Pagination>,
    );
    expect(container.querySelector('[data-slot="pagination-content"]')).toHaveClass("gap-0");
  });

  test("defaults to the sm size when none is provided", () => {
    const { container } = render(
      <Pagination>
        <Pagination.Content />
      </Pagination>,
    );
    expect(container.querySelector('[data-slot="pagination-content"]')).toHaveClass("gap-0.5");
  });
});
