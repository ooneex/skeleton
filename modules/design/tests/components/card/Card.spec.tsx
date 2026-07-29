/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "../../../src/components/card/Card";

afterEach(cleanup);

describe("Card", () => {
  test("renders compound structure with header, title, description, action, content and footer", () => {
    render(
      <Card>
        <Card.Header>
          <Card.Title>Invoice #1</Card.Title>
          <Card.Description>Due next week</Card.Description>
          <Card.Action>Edit</Card.Action>
        </Card.Header>
        <Card.Content>Body content</Card.Content>
        <Card.Footer>Footer content</Card.Footer>
      </Card>,
    );

    expect(screen.getByText("Invoice #1")).toBeInTheDocument();
    expect(screen.getByText("Due next week")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });

  test("defaults size to 'default' and can be switched to 'sm'", () => {
    const { container, rerender } = render(<Card>content</Card>);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveAttribute("data-size", "default");

    rerender(<Card size="sm">content</Card>);
    expect(container.querySelector('[data-slot="card"]')).toHaveAttribute("data-size", "sm");
  });

  test("applies hoverable styling classes when hoverable is true", () => {
    const { container } = render(<Card hoverable>content</Card>);
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).toContain("cursor-pointer");
  });

  test("does not apply hoverable classes by default", () => {
    const { container } = render(<Card>content</Card>);
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).not.toContain("cursor-pointer");
  });

  test("merges custom className", () => {
    const { container } = render(<Card className="custom-card">content</Card>);
    expect(container.querySelector('[data-slot="card"]')).toHaveClass("custom-card");
  });

  test("each sub-component renders with its own data-slot", () => {
    render(
      <Card>
        <Card.Header data-testid="header">
          <Card.Title>Title</Card.Title>
          <Card.Description>Desc</Card.Description>
          <Card.Action>Action</Card.Action>
        </Card.Header>
        <Card.Content>Content</Card.Content>
        <Card.Footer>Footer</Card.Footer>
      </Card>,
    );

    expect(document.querySelector('[data-slot="card-header"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-title"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-description"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-action"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-content"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="card-footer"]')).toBeInTheDocument();
  });
});
