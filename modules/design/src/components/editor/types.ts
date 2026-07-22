/** A block-level node type the editor can produce. */
export type EditorBlockType = "paragraph" | "heading" | "blockquote" | "bulletList" | "orderedList" | "taskList";

/** An inline mark the editor can apply to a selection. */
export type EditorMarkType =
  | "bold"
  | "italic"
  | "underline"
  | "strike"
  | "subscript"
  | "superscript"
  | "link"
  | "highlight"
  | "textStyle";

/** Anything the {@link EditorControllerType.isActive} helper understands. */
export type EditorActiveNameType = EditorBlockType | EditorMarkType;

/** Horizontal text alignment. */
export type EditorAlignType = "left" | "center" | "right" | "justify";

/**
 * A reactive snapshot of the editor's current selection state. Recomputed on
 * every selection/content change and consumed by the toolbars to drive their
 * pressed/disabled states.
 */
export type EditorStateType = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strike: boolean;
  subscript: boolean;
  superscript: boolean;
  link: boolean;
  blockquote: boolean;
  paragraph: boolean;
  headingLevel: 1 | 2 | 3 | null;
  bulletList: boolean;
  orderedList: boolean;
  taskList: boolean;
  align: EditorAlignType;
  /** The inline text color under the caret, or `""` when none is set. */
  color: string;
  /** The highlight color under the caret, or `""` when none is set. */
  highlight: string;
  canUndo: boolean;
  canRedo: boolean;
  isEmpty: boolean;
};

/** The empty/default selection state used before the editor mounts. */
export const EMPTY_EDITOR_STATE: EditorStateType = {
  bold: false,
  italic: false,
  underline: false,
  strike: false,
  subscript: false,
  superscript: false,
  link: false,
  blockquote: false,
  paragraph: false,
  headingLevel: null,
  bulletList: false,
  orderedList: false,
  taskList: false,
  align: "left",
  color: "",
  highlight: "",
  canUndo: false,
  canRedo: false,
  isEmpty: true,
};

/**
 * The imperative controller for a single editor instance. This is the tiptap
 * `Editor` replacement: a thin façade over the `contentEditable` DOM element
 * exposing selection queries and formatting commands. Handed to toolbar buttons
 * and returned from the editor ref.
 */
export type EditorControllerType = {
  /** The live `contentEditable` element, or `null` before it mounts. */
  readonly element: HTMLDivElement | null;
  /** Whether the given mark/block is active at the current selection. */
  isActive: (name: EditorActiveNameType, attributes?: { level?: number; align?: EditorAlignType }) => boolean;
  /** Read attributes (e.g. link `href`, `textStyle` color) at the selection. */
  getAttributes: (name: EditorActiveNameType) => Record<string, string>;
  /** Serialize the document to HTML (empty string when the document is empty). */
  getHTML: () => string;
  /** The plain text currently selected. */
  getSelectionText: () => string;
  focus: () => void;
  blur: () => void;
  setContent: (html: string) => void;
  insertContent: (html: string) => void;
  insertContentAt: (position: number, html: string) => void;
  deleteSelection: () => void;

  toggleBold: () => void;
  toggleItalic: () => void;
  toggleUnderline: () => void;
  toggleStrike: () => void;
  toggleSubscript: () => void;
  toggleSuperscript: () => void;

  setColor: (color: string) => void;
  unsetColor: () => void;
  setHighlight: (color: string) => void;
  unsetHighlight: () => void;

  setLink: (href: string) => void;
  unsetLink: () => void;

  setParagraph: () => void;
  toggleHeading: (level: 1 | 2 | 3) => void;
  toggleBlockquote: () => void;
  toggleBulletList: () => void;
  toggleOrderedList: () => void;
  toggleTaskList: () => void;

  setTextAlign: (align: EditorAlignType) => void;
  unsetTextAlign: () => void;

  undo: () => void;
  redo: () => void;

  insertYouTube: (url: string) => void;
};
