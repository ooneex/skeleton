/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Editor } from "../../../src/components/editor/Editor";

afterEach(cleanup);

const selectTextNode = (node: Text, start: number, end: number) => {
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, end);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
};

const renderWithFloatingToolbar = (content = "<p>Hello world</p>") =>
  render(
    <Editor.Root content={content}>
      <Editor.FloatingToolbar />
      <Editor.Content />
    </Editor.Root>,
  );

describe("FloatingToolbar", () => {
  test("is hidden when there is no text selection", () => {
    renderWithFloatingToolbar();
    expect(screen.queryByRole("toolbar", { name: "Text formatting" })).not.toBeInTheDocument();
  });

  test("appears once a non-collapsed selection exists inside the editor", () => {
    renderWithFloatingToolbar();
    const surface = screen.getByRole("textbox");
    const textNode = surface.firstChild!.firstChild as Text;
    selectTextNode(textNode, 0, 5);
    act(() => {
      document.dispatchEvent(new Event("selectionchange"));
    });

    const toolbar = screen.getByRole("toolbar", { name: "Text formatting" });
    expect(toolbar).toBeInTheDocument();
    expect(within(toolbar).getByRole("button", { name: "Bold" })).toBeInTheDocument();
    expect(within(toolbar).getByRole("button", { name: "Link" })).toBeInTheDocument();
  });

  test("disappears again once the selection collapses", () => {
    renderWithFloatingToolbar();
    const surface = screen.getByRole("textbox");
    const textNode = surface.firstChild!.firstChild as Text;
    selectTextNode(textNode, 0, 5);
    act(() => {
      document.dispatchEvent(new Event("selectionchange"));
    });
    expect(screen.getByRole("toolbar", { name: "Text formatting" })).toBeInTheDocument();

    selectTextNode(textNode, 2, 2);
    act(() => {
      document.dispatchEvent(new Event("selectionchange"));
    });
    expect(screen.queryByRole("toolbar", { name: "Text formatting" })).not.toBeInTheDocument();
  });

  test("stays hidden when the editor is not editable", () => {
    render(
      <Editor.Root content="<p>Hello world</p>" editable={false}>
        <Editor.FloatingToolbar />
        <Editor.Content />
      </Editor.Root>,
    );
    const surface = screen.getByRole("textbox");
    const textNode = surface.firstChild!.firstChild as Text;
    selectTextNode(textNode, 0, 5);
    act(() => {
      document.dispatchEvent(new Event("selectionchange"));
    });

    expect(screen.queryByRole("toolbar", { name: "Text formatting" })).not.toBeInTheDocument();
  });
});
