/// <reference lib="dom" />

// PdfViewer relies on @react-pdf-viewer/core + pdfjs, which requires a real
// browser Worker/canvas/PDF rendering pipeline that happy-dom does not
// provide. We only assert the component mounts without crashing and renders
// its static, presentational structure (container + optional toolbar), not
// actual PDF content.

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PdfViewer } from "../../../src/components/pdf/PdfViewer";

afterEach(cleanup);

describe("PdfViewer", () => {
  test("renders its container without crashing (toolbar hidden by default)", () => {
    const { container } = render(<PdfViewer src="/sample.pdf" />);

    const root = container.firstElementChild;
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass("pt-0");
    expect(container.querySelector(".pdf-toolbar")).not.toBeInTheDocument();
  });

  test("renders the toolbar container when toolbar is enabled", () => {
    const { container } = render(<PdfViewer src="/sample.pdf" toolbar />);

    const root = container.firstElementChild;
    expect(root).toHaveClass("pt-14");
  });

  test("applies a custom className to the container", () => {
    const { container } = render(<PdfViewer src="/sample.pdf" className="custom-pdf" />);

    expect(container.firstElementChild).toHaveClass("custom-pdf");
  });
});
