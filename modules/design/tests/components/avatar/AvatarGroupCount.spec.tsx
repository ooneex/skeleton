/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AvatarGroupCount } from "../../../src/components/avatar/AvatarGroupCount";

afterEach(cleanup);

describe("AvatarGroupCount", () => {
  test("renders the remaining avatar count", () => {
    render(<AvatarGroupCount>+3</AvatarGroupCount>);

    expect(screen.getByText("+3")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="avatar-group-count"]')).toBeInTheDocument();
  });

  test("merges a custom className", () => {
    render(<AvatarGroupCount className="custom-count">+3</AvatarGroupCount>);

    expect(document.querySelector('[data-slot="avatar-group-count"]')).toHaveClass("custom-count");
  });
});
