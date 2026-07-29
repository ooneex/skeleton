/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputDescription } from "../../../src/components/input/InputDescription";

afterEach(cleanup);

// Smoke test only: InputDescription wraps the rich-text Editor (contentEditable-based),
// whose own behavior is already covered by tests/components/editor.
describe("InputDescription", () => {
  test("renders without crashing with default props", () => {
    const { container } = render(<InputDescription />);
    expect(container.firstElementChild).toBeInTheDocument();
  });

  test("renders with initial content and a placeholder", () => {
    const { container } = render(<InputDescription content="<p>Hello</p>" placeholder="Add a description" />);
    expect(container.textContent).toContain("Hello");
  });
});
