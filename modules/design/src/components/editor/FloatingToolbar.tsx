import { cn } from "@module/design/utils/cn";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getSelectionRect } from "./commands";
import { useEditorContext } from "./EditorContext";
import {
  EditorBlockquote,
  EditorBold,
  EditorColor,
  EditorHighlight,
  EditorItalic,
  EditorLink,
  EditorParagraph,
  EditorStrike,
  EditorSubscript,
  EditorSuperscript,
  EditorUnderline,
} from "./Toolbar";

type FloatingPositionType = { top: number; left: number };

export type FloatingToolbarPropsType = {
  className?: string;
};

/**
 * Bubble menu that floats above the current text selection. Appears only while
 * a non-empty range is selected inside an editable editor. Rendered into a
 * portal and positioned with fixed viewport coordinates — no CSS file required.
 */
export const FloatingToolbar = ({ className }: FloatingToolbarPropsType) => {
  const { editor, editable } = useEditorContext();
  const [position, setPosition] = useState<FloatingPositionType | null>(null);

  useEffect(() => {
    const update = () => {
      const element = editor.element;
      const selection = window.getSelection();
      if (
        !editable ||
        !element ||
        !selection ||
        selection.rangeCount === 0 ||
        selection.isCollapsed ||
        !element.contains(selection.anchorNode)
      ) {
        setPosition(null);
        return;
      }
      const rect = getSelectionRect();
      if (!rect) {
        setPosition(null);
        return;
      }
      setPosition({ top: rect.top, left: rect.left + rect.width / 2 });
    };

    document.addEventListener("selectionchange", update);
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      document.removeEventListener("selectionchange", update);
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [editor, editable]);

  if (!position || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      data-slot="editor-floating-toolbar"
      onMouseDown={(event) => event.preventDefault()}
      style={{ top: position.top, left: position.left, transform: "translate(-50%, calc(-100% - 8px))" }}
      className={cn(
        "fixed z-50 flex items-center gap-1 rounded bg-popover p-1 text-popover-foreground shadow-md",
        className,
      )}
    >
      <EditorParagraph />
      <EditorBold />
      <EditorItalic />
      <EditorUnderline />
      <EditorStrike />
      <EditorSubscript />
      <EditorSuperscript />
      <EditorColor />
      <EditorHighlight />
      <EditorBlockquote />
      <EditorLink />
    </div>,
    document.body,
  );
};

FloatingToolbar.displayName = "FloatingToolbar";
