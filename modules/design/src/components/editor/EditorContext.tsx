import { getEmbedUrl } from "@ooneex/youtube-utils";
import {
  createContext,
  type ClipboardEvent as ReactClipboardEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  commands,
  computeEditorState,
  getActiveLinkHref,
  isEditorEmpty,
  normalizeTaskItems,
  toggleTaskCheckbox,
} from "./commands";
import { type EditorControllerType, type EditorStateType, EMPTY_EDITOR_STATE } from "./types";

type EditorContextValue = {
  editor: EditorControllerType;
  state: EditorStateType;
  editable: boolean;
  plainText: boolean;
  placeholder: string;
  showHeadings: boolean;
  showHistory: boolean;
  showMedia: boolean;
  showSlashMenu: boolean;
  initialContent: string;
  registerElement: (element: HTMLDivElement | null) => void;
  refresh: () => void;
  handleInput: () => void;
  handleKeyDown: (event: ReactKeyboardEvent<HTMLDivElement>) => void;
  handleClick: (event: ReactMouseEvent<HTMLDivElement>) => void;
  handlePaste: (event: ReactClipboardEvent<HTMLDivElement>) => void;
};

const EditorContext = createContext<EditorContextValue | null>(null);

/** Access the editor controller and reactive state from any child component. */
export const useEditorContext = (): EditorContextValue => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("Editor components must be rendered inside <Editor> or <Editor.Root>.");
  }
  return context;
};

export type EditorProviderPropsType = {
  content?: string;
  editable?: boolean;
  plainText?: boolean;
  placeholder?: string;
  showHeadings?: boolean;
  showHistory?: boolean;
  showMedia?: boolean;
  showSlashMenu?: boolean;
  onContentChange?: (content: string) => void;
  onSelectionChange?: (data: { content: string; editor: EditorControllerType }) => void;
  onSubmit?: () => void;
  /** Receives the imperative controller once it is created. */
  controllerRef?: (controller: EditorControllerType) => void;
  children: ReactNode;
};

/**
 * Owns a single editor instance: the reactive selection state and the
 * imperative controller that wraps the `contentEditable` element. Shares both
 * through context so the content area, toolbars, and slash menu stay in sync
 * without prop drilling.
 */
export const EditorProvider = ({
  content = "",
  editable = true,
  plainText = false,
  placeholder = "",
  showHeadings = true,
  showHistory = true,
  showMedia = true,
  showSlashMenu = true,
  onContentChange,
  onSelectionChange,
  onSubmit,
  controllerRef,
  children,
}: EditorProviderPropsType) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<EditorStateType>(EMPTY_EDITOR_STATE);
  // The initial content is captured once; later `content` prop changes are
  // intentionally ignored so they never clobber in-progress edits.
  const initialContentRef = useRef(content);

  const onContentChangeRef = useRef(onContentChange);
  const onSelectionChangeRef = useRef(onSelectionChange);
  const onSubmitRef = useRef(onSubmit);
  onContentChangeRef.current = onContentChange;
  onSelectionChangeRef.current = onSelectionChange;
  onSubmitRef.current = onSubmit;

  const getHTML = useCallback(() => {
    const element = elementRef.current;
    if (!element || isEditorEmpty(element)) {
      return "";
    }
    return element.innerHTML.trim();
  }, []);

  const refresh = useCallback(() => {
    const element = elementRef.current;
    if (element) {
      setState(computeEditorState(element));
    }
  }, []);

  const emitChange = useCallback(() => {
    onContentChangeRef.current?.(getHTML());
  }, [getHTML]);

  const run = useCallback(
    (fn: (root: HTMLDivElement) => void) => {
      const element = elementRef.current;
      if (!element) return;
      element.focus();
      fn(element);
      refresh();
      emitChange();
    },
    [refresh, emitChange],
  );

  const editor = useMemo<EditorControllerType>(
    () => ({
      get element() {
        return elementRef.current;
      },
      isActive: (name, attributes) => {
        const element = elementRef.current;
        if (!element) return false;
        const snapshot = computeEditorState(element);
        switch (name) {
          case "bold":
            return snapshot.bold;
          case "italic":
            return snapshot.italic;
          case "underline":
            return snapshot.underline;
          case "strike":
            return snapshot.strike;
          case "subscript":
            return snapshot.subscript;
          case "superscript":
            return snapshot.superscript;
          case "link":
            return snapshot.link;
          case "highlight":
            return !!snapshot.highlight;
          case "textStyle":
            return !!snapshot.color;
          case "blockquote":
            return snapshot.blockquote;
          case "paragraph":
            return attributes?.align ? snapshot.paragraph && snapshot.align === attributes.align : snapshot.paragraph;
          case "heading":
            return attributes?.level ? snapshot.headingLevel === attributes.level : snapshot.headingLevel !== null;
          case "bulletList":
            return snapshot.bulletList;
          case "orderedList":
            return snapshot.orderedList;
          case "taskList":
            return snapshot.taskList;
          default:
            return false;
        }
      },
      getAttributes: (name): Record<string, string> => {
        const element = elementRef.current;
        if (!element) return {};
        if (name === "link") {
          const href = getActiveLinkHref(element);
          return href ? { href } : {};
        }
        if (name === "textStyle") {
          return { color: computeEditorState(element).color };
        }
        if (name === "highlight") {
          return { color: computeEditorState(element).highlight };
        }
        return {};
      },
      getHTML,
      getSelectionText: () => {
        const element = elementRef.current;
        const selection = window.getSelection();
        if (!element || !selection || selection.rangeCount === 0 || !element.contains(selection.anchorNode)) {
          return "";
        }
        return selection.toString().trim();
      },
      focus: () => elementRef.current?.focus(),
      blur: () => elementRef.current?.blur(),
      setContent: (html) => {
        const element = elementRef.current;
        if (!element) return;
        element.innerHTML = html || "<p><br></p>";
        normalizeTaskItems(element);
        refresh();
        emitChange();
      },
      insertContent: (html) => run(() => commands.insertHTML(html)),
      insertContentAt: (position, html) => run((root) => commands.insertContentAt(root, position, html)),
      deleteSelection: () => run(() => commands.deleteSelection()),

      toggleBold: () => run(() => commands.toggleBold()),
      toggleItalic: () => run(() => commands.toggleItalic()),
      toggleUnderline: () => run(() => commands.toggleUnderline()),
      toggleStrike: () => run(() => commands.toggleStrike()),
      toggleSubscript: () => run(() => commands.toggleSubscript()),
      toggleSuperscript: () => run(() => commands.toggleSuperscript()),

      setColor: (color) => run(() => commands.setColor(color)),
      unsetColor: () => run((root) => commands.unsetColor(root)),
      setHighlight: (color) => run(() => commands.setHighlight(color)),
      unsetHighlight: () => run((root) => commands.unsetHighlight(root)),

      setLink: (href) => run((root) => commands.setLink(root, href)),
      unsetLink: () => run(() => commands.unsetLink()),

      setParagraph: () => run(() => commands.setParagraph()),
      toggleHeading: (level) => run((root) => commands.toggleHeading(root, level)),
      toggleBlockquote: () => run((root) => commands.toggleBlockquote(root)),
      toggleBulletList: () => run(() => commands.toggleBulletList()),
      toggleOrderedList: () => run(() => commands.toggleOrderedList()),
      toggleTaskList: () => run((root) => commands.toggleTaskList(root)),

      setTextAlign: (align) => run(() => commands.setTextAlign(align)),
      unsetTextAlign: () => run(() => commands.setTextAlign("left")),

      undo: () => run(() => commands.undo()),
      redo: () => run(() => commands.redo()),

      insertYouTube: (url) => {
        const embedUrl = getEmbedUrl(url);
        if (!embedUrl) return;
        run(() => commands.insertYouTube(embedUrl));
      },
    }),
    [getHTML, refresh, emitChange, run],
  );

  useEffect(() => {
    controllerRef?.(editor);
  }, [controllerRef, editor]);

  const registerElement = useCallback(
    (element: HTMLDivElement | null) => {
      elementRef.current = element;
      if (element) {
        refresh();
      }
    },
    [refresh],
  );

  // Track selection changes to keep the toolbars and consumers in sync.
  useEffect(() => {
    const handleSelectionChange = () => {
      const element = elementRef.current;
      const selection = window.getSelection();
      if (!element || !selection || selection.rangeCount === 0 || !element.contains(selection.anchorNode)) {
        return;
      }
      setState(computeEditorState(element));
      onSelectionChangeRef.current?.({ content: selection.toString().trim(), editor });
    };
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => document.removeEventListener("selectionchange", handleSelectionChange);
  }, [editor]);

  const handleInput = useCallback(() => {
    refresh();
    emitChange();
  }, [refresh, emitChange]);

  const handleKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !event.shiftKey && onSubmitRef.current) {
      event.preventDefault();
      onSubmitRef.current();
    }
  }, []);

  const handleClick = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      const checkbox = target.closest<HTMLElement>("[data-checkbox]");
      if (checkbox) {
        event.preventDefault();
        toggleTaskCheckbox(checkbox);
        refresh();
        emitChange();
        return;
      }
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (anchor && (!editable || event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        window.open(anchor.href, "_blank", "noopener,noreferrer");
      }
    },
    [editable, refresh, emitChange],
  );

  const handlePaste = useCallback(
    (event: ReactClipboardEvent<HTMLDivElement>) => {
      if (!plainText) return;
      event.preventDefault();
      const text = event.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
    },
    [plainText],
  );

  const value = useMemo<EditorContextValue>(
    () => ({
      editor,
      state,
      editable,
      plainText,
      placeholder,
      showHeadings,
      showHistory,
      showMedia,
      showSlashMenu,
      initialContent: initialContentRef.current,
      registerElement,
      refresh,
      handleInput,
      handleKeyDown,
      handleClick,
      handlePaste,
    }),
    [
      editor,
      state,
      editable,
      plainText,
      placeholder,
      showHeadings,
      showHistory,
      showMedia,
      showSlashMenu,
      registerElement,
      refresh,
      handleInput,
      handleKeyDown,
      handleClick,
      handlePaste,
    ],
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};
