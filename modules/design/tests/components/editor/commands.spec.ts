/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import {
  commands,
  computeEditorState,
  getActiveLinkHref,
  getCurrentBlock,
  getSelectionRect,
  isEditorEmpty,
  normalizeTaskItems,
  restoreSelection,
  saveSelection,
  TASK_CHECKBOX_CHECKED_CLASS,
  toggleTaskCheckbox,
} from "../../../src/components/editor/commands";

afterEach(() => {
  document.body.innerHTML = "";
  window.getSelection()?.removeAllRanges();
});

const makeRoot = (html: string) => {
  const root = document.createElement("div");
  root.innerHTML = html;
  document.body.appendChild(root);
  return root;
};

const selectTextNode = (node: Text, start: number, end = start) => {
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, end);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
  return range;
};

describe("commands: getCurrentBlock", () => {
  test("returns the block ancestor of the selection anchor", () => {
    const root = makeRoot("<p>Hello <b>world</b></p>");
    const bold = root.querySelector("b")!;
    const textNode = bold.firstChild as Text;
    selectTextNode(textNode, 1);

    const block = getCurrentBlock(root);
    expect(block?.tagName).toBe("P");
  });

  test("returns null when there is no selection inside root", () => {
    const root = makeRoot("<p>Hello</p>");
    expect(getCurrentBlock(root)).toBeNull();
  });
});

describe("commands: isEditorEmpty", () => {
  test("is true for a document with only whitespace/zero-width content", () => {
    const root = makeRoot("<p><br></p>");
    expect(isEditorEmpty(root)).toBe(true);
  });

  test("is false when there is text content", () => {
    const root = makeRoot("<p>Hello</p>");
    expect(isEditorEmpty(root)).toBe(false);
  });

  test("is false when there is a media element even without text", () => {
    const root = makeRoot('<p><img src="x.png" /></p>');
    expect(isEditorEmpty(root)).toBe(false);
  });
});

describe("commands: computeEditorState", () => {
  test("returns block-derived state (paragraph) when the selection is inside root", () => {
    const root = makeRoot("<p>Hello</p>");
    const textNode = root.querySelector("p")!.firstChild as Text;
    selectTextNode(textNode, 1, 3);

    const state = computeEditorState(root);
    expect(state.paragraph).toBe(true);
    expect(state.headingLevel).toBeNull();
    expect(state.blockquote).toBe(false);
    expect(state.isEmpty).toBe(false);
  });

  test("detects heading level from the current block tag", () => {
    const root = makeRoot("<h2>Title</h2>");
    const textNode = root.querySelector("h2")!.firstChild as Text;
    selectTextNode(textNode, 1);

    const state = computeEditorState(root);
    expect(state.headingLevel).toBe(2);
    expect(state.paragraph).toBe(false);
  });

  test("detects list state (bullet vs task) via ancestor lookup", () => {
    const root = makeRoot('<ul><li>Item</li></ul><ul data-type="taskList"><li data-content>Task</li></ul>');
    const bulletText = root.querySelectorAll("li")[0]!.firstChild as Text;
    selectTextNode(bulletText, 1);
    expect(computeEditorState(root).bulletList).toBe(true);
    expect(computeEditorState(root).taskList).toBe(false);

    const taskText = root.querySelectorAll("li")[1]!.firstChild as Text;
    selectTextNode(taskText, 1);
    const taskState = computeEditorState(root);
    expect(taskState.taskList).toBe(true);
    expect(taskState.bulletList).toBe(false);
  });

  test("returns falsy/default state when the selection is outside root", () => {
    const root = makeRoot("<p>Hello</p>");
    const other = document.createElement("p");
    other.textContent = "Outside";
    document.body.appendChild(other);
    selectTextNode(other.firstChild as Text, 1);

    const state = computeEditorState(root);
    expect(state.paragraph).toBe(false);
    expect(state.bold).toBe(false);
    expect(state.align).toBe("left");
  });
});

describe("commands: saveSelection / restoreSelection", () => {
  test("round-trips a selection range inside root", () => {
    const root = makeRoot("<p>Hello world</p>");
    const textNode = root.querySelector("p")!.firstChild as Text;
    selectTextNode(textNode, 2, 5);

    const saved = saveSelection(root);
    expect(saved).not.toBeNull();

    window.getSelection()?.removeAllRanges();
    expect(window.getSelection()?.rangeCount).toBe(0);

    restoreSelection(saved);
    const selection = window.getSelection();
    expect(selection?.rangeCount).toBe(1);
    expect(selection?.toString()).toBe("llo");
  });

  test("returns null when the selection is outside root", () => {
    const root = makeRoot("<p>Hello</p>");
    expect(saveSelection(root)).toBeNull();
  });

  test("restoreSelection is a no-op for a null range", () => {
    expect(() => restoreSelection(null)).not.toThrow();
  });
});

describe("commands: getActiveLinkHref", () => {
  test("returns the href of the enclosing anchor", () => {
    const root = makeRoot('<p><a href="https://example.com">link</a></p>');
    const textNode = root.querySelector("a")!.firstChild as Text;
    selectTextNode(textNode, 1);

    expect(getActiveLinkHref(root)).toBe("https://example.com");
  });

  test('returns "" when the selection is not inside a link', () => {
    const root = makeRoot("<p>No link here</p>");
    const textNode = root.querySelector("p")!.firstChild as Text;
    selectTextNode(textNode, 1);

    expect(getActiveLinkHref(root)).toBe("");
  });
});

describe("commands: getSelectionRect", () => {
  test("returns null when there is no selection", () => {
    window.getSelection()?.removeAllRanges();
    expect(getSelectionRect()).toBeNull();
  });

  test("returns a rect-like object when there is a selection", () => {
    const root = makeRoot("<p>Hello</p>");
    const textNode = root.querySelector("p")!.firstChild as Text;
    selectTextNode(textNode, 0, 3);

    const rect = getSelectionRect();
    expect(rect).not.toBeNull();
    expect(typeof rect?.left).toBe("number");
  });
});

describe("commands: normalizeTaskItems", () => {
  test("applies checkbox classes/state derived from data-checked", () => {
    const root = makeRoot(
      '<ul data-type="taskList"><li data-checked="true"><div data-content>Done</div></li><li data-checked="false"><div data-content>Todo</div></li></ul>',
    );

    normalizeTaskItems(root);

    const items = root.querySelectorAll("li");
    const checkedBox = items[0]!.querySelector("[data-checkbox]") as HTMLElement;
    const uncheckedBox = items[1]!.querySelector("[data-checkbox]") as HTMLElement;

    expect(checkedBox).not.toBeNull();
    expect(checkedBox.className).toContain(TASK_CHECKBOX_CHECKED_CLASS.split(" ")[0]!);
    expect(checkedBox.textContent).toBe("✓");
    expect(uncheckedBox.className).not.toContain(TASK_CHECKBOX_CHECKED_CLASS.split(" ")[0]!);
    expect(uncheckedBox.textContent).toBe("");
  });
});

describe("commands: toggleTaskCheckbox", () => {
  test("flips data-checked and repaints the checkbox", () => {
    const root = makeRoot(
      '<ul data-type="taskList"><li data-checked="false"><span data-checkbox></span><div data-content>Todo</div></li></ul>',
    );
    const item = root.querySelector("li")!;
    const box = item.querySelector("[data-checkbox]") as HTMLElement;

    toggleTaskCheckbox(box);
    expect(item.getAttribute("data-checked")).toBe("true");
    expect(box.textContent).toBe("✓");

    toggleTaskCheckbox(box);
    expect(item.getAttribute("data-checked")).toBe("false");
    expect(box.textContent).toBe("");
  });

  test("is a no-op when the checkbox has no owning <li>", () => {
    const orphan = document.createElement("span");
    expect(() => toggleTaskCheckbox(orphan)).not.toThrow();
  });
});

describe("commands: toggleTaskList", () => {
  test("converts the current block into a task list", () => {
    const root = makeRoot("<p>Buy milk</p>");
    const textNode = root.querySelector("p")!.firstChild as Text;
    selectTextNode(textNode, 1);

    commands.toggleTaskList(root);

    const list = root.querySelector('ul[data-type="taskList"]');
    expect(list).not.toBeNull();
    expect(list?.querySelector("li")?.textContent).toContain("Buy milk");
  });

  test("converts an existing task list back into paragraphs", () => {
    const root = makeRoot(
      '<ul data-type="taskList"><li data-checked="false"><span data-checkbox></span><div data-content>Buy milk</div></li></ul>',
    );
    const content = root.querySelector("[data-content]") as HTMLElement;
    selectTextNode(content.firstChild as Text, 1);

    commands.toggleTaskList(root);

    expect(root.querySelector('ul[data-type="taskList"]')).toBeNull();
    expect(root.querySelector("p")?.textContent).toContain("Buy milk");
  });

  test("does nothing when there is no current block", () => {
    const root = makeRoot("<p>Hello</p>");
    expect(() => commands.toggleTaskList(root)).not.toThrow();
    expect(root.querySelector('ul[data-type="taskList"]')).toBeNull();
  });
});

describe("commands: exec-backed formatting commands", () => {
  // happy-dom does not implement document.execCommand / queryCommandState; the
  // commands module defensively swallows the resulting errors so calling these
  // remains safe even though no DOM mutation actually happens in this environment.
  test("do not throw even though execCommand is unsupported", () => {
    const root = makeRoot("<p>Hello</p>");
    expect(() => commands.toggleBold()).not.toThrow();
    expect(() => commands.toggleItalic()).not.toThrow();
    expect(() => commands.setColor("#ff0000")).not.toThrow();
    expect(() => commands.unsetColor(root)).not.toThrow();
    expect(() => commands.setLink(root, "https://example.com")).not.toThrow();
    expect(() => commands.unsetLink()).not.toThrow();
    expect(() => commands.toggleHeading(root, 1)).not.toThrow();
    expect(() => commands.toggleBlockquote(root)).not.toThrow();
    expect(() => commands.setTextAlign("center")).not.toThrow();
    expect(() => commands.insertYouTube("https://www.youtube.com/embed/abc")).not.toThrow();
    expect(() => commands.undo()).not.toThrow();
    expect(() => commands.redo()).not.toThrow();
  });

  test("deleteSelection removes a non-collapsed range from the document", () => {
    const root = makeRoot("<p>Hello world</p>");
    const textNode = root.querySelector("p")!.firstChild as Text;
    selectTextNode(textNode, 0, 5);

    commands.deleteSelection();

    expect(root.textContent).toBe(" world");
  });

  test("deleteSelection is a no-op for a collapsed selection", () => {
    const root = makeRoot("<p>Hello</p>");
    const textNode = root.querySelector("p")!.firstChild as Text;
    selectTextNode(textNode, 2);

    commands.deleteSelection();

    expect(root.textContent).toBe("Hello");
  });
});
