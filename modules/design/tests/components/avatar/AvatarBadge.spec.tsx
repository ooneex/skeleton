/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "../../../src/components/avatar/Avatar";
import { AvatarBadge } from "../../../src/components/avatar/AvatarBadge";
import { AvatarFallback } from "../../../src/components/avatar/AvatarFallback";

afterEach(cleanup);

describe("AvatarBadge", () => {
  test("renders badge content inside an avatar", () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
        <AvatarBadge>•</AvatarBadge>
      </Avatar>,
    );

    const badge = document.querySelector('[data-slot="avatar-badge"]');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("•");
  });

  test("merges a custom className", () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
        <AvatarBadge className="custom-badge" />
      </Avatar>,
    );

    expect(document.querySelector('[data-slot="avatar-badge"]')).toHaveClass("custom-badge");
  });
});
