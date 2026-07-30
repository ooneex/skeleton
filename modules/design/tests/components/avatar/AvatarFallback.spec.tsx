/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "../../../src/components/avatar/Avatar";
import { AvatarFallback } from "../../../src/components/avatar/AvatarFallback";

afterEach(cleanup);

describe("AvatarFallback", () => {
  test("renders fallback text when no image is available", () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByText("JD")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="avatar-fallback"]')).toBeInTheDocument();
  });

  test("merges a custom className", () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback">JD</AvatarFallback>
      </Avatar>,
    );

    expect(document.querySelector('[data-slot="avatar-fallback"]')).toHaveClass("custom-fallback");
  });
});
