/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogPortal } from "../../../src/components/dialog/DialogPortal";

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("DialogPortal", () => {
  test("renders children into the provided container", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(
      <DialogPortal container={container}>
        <span>Dialog portal</span>
      </DialogPortal>,
    );

    expect(screen.getByText("Dialog portal")).toBeInTheDocument();
    expect(container.textContent).toContain("Dialog portal");
  });
});
