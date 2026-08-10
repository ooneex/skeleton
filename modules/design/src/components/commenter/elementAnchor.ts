import type { CommenterAnchorType } from "./types";

/** Marks the widget's own DOM so it can never be targeted or captured. */
export const COMMENTER_ATTRIBUTE = "data-commenter";

const MAX_SELECTOR_DEPTH = 8;

const escapeSelector = (value: string): string => {
  return typeof CSS !== "undefined" && CSS.escape ? CSS.escape(value) : value.replace(/([^\w-])/g, "\\$1");
};

/** `node`'s 1-based position among its same-tag siblings, and how many of them there are. */
const positionAmongTwins = (parent: Element, node: Element): { position: number; total: number } => {
  const children = parent.children;
  let position = 0;
  let total = 0;

  for (let index = 0; index < children.length; index += 1) {
    const child = children[index];
    if (child?.tagName !== node.tagName) continue;
    total += 1;
    if (child === node) position = total;
  }

  return { position, total };
};

/**
 * Build a selector for `element`, walking up until an id or `data-testid`
 * pins it down. Falls back to `:nth-of-type()` steps when nothing is stable.
 */
export const buildSelector = (element: Element): string => {
  // Collected innermost-first — pushing and reversing once beats unshifting per step.
  const steps: string[] = [];
  let node: Element | null = element;

  while (node && node !== document.documentElement && steps.length < MAX_SELECTOR_DEPTH) {
    const testId = node.getAttribute("data-testid");
    if (testId) {
      steps.push(`[data-testid="${testId}"]`);
      break;
    }

    if (node.id) {
      steps.push(`#${escapeSelector(node.id)}`);
      break;
    }

    const tag = node.tagName.toLowerCase();
    const parent: HTMLElement | null = node.parentElement;

    if (!parent) {
      steps.push(tag);
      break;
    }

    const twins = positionAmongTwins(parent, node);
    steps.push(twins.total > 1 ? `${tag}:nth-of-type(${twins.position})` : tag);
    node = parent;
  }

  return steps.reverse().join(" > ");
};

/** Short, readable name for the targeted element — shown next to the draft. */
export const buildLabel = (element: Element): string => {
  const tag = element.tagName.toLowerCase();
  const testId = element.getAttribute("data-testid");
  if (testId) return `${tag}[${testId}]`;
  if (element.id) return `${tag}#${element.id}`;

  const className = typeof element.className === "string" ? element.className.trim().split(/\s+/)[0] : undefined;

  return className ? `${tag}.${className}` : tag;
};

/** Turn a click on `element` into a resolvable anchor. */
export const createAnchor = (element: Element, clientX: number, clientY: number): CommenterAnchorType => {
  const rect = element.getBoundingClientRect();

  return {
    selector: buildSelector(element),
    label: buildLabel(element),
    offsetX: rect.width > 0 ? (clientX - rect.left) / rect.width : 0.5,
    offsetY: rect.height > 0 ? (clientY - rect.top) / rect.height : 0.5,
    pageX: clientX + window.scrollX,
    pageY: clientY + window.scrollY,
  };
};

/**
 * Resolve an anchor back to a viewport position. Returns `null` when the
 * target is gone and the recorded document point is scrolled out of view.
 */
export const resolveAnchor = (anchor: CommenterAnchorType): { x: number; y: number } | null => {
  const element = anchor.selector ? safeQuery(anchor.selector) : null;

  if (element) {
    const rect = element.getBoundingClientRect();
    return { x: rect.left + rect.width * anchor.offsetX, y: rect.top + rect.height * anchor.offsetY };
  }

  return { x: anchor.pageX - window.scrollX, y: anchor.pageY - window.scrollY };
};

const safeQuery = (selector: string): Element | null => {
  try {
    return document.querySelector(selector);
  } catch {
    return null;
  }
};

/** `true` when the event happened inside the commenter UI itself. */
export const isCommenterElement = (target: EventTarget | null): boolean => {
  return target instanceof Element && target.closest(`[${COMMENTER_ATTRIBUTE}]`) !== null;
};
