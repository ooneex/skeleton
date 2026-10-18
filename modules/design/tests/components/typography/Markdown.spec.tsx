/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Markdown } from "../../../src/components/typography/Markdown";

afterEach(cleanup);

describe("Markdown", () => {
  test("renders paragraphs, a heading and a list as their own blocks", () => {
    const { container } = render(
      <Markdown content={"## Limits\n\nOne call per second\nper user.\n\n- burst of 10\n- reset at midnight"} />,
    );

    expect(screen.getByText("Limits")).toBeInTheDocument();
    expect(screen.getByText("One call per second per user.")).toBeInTheDocument();
    expect(container.querySelectorAll("li")).toHaveLength(2);
  });

  test("renders bold, italics, code and links inline", () => {
    render(<Markdown content={"**Always** *check* `status` on [the docs](https://example.com)."} />);

    expect(screen.getByText("Always").tagName).toBe("STRONG");
    expect(screen.getByText("check").tagName).toBe("EM");
    expect(screen.getByText("status").tagName).toBe("CODE");
    expect(screen.getByRole("link", { name: "the docs" })).toHaveAttribute("href", "https://example.com");
  });

  test("renders nothing for blank content", () => {
    const { container } = render(<Markdown content={"  \n "} />);

    expect(container).toBeEmptyDOMElement();
  });
});
