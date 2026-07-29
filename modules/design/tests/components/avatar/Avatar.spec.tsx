/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "../../../src/components/avatar/Avatar";

afterEach(cleanup);

describe("Avatar", () => {
  test("renders fallback content", () => {
    render(
      <Avatar>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>,
    );

    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  test("applies the default size", () => {
    render(
      <Avatar>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>,
    );

    const root = screen.getByText("JD").closest("[data-slot='avatar']");
    expect(root).toHaveAttribute("data-size", "sm");
    expect(root?.className).toContain("size-8");
  });

  test("applies a custom size variant", () => {
    render(
      <Avatar size="lg">
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>,
    );

    const root = screen.getByText("JD").closest("[data-slot='avatar']");
    expect(root).toHaveAttribute("data-size", "lg");
    expect(root?.className).toContain("size-12");
  });

  test("renders a badge attached to the avatar", () => {
    render(
      <Avatar>
        <Avatar.Fallback>JD</Avatar.Fallback>
        <Avatar.Badge data-testid="badge" />
      </Avatar>,
    );

    const badge = document.querySelector("[data-slot='avatar-badge']");
    expect(badge).toBeInTheDocument();
  });

  test("renders a group of avatars with overlap styling", () => {
    render(
      <Avatar.Group>
        <Avatar>
          <Avatar.Fallback>A</Avatar.Fallback>
        </Avatar>
        <Avatar>
          <Avatar.Fallback>B</Avatar.Fallback>
        </Avatar>
        <Avatar.GroupCount>+3</Avatar.GroupCount>
      </Avatar.Group>,
    );

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("+3")).toBeInTheDocument();
    const group = screen.getByText("A").closest("[data-slot='avatar-group']");
    expect(group).toBeInTheDocument();
  });

  test("merges a custom className without dropping variant classes", () => {
    render(
      <Avatar className="mt-4">
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>,
    );

    const root = screen.getByText("JD").closest("[data-slot='avatar']");
    expect(root?.className).toContain("mt-4");
    expect(root?.className).toContain("rounded-full");
  });
});
