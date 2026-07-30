/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "../../../src/components/avatar/Avatar";
import { AvatarFallback } from "../../../src/components/avatar/AvatarFallback";
import { AvatarImage } from "../../../src/components/avatar/AvatarImage";

afterEach(cleanup);

describe("AvatarImage", () => {
  test("keeps the fallback visible while the image has not loaded", () => {
    render(
      <Avatar>
        <AvatarImage alt="Jane Doe" src="/avatar.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByText("JD")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="avatar-image"]')).toBeNull();
  });

  test("requires an avatar root context", () => {
    expect(() => render(<AvatarImage alt="Jane Doe" src="/avatar.jpg" />)).toThrow("AvatarRootContext is missing");
  });
});
