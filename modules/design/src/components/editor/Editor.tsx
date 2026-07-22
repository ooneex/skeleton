import { SimpleColorPicker } from "@module/design/components/color/SimpleColorPicker";
import { cn } from "@module/design/utils/cn";
import { useCallback, useImperativeHandle, useRef } from "react";
import { EditorContent } from "./EditorContent";
import { EditorProvider } from "./EditorContext";
import { FloatingToolbar } from "./FloatingToolbar";
import { LinkDialog } from "./LinkDialog";
import { SlashMenu } from "./SlashMenu";
import {
  EditorAlign,
  EditorBlockquote,
  EditorBold,
  EditorBulletList,
  EditorColor,
  EditorHeading,
  EditorHighlight,
  EditorItalic,
  EditorLink,
  EditorOrderedList,
  EditorParagraph,
  EditorRedo,
  EditorStrike,
  EditorSubscript,
  EditorSuperscript,
  EditorTaskList,
  EditorToolbar,
  EditorUnderline,
  EditorUndo,
  EditorYouTube,
} from "./Toolbar";
import type { EditorControllerType } from "./types";
import { YouTubeDialog } from "./YouTubeDialog";

/** Imperative handle exposed through the editor `ref`. */
export type EditorRefType = {
  getContent: () => string;
  getEditor: () => EditorControllerType | null;
  getSelection: () => string;
  setContent: (content: string) => void;
  insertContent: (content: string) => void;
  insertContentAt: (position: number, content: string) => void;
  deleteSelection: () => void;
  focus: () => void;
  blur: () => void;
};

export type EditorPropsType = {
  placeholder?: string;
  content?: string;
  onContentChange?: (content: string) => void;
  onSelectionChange?: (data: { content: string; editor: EditorControllerType }) => void;
  onSubmit?: () => void;
  editable?: boolean;
  ref?: React.RefObject<EditorRefType | null>;
  className?: string;
  showHeadings?: boolean;
  showHistory?: boolean;
  showMedia?: boolean;
  showSlashMenu?: boolean;
  showToolbar?: boolean;
  plainText?: boolean;
};

/** Read the currently selected text from an editor controller. */
export const getSelectionText = (editor: EditorControllerType): string => editor.getSelectionText();

/**
 * A rich-text editor built directly on the browser's `contentEditable`, with no
 * third-party editor engine and no external stylesheet — all styling is
 * Tailwind. This is the convenience wrapper: pass props and it composes the
 * provider, content surface, floating toolbar, slash menu, and dialogs for you.
 *
 * For custom layouts, use the attached compound parts instead:
 *
 * ```tsx
 * <Editor.Root content={html} onContentChange={setHtml}>
 *   <Editor.Toolbar />
 *   <Editor.Content className="min-h-40 rounded ring ring-border p-2" />
 *   <Editor.SlashMenu />
 * </Editor.Root>
 * ```
 */
const EditorRoot = ({
  content,
  placeholder,
  editable = true,
  ref,
  onContentChange,
  onSelectionChange,
  onSubmit,
  className,
  showHeadings = true,
  showHistory = true,
  showMedia = true,
  showSlashMenu = true,
  showToolbar = true,
  plainText = false,
}: EditorPropsType) => {
  const controllerRef = useRef<EditorControllerType | null>(null);

  const resolvedPlaceholder =
    placeholder ?? (showSlashMenu && !plainText ? "Type something or '/' to start" : "Type something...");

  const captureController = useCallback((controller: EditorControllerType) => {
    controllerRef.current = controller;
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      getContent: () => controllerRef.current?.getHTML() ?? "",
      getEditor: () => controllerRef.current,
      getSelection: () => controllerRef.current?.getSelectionText() ?? "",
      setContent: (value) => controllerRef.current?.setContent(value),
      insertContent: (value) => controllerRef.current?.insertContent(value),
      insertContentAt: (position, value) => controllerRef.current?.insertContentAt(position, value),
      deleteSelection: () => controllerRef.current?.deleteSelection(),
      focus: () => controllerRef.current?.focus(),
      blur: () => controllerRef.current?.blur(),
    }),
    [],
  );

  const showFloatingToolbar = editable && showToolbar && !plainText;
  const showSlash = showSlashMenu && !plainText;
  const showMediaDialogs = showMedia && !plainText;

  return (
    <EditorProvider
      content={content}
      editable={editable}
      plainText={plainText}
      placeholder={resolvedPlaceholder}
      showHeadings={showHeadings}
      showHistory={showHistory}
      showMedia={showMedia}
      showSlashMenu={showSlash}
      onContentChange={onContentChange}
      onSelectionChange={onSelectionChange}
      onSubmit={onSubmit}
      controllerRef={captureController}
    >
      {showFloatingToolbar ? <FloatingToolbar /> : null}
      {/* react-call roots for the toolbar's imperative color picker and link dialog. */}
      {showFloatingToolbar ? <SimpleColorPicker /> : null}
      {showFloatingToolbar ? <LinkDialog /> : null}
      {showMediaDialogs ? <YouTubeDialog /> : null}
      <EditorContent className={cn("h-full w-full", className)} />
      {showSlash ? <SlashMenu /> : null}
    </EditorProvider>
  );
};

/**
 * Compound component. The sub-parts are attached to `Editor` so a single import
 * exposes the whole API. `Editor` itself is the ready-made, prop-driven editor;
 * `Editor.Root` + the parts let you build a custom layout.
 */
export const Editor = Object.assign(EditorRoot, {
  Root: EditorProvider,
  Content: EditorContent,
  Toolbar: EditorToolbar,
  FloatingToolbar,
  SlashMenu,
  LinkDialog,
  YouTubeDialog,
  Bold: EditorBold,
  Italic: EditorItalic,
  Underline: EditorUnderline,
  Strike: EditorStrike,
  Subscript: EditorSubscript,
  Superscript: EditorSuperscript,
  Paragraph: EditorParagraph,
  Heading: EditorHeading,
  Blockquote: EditorBlockquote,
  BulletList: EditorBulletList,
  OrderedList: EditorOrderedList,
  TaskList: EditorTaskList,
  Align: EditorAlign,
  Color: EditorColor,
  Highlight: EditorHighlight,
  Link: EditorLink,
  YouTube: EditorYouTube,
  Undo: EditorUndo,
  Redo: EditorRedo,
});

EditorRoot.displayName = "Editor";
