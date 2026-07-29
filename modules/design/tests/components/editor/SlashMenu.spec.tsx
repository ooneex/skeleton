/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EditorContent } from "../../../src/components/editor/EditorContent";
import { EditorProvider } from "../../../src/components/editor/EditorContext";
import { SlashMenu } from "../../../src/components/editor/SlashMenu";

afterEach(cleanup);

/** Simulate typing `text` (which must end with the slash trigger) at the end of the first paragraph. */
const triggerSlash = (text: string) => {
  const surface = screen.getByRole("textbox");
  const paragraph = surface.querySelector("p")!;
  const textNode = document.createTextNode(text);
  paragraph.innerHTML = "";
  paragraph.appendChild(textNode);
  const range = document.createRange();
  range.setStart(textNode, text.length);
  range.setEnd(textNode, text.length);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
  act(() => {
    fireEvent.input(surface);
    document.dispatchEvent(new Event("selectionchange"));
  });
};

const renderEditor = (props: Partial<React.ComponentProps<typeof EditorProvider>> = {}) =>
  render(
    <EditorProvider content="<p>hello</p>" {...props}>
      <EditorContent />
      <SlashMenu />
    </EditorProvider>,
  );

describe("SlashMenu", () => {
  test("is not rendered before a slash trigger is typed", () => {
    renderEditor();
    expect(screen.queryByText("Task List")).not.toBeInTheDocument();
  });

  test("opens with the full grouped command list when '/' is typed", () => {
    renderEditor();
    triggerSlash("/");

    expect(screen.getByText("Heading 1")).toBeInTheDocument();
    expect(screen.getByText("Bold")).toBeInTheDocument();
    expect(screen.getByText("Task List")).toBeInTheDocument();
    expect(screen.getByText("Undo")).toBeInTheDocument();
  });

  test("filters items by the query typed after the slash", () => {
    renderEditor();
    triggerSlash("/task");

    expect(screen.getByText("Task List")).toBeInTheDocument();
    expect(screen.queryByText("Bold")).not.toBeInTheDocument();
    expect(screen.queryByText("Heading 1")).not.toBeInTheDocument();
  });

  test("matches an item by alias, not just its title", () => {
    renderEditor();
    triggerSlash("/todo");

    expect(screen.getByText("Task List")).toBeInTheDocument();
  });

  test("closes and shows nothing when the query matches no item", () => {
    renderEditor();
    triggerSlash("/zzz-nomatch");

    expect(screen.queryByText("Task List")).not.toBeInTheDocument();
    expect(screen.queryByText("Bold")).not.toBeInTheDocument();
  });

  test("hides the Headings group when showHeadings=false", () => {
    renderEditor({ showHeadings: false });
    triggerSlash("/");

    expect(screen.queryByText("Heading 1")).not.toBeInTheDocument();
    expect(screen.getByText("Bold")).toBeInTheDocument();
  });

  test("hides the History group when showHistory=false", () => {
    renderEditor({ showHistory: false });
    triggerSlash("/");

    expect(screen.queryByText("Undo")).not.toBeInTheDocument();
  });

  test("hides the Media group when showMedia=false", () => {
    renderEditor({ showMedia: false });
    triggerSlash("/");

    expect(screen.queryByText("YouTube")).not.toBeInTheDocument();
  });

  test("clicking an item removes the trigger text and closes the menu", () => {
    renderEditor();
    triggerSlash("/task");

    fireEvent.click(screen.getByText("Task List"));

    expect(screen.queryByText("Task List")).not.toBeInTheDocument();
    const surface = screen.getByRole("textbox");
    expect(surface.querySelector('ul[data-type="taskList"]')).not.toBeNull();
    expect(surface.textContent).not.toContain("/task");
  });

  test("ArrowDown moves the active highlight to the next item", () => {
    renderEditor();
    triggerSlash("/heading");
    const surface = screen.getByRole("textbox");

    const items = screen.getAllByRole("button");
    const activeBefore = items.filter((button) => button.className.includes("bg-accent"));
    expect(activeBefore).toHaveLength(1);

    act(() => {
      fireEvent.keyDown(surface, { key: "ArrowDown" });
    });

    const activeAfter = screen.getAllByRole("button").filter((button) => button.className.includes("bg-accent"));
    expect(activeAfter).toHaveLength(1);
    expect(activeAfter[0]).not.toBe(activeBefore[0]);
  });

  test("Escape closes the menu", () => {
    renderEditor();
    triggerSlash("/task");
    const surface = screen.getByRole("textbox");

    act(() => {
      fireEvent.keyDown(surface, { key: "Escape" });
    });

    expect(screen.queryByText("Task List")).not.toBeInTheDocument();
  });

  test("Enter applies the currently highlighted item", () => {
    renderEditor();
    triggerSlash("/task");
    const surface = screen.getByRole("textbox");

    act(() => {
      fireEvent.keyDown(surface, { key: "Enter" });
    });

    expect(screen.queryByText("Task List")).not.toBeInTheDocument();
    expect(surface.querySelector('ul[data-type="taskList"]')).not.toBeNull();
  });
});
