/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Empty } from "../../../src/components/empty/Empty";

afterEach(cleanup);

describe("Empty", () => {
  test("composes Header, Media, Title, Description, and Content", () => {
    render(
      <Empty>
        <Empty.Header>
          <Empty.Media variant="icon">📦</Empty.Media>
          <Empty.Title>No results</Empty.Title>
          <Empty.Description>Try a different search term.</Empty.Description>
        </Empty.Header>
        <Empty.Content>
          <button type="button">Clear filters</button>
        </Empty.Content>
      </Empty>,
    );

    expect(screen.getByText("No results")).toBeInTheDocument();
    expect(screen.getByText("Try a different search term.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Clear filters" })).toBeInTheDocument();
  });

  test("Empty.Media defaults to the 'default' variant when unset", () => {
    render(<Empty.Media data-testid="media">icon</Empty.Media>);
    expect(screen.getByTestId("media")).toHaveAttribute("data-variant", "default");
  });

  test("Empty.Media applies the 'icon' variant styling classes", () => {
    render(
      <Empty.Media data-testid="media" variant="icon">
        icon
      </Empty.Media>,
    );
    const media = screen.getByTestId("media");
    expect(media).toHaveAttribute("data-variant", "icon");
    expect(media.className).toContain("bg-muted");
  });

  test("forwards a custom className to the root and merges it with the base classes", () => {
    render(<Empty data-testid="empty" className="custom-empty" />);
    const root = screen.getByTestId("empty");
    expect(root).toHaveAttribute("data-slot", "empty");
    expect(root.className).toContain("custom-empty");
    expect(root.className).toContain("flex-col");
  });

  test("forwards arbitrary props to the sub-components", () => {
    render(<Empty.Title data-testid="title">Title text</Empty.Title>);
    expect(screen.getByTestId("title")).toHaveAttribute("data-slot", "empty-title");
  });
});
