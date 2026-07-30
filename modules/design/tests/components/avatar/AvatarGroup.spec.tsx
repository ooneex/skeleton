/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "../../../src/components/avatar/Avatar";
import { AvatarFallback } from "../../../src/components/avatar/AvatarFallback";
import { AvatarGroup } from "../../../src/components/avatar/AvatarGroup";

afterEach(cleanup);

describe("AvatarGroup", () => {
  test("renders multiple avatars with the group container", () => {
    render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="avatar-group"]')).toBeInTheDocument();
  });

  test("merges a custom className", () => {
    render(
      <AvatarGroup className="custom-group">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );

    expect(document.querySelector('[data-slot="avatar-group"]')).toHaveClass("custom-group");
  });
});
