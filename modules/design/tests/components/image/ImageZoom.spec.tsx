/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageZoom } from "../../../src/components/image/ImageZoom";

afterEach(cleanup);

// Smoke test only: react-medium-image-zoom relies on real image loading/measuring
// and pointer/zoom interactions that a headless DOM engine cannot meaningfully simulate.
describe("ImageZoom", () => {
  test("renders the image with the given src and alt", () => {
    render(<ImageZoom src="/photo.png" alt="A photo" />);
    const img = screen.getByAltText("A photo");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/photo.png");
  });

  test("applies a custom className to the image", () => {
    render(<ImageZoom src="/photo.png" alt="A photo" className="custom-image" />);
    expect(screen.getByAltText("A photo")).toHaveClass("custom-image");
  });
});
