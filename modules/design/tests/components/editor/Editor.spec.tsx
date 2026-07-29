/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRef } from "react";
import { Editor, type EditorRefType } from "../../../src/components/editor/Editor";

afterEach(cleanup);

const selectTextNode = (node: Text, start: number, end = start) => {
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, end);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
};

describe("Editor (composed component)", () => {
  test("renders an editable surface seeded with the initial content", () => {
    render(<Editor content="<p>Hello world</p>" />);
    const surface = screen.getByRole("textbox");
    expect(surface).toHaveAttribute("contenteditable", "true");
    expect(surface).toHaveTextContent("Hello world");
    expect(surface).toHaveAttribute("data-empty", "false");
  });

  test("uses a default placeholder that mentions the slash menu when enabled", () => {
    render(<Editor />);
    expect(screen.getByRole("textbox")).toHaveAttribute("data-placeholder", "Type something or '/' to start");
  });

  test("uses a plain placeholder when the slash menu is disabled", () => {
    render(<Editor showSlashMenu={false} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("data-placeholder", "Type something...");
  });

  test("honors a custom placeholder prop", () => {
    render(<Editor placeholder="Write here" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("data-placeholder", "Write here");
  });

  test("marks the surface as empty when there is no initial content", () => {
    render(<Editor />);
    expect(screen.getByRole("textbox")).toHaveAttribute("data-empty", "true");
  });

  test("renders a non-editable surface when editable=false", () => {
    render(<Editor content="<p>Read only</p>" editable={false} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("contenteditable", "false");
  });

  test("calls onContentChange with the serialized HTML on input", () => {
    let received: string | undefined;
    render(<Editor content="<p>Hello</p>" onContentChange={(html) => (received = html)} />);
    fireEvent.input(screen.getByRole("textbox"));
    expect(received).toContain("Hello");
  });

  test("submits via onSubmit when Enter is pressed without Shift", () => {
    let submitted = 0;
    render(<Editor content="<p>Hello</p>" onSubmit={() => (submitted += 1)} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter" });
    expect(submitted).toBe(1);
  });

  test("does not submit when Shift+Enter is pressed", () => {
    let submitted = 0;
    render(<Editor content="<p>Hello</p>" onSubmit={() => (submitted += 1)} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", shiftKey: true });
    expect(submitted).toBe(0);
  });

  test("toggles a task-list checkbox by clicking it", () => {
    let received: string | undefined;
    render(
      <Editor
        content='<ul data-type="taskList"><li data-checked="false"><div data-content>Todo</div></li></ul>'
        onContentChange={(html) => (received = html)}
      />,
    );
    const checkbox = screen.getByRole("textbox").querySelector("[data-checkbox]") as HTMLElement;
    fireEvent.click(checkbox);
    expect(screen.getByRole("textbox").querySelector("li")).toHaveAttribute("data-checked", "true");
    expect(received).toContain('data-checked="true"');
  });

  test("exposes an imperative ref with getContent/getEditor/setContent", () => {
    const Wrapper = () => {
      const ref = useRef<EditorRefType>(null);
      return (
        <div>
          <Editor content="<p>Initial</p>" ref={ref} />
          <button type="button" onClick={() => ref.current?.setContent("<p>Replaced</p>")}>
            replace
          </button>
          <button type="button" onClick={() => window.alert?.(ref.current?.getContent() ?? "")}>
            noop
          </button>
        </div>
      );
    };
    render(<Wrapper />);
    expect(screen.getByRole("textbox")).toHaveTextContent("Initial");
    fireEvent.click(screen.getByRole("button", { name: "replace" }));
    expect(screen.getByRole("textbox")).toHaveTextContent("Replaced");
  });
});

describe("Editor.Toolbar", () => {
  const renderToolbar = (props: Partial<React.ComponentProps<typeof Editor.Root>> = {}) =>
    render(
      <Editor.Root content="<p>Buy milk</p>" {...props}>
        <Editor.Toolbar />
        <Editor.Content />
      </Editor.Root>,
    );

  test("renders the default set of formatting buttons", () => {
    renderToolbar();
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Italic" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Heading 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Undo" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Embed YouTube video" })).toBeInTheDocument();
  });

  test("hides heading buttons when showHeadings=false", () => {
    renderToolbar({ showHeadings: false });
    expect(screen.queryByRole("button", { name: "Heading 1" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
  });

  test("hides history buttons when showHistory=false", () => {
    renderToolbar({ showHistory: false });
    expect(screen.queryByRole("button", { name: "Undo" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Redo" })).not.toBeInTheDocument();
  });

  test("hides the media button when showMedia=false", () => {
    renderToolbar({ showMedia: false });
    expect(screen.queryByRole("button", { name: "Embed YouTube video" })).not.toBeInTheDocument();
  });

  test("Undo/Redo are disabled while queryCommandEnabled is unavailable", () => {
    renderToolbar();
    expect(screen.getByRole("button", { name: "Undo" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Redo" })).toBeDisabled();
  });

  test("renders only explicit children when provided instead of the defaults", () => {
    render(
      <Editor.Root content="<p>Buy milk</p>">
        <Editor.Toolbar>
          <Editor.Bold />
        </Editor.Toolbar>
        <Editor.Content />
      </Editor.Root>,
    );
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Italic" })).not.toBeInTheDocument();
  });

  test("clicking the Task list button converts the current block to a task list", () => {
    renderToolbar();
    const surface = screen.getByRole("textbox");
    selectTextNode(surface.querySelector("p")!.firstChild as Text, 1);

    fireEvent.click(screen.getByRole("button", { name: "Task list" }));

    expect(surface.querySelector('ul[data-type="taskList"]')).not.toBeNull();
  });

  test("Heading buttons reflect the active block's heading level", () => {
    render(
      <Editor.Root content="<h2>Title</h2>">
        <Editor.Toolbar />
        <Editor.Content />
      </Editor.Root>,
    );
    const surface = screen.getByRole("textbox");
    selectTextNode(surface.querySelector("h2")!.firstChild as Text, 1);
    act(() => {
      document.dispatchEvent(new Event("selectionchange"));
    });

    expect(screen.getByRole("button", { name: "Heading 2" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Heading 1" })).toHaveAttribute("aria-pressed", "false");
  });
});
