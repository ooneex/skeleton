import type { EditorAlignType, EditorStateType } from "./types";

/**
 * Low-level DOM primitives that power the editor. Everything here operates
 * directly on a `contentEditable` root element via the browser's native
 * `execCommand` API plus a handful of hand-rolled behaviours (task lists,
 * YouTube embeds) that `execCommand` does not cover. No third-party editor
 * engine is involved.
 */

const BLOCK_TAGS = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE", "LI", "DIV", "PRE"]);

/** Tailwind classes applied to editor-generated structures (Tailwind-only styling). */
export const TASK_LIST_CLASS = "m-0 flex list-none flex-col gap-1 !p-0";
export const TASK_ITEM_CLASS = "flex items-start gap-2";
export const TASK_CHECKBOX_CLASS =
  "mt-1 inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded border border-border text-[10px] leading-none select-none";
export const TASK_CHECKBOX_CHECKED_CLASS = "border-primary bg-primary text-primary-foreground";
export const YOUTUBE_CLASS = "my-4 aspect-video w-full max-w-md overflow-hidden rounded";

const exec = (command: string, value?: string) => {
  try {
    document.execCommand(command, false, value);
  } catch {
    // execCommand throws in some environments; treat as a no-op.
  }
};

const enableCssStyling = () => {
  try {
    document.execCommand("styleWithCSS", false, "true");
  } catch {
    // ignore
  }
};

const escapeHtml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

/** The block-level element that contains the current selection anchor. */
export const getCurrentBlock = (root: HTMLElement): HTMLElement | null => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !root.contains(selection.anchorNode)) {
    return null;
  }
  let node: Node | null = selection.anchorNode;
  if (node?.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  let element = node as HTMLElement | null;
  while (element && root.contains(element) && element !== root) {
    if (BLOCK_TAGS.has(element.tagName)) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
};

/** The nearest ancestor of the selection matching `selector`, bounded by `root`. */
const closestSelected = (root: HTMLElement, selector: string): HTMLElement | null => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !root.contains(selection.anchorNode)) {
    return null;
  }
  let node: Node | null = selection.anchorNode;
  if (node?.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  let element = node as HTMLElement | null;
  while (element && root.contains(element)) {
    if (element !== root && element.matches(selector)) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
};

/** Walk up from the selection collecting the first inline style value found. */
const getInlineStyleValue = (root: HTMLElement, property: "color" | "backgroundColor"): string => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !root.contains(selection.anchorNode)) {
    return "";
  }
  let node: Node | null = selection.anchorNode;
  if (node?.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  let element = node as HTMLElement | null;
  while (element && root.contains(element) && element !== root) {
    const value = element.style?.[property];
    if (value) {
      return value;
    }
    element = element.parentElement;
  }
  return "";
};

const alignOf = (element: HTMLElement): EditorAlignType => {
  const raw = element.style.textAlign || getComputedStyle(element).textAlign || "left";
  if (raw === "start") return "left";
  if (raw === "end") return "right";
  if (raw === "center" || raw === "right" || raw === "justify") return raw;
  return "left";
};

/** Whether the document holds no meaningful content. */
export const isEditorEmpty = (root: HTMLElement): boolean => {
  if (root.querySelector("img, iframe, [data-youtube], [data-checkbox], hr")) {
    return false;
  }
  return (root.textContent ?? "").replaceAll("​", "").trim().length === 0;
};

/** Compute the reactive selection snapshot consumed by the toolbars. */
export const computeEditorState = (root: HTMLElement): EditorStateType => {
  const selection = window.getSelection();
  const inside = !!selection && selection.rangeCount > 0 && root.contains(selection.anchorNode);

  const state = (command: string) => {
    if (!inside) return false;
    try {
      return document.queryCommandState(command);
    } catch {
      return false;
    }
  };
  const enabled = (command: string) => {
    try {
      return document.queryCommandEnabled(command);
    } catch {
      return false;
    }
  };

  const block = inside ? getCurrentBlock(root) : null;
  const headingMatch = block && /^H[123]$/.test(block.tagName) ? (Number(block.tagName[1]) as 1 | 2 | 3) : null;
  const taskList = !!closestSelected(root, 'ul[data-type="taskList"]');
  const bulletList = !!closestSelected(root, "ul") && !taskList;
  const orderedList = !!closestSelected(root, "ol");
  const blockquote = !!closestSelected(root, "blockquote");

  return {
    bold: state("bold"),
    italic: state("italic"),
    underline: state("underline"),
    strike: state("strikeThrough"),
    subscript: state("subscript"),
    superscript: state("superscript"),
    link: !!closestSelected(root, "a"),
    blockquote,
    paragraph: !!block && block.tagName === "P",
    headingLevel: headingMatch,
    bulletList,
    orderedList,
    taskList,
    align: block ? alignOf(block) : "left",
    color: inside ? getInlineStyleValue(root, "color") : "",
    highlight: inside ? getInlineStyleValue(root, "backgroundColor") : "",
    canUndo: enabled("undo"),
    canRedo: enabled("redo"),
    isEmpty: isEditorEmpty(root),
  };
};

/**
 * Snapshot the current selection so it can be restored after focus moves away
 * (e.g. while a dialog or color picker is open). Returns a cloned Range that
 * stays valid as long as the editor DOM is untouched.
 */
export const saveSelection = (root: HTMLElement | null): Range | null => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !root?.contains(selection.anchorNode)) {
    return null;
  }
  return selection.getRangeAt(0).cloneRange();
};

/** Restore a selection previously captured with {@link saveSelection}. */
export const restoreSelection = (range: Range | null) => {
  if (!range) return;
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
};

/** The `href` of the anchor wrapping the current selection, or `""` when none. */
export const getActiveLinkHref = (root: HTMLElement): string => closestSelected(root, "a")?.getAttribute("href") ?? "";

/** Bounding rect of the current selection (or caret), in viewport coordinates. */
export const getSelectionRect = (): DOMRect | null => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return null;
  }
  const range = selection.getRangeAt(0);
  const rects = range.getClientRects();
  if (rects.length > 0) {
    return rects[rects.length - 1] ?? null;
  }
  const bounding = range.getBoundingClientRect();
  if (bounding.width || bounding.height) {
    return bounding;
  }
  const node = selection.anchorNode;
  const element = node?.nodeType === Node.TEXT_NODE ? node.parentElement : (node as HTMLElement | null);
  return element?.getBoundingClientRect() ?? null;
};

const placeCaretAtEnd = (element: HTMLElement) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
};

const placeCaretAtStart = (element: HTMLElement) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(true);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
};

/** Remove an inline style from every element intersecting the selection. */
const clearInlineStyle = (root: HTMLElement, property: "color" | "backgroundColor") => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return;
  }
  const range = selection.getRangeAt(0);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const element = node as HTMLElement;
      return element.style?.[property] && range.intersectsNode(element)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP;
    },
  });

  const matches: HTMLElement[] = [];
  let current = walker.nextNode();
  while (current) {
    matches.push(current as HTMLElement);
    current = walker.nextNode();
  }

  for (const element of matches) {
    element.style[property] = "";
    if (!element.getAttribute("style")) {
      element.removeAttribute("style");
    }
    if (element.tagName === "SPAN" && element.attributes.length === 0) {
      const parent = element.parentNode;
      if (parent) {
        while (element.firstChild) {
          parent.insertBefore(element.firstChild, element);
        }
        parent.removeChild(element);
      }
    }
  }
};

/** Sync a task checkbox's appearance to a checked flag. */
const paintCheckbox = (box: HTMLElement, checked: boolean) => {
  const checkedClasses = TASK_CHECKBOX_CHECKED_CLASS.split(" ");
  if (checked) {
    box.classList.add(...checkedClasses);
    box.textContent = "✓";
  } else {
    box.classList.remove(...checkedClasses);
    box.textContent = "";
  }
};

const createTaskItem = (innerHtml: string, checked = false): HTMLLIElement => {
  const item = document.createElement("li");
  item.setAttribute("data-checked", String(checked));
  item.className = TASK_ITEM_CLASS;

  const box = document.createElement("span");
  box.setAttribute("data-checkbox", "");
  box.setAttribute("contenteditable", "false");
  box.className = TASK_CHECKBOX_CLASS;
  paintCheckbox(box, checked);

  const content = document.createElement("div");
  content.setAttribute("data-content", "");
  content.className = "flex-1";
  content.innerHTML = innerHtml || "<br>";

  item.append(box, content);
  return item;
};

/**
 * Normalize persisted task lists after a raw HTML load: re-apply the checkbox
 * classes and check state derived from each item's `data-checked` attribute so
 * round-tripped content renders correctly.
 */
export const normalizeTaskItems = (root: HTMLElement) => {
  root.querySelectorAll<HTMLUListElement>('ul[data-type="taskList"]').forEach((list) => {
    list.className = TASK_LIST_CLASS;
    list.querySelectorAll<HTMLLIElement>(":scope > li").forEach((item) => {
      item.className = TASK_ITEM_CLASS;
      const checked = item.getAttribute("data-checked") === "true";
      let box = item.querySelector<HTMLElement>("[data-checkbox]");
      if (!box) {
        box = document.createElement("span");
        box.setAttribute("data-checkbox", "");
        box.setAttribute("contenteditable", "false");
        item.prepend(box);
      }
      box.className = TASK_CHECKBOX_CLASS;
      box.setAttribute("contenteditable", "false");
      paintCheckbox(box, checked);
    });
  });
};

/** Toggle the checked state of the task item owning `checkbox`. */
export const toggleTaskCheckbox = (checkbox: HTMLElement) => {
  const item = checkbox.closest("li");
  if (!item) return;
  const checked = item.getAttribute("data-checked") !== "true";
  item.setAttribute("data-checked", String(checked));
  paintCheckbox(checkbox, checked);
};

export const commands = {
  toggleBold: () => exec("bold"),
  toggleItalic: () => exec("italic"),
  toggleUnderline: () => exec("underline"),
  toggleStrike: () => exec("strikeThrough"),
  toggleSubscript: () => exec("subscript"),
  toggleSuperscript: () => exec("superscript"),

  setColor: (color: string) => {
    enableCssStyling();
    exec("foreColor", color);
  },
  unsetColor: (root: HTMLElement) => clearInlineStyle(root, "color"),

  setHighlight: (color: string) => {
    enableCssStyling();
    exec("hiliteColor", color);
  },
  unsetHighlight: (root: HTMLElement) => clearInlineStyle(root, "backgroundColor"),

  setLink: (root: HTMLElement, href: string) => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      exec("createLink", href);
    } else {
      exec("insertHTML", `<a href="${escapeHtml(href)}">${escapeHtml(href)}</a>`);
    }
    root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noopener noreferrer");
    });
  },
  unsetLink: () => exec("unlink"),

  setParagraph: () => exec("formatBlock", "<p>"),
  toggleHeading: (root: HTMLElement, level: 1 | 2 | 3) => {
    const block = getCurrentBlock(root);
    const active = block?.tagName === `H${level}`;
    exec("formatBlock", active ? "<p>" : `<h${level}>`);
  },
  toggleBlockquote: (root: HTMLElement) => {
    const active = !!closestSelected(root, "blockquote");
    exec("formatBlock", active ? "<p>" : "<blockquote>");
  },
  toggleBulletList: () => exec("insertUnorderedList"),
  toggleOrderedList: () => exec("insertOrderedList"),
  toggleTaskList: (root: HTMLElement) => {
    const taskList = closestSelected(root, 'ul[data-type="taskList"]');
    if (taskList) {
      const fragment = document.createDocumentFragment();
      taskList.querySelectorAll<HTMLLIElement>(":scope > li").forEach((item) => {
        const paragraph = document.createElement("p");
        const content = item.querySelector<HTMLElement>("[data-content]") ?? item;
        paragraph.innerHTML = content.innerHTML || "<br>";
        fragment.appendChild(paragraph);
      });
      const firstParagraph = fragment.firstChild as HTMLElement | null;
      taskList.replaceWith(fragment);
      if (firstParagraph) {
        placeCaretAtStart(firstParagraph);
      }
      return;
    }

    const block = getCurrentBlock(root);
    if (!block) return;
    const list = document.createElement("ul");
    list.setAttribute("data-type", "taskList");
    list.className = TASK_LIST_CLASS;
    const item = createTaskItem(block.innerHTML || "");
    list.appendChild(item);
    block.replaceWith(list);
    const content = item.querySelector<HTMLElement>("[data-content]");
    if (content) {
      placeCaretAtEnd(content);
    }
  },

  setTextAlign: (align: EditorAlignType) => {
    const map: Record<EditorAlignType, string> = {
      left: "justifyLeft",
      center: "justifyCenter",
      right: "justifyRight",
      justify: "justifyFull",
    };
    exec(map[align]);
  },

  insertHTML: (html: string) => exec("insertHTML", html),

  insertContentAt: (root: HTMLElement, position: number, html: string) => {
    if (position <= 0) {
      placeCaretAtStart(root);
    } else {
      placeCaretAtEnd(root);
    }
    exec("insertHTML", html);
  },

  insertYouTube: (embedUrl: string) => {
    const html = `<div data-youtube contenteditable="false" class="${YOUTUBE_CLASS}"><iframe class="h-full w-full rounded" src="${escapeHtml(
      embedUrl,
    )}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;
    exec("insertHTML", html);
  },

  deleteSelection: () => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      selection.deleteFromDocument();
    }
  },

  undo: () => exec("undo"),
  redo: () => exec("redo"),
};
