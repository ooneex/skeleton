/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialogPortal } from "../../../src/components/dialog/AlertDialogPortal";

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("AlertDialogPortal", () => {
  test("renders children into the supplied container", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(
      <AlertDialogPortal container={container}>
        <span>Portal content</span>
      </AlertDialogPortal>,
    );

    expect(screen.getByText("Portal content")).toBeInTheDocument();
    expect(container.textContent).toContain("Portal content");
  });
});
