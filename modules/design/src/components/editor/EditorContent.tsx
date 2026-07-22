import { cn } from "@module/design/utils/cn";
import { useEffect, useRef } from "react";
import { normalizeTaskItems } from "./commands";
import { useEditorContext } from "./EditorContext";

/**
 * Tailwind-only prose styling for the editable surface. Every rule targets a
 * child element via arbitrary variants so no external stylesheet is needed.
 */
const PROSE_CLASSES = cn(
  "outline-none",
  // Selection highlight
  "selection:bg-primary selection:text-light",
  // The first block never carries a top margin
  "[&>*:first-child]:mt-0",
  // Headings
  "[&_h1]:my-4 [&_h1]:text-xl [&_h1]:leading-tight [&_h1]:font-bold",
  "[&_h2]:my-4 [&_h2]:text-lg [&_h2]:leading-tight [&_h2]:font-semibold",
  "[&_h3]:my-4 [&_h3]:text-base [&_h3]:leading-tight [&_h3]:font-semibold",
  // Lists (task lists opt out via their own flex/list-none classes)
  "[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:my-0.5",
  // Blockquote
  "[&_blockquote]:my-2 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic",
  // Links
  "[&_a]:cursor-pointer [&_a]:text-secondary-400 [&_a]:underline",
  // Images
  "[&_img]:mx-auto [&_img]:my-6 [&_img]:max-w-full [&_img]:rounded",
  // Placeholder rendered via ::before when the document is empty (float keeps it
  // on the first line and respects the surrounding padding — no wrapper needed)
  "data-[empty=true]:before:pointer-events-none data-[empty=true]:before:float-left data-[empty=true]:before:h-0",
  "data-[empty=true]:before:text-sm data-[empty=true]:before:italic data-[empty=true]:before:text-muted-foreground/50",
  "data-[empty=true]:before:content-[attr(data-placeholder)]",
);

export type EditorContentPropsType = {
  className?: string;
};

/**
 * The editable surface. Registers its DOM node with the editor controller,
 * seeds the initial content once, and forwards native events to the shared
 * handlers. Use standalone with `<Editor.Content />` when composing manually.
 */
export const EditorContent = ({ className }: EditorContentPropsType) => {
  const {
    editable,
    placeholder,
    initialContent,
    state,
    registerElement,
    handleInput,
    handleKeyDown,
    handleClick,
    handlePaste,
  } = useEditorContext();
  const ref = useRef<HTMLDivElement>(null);
  const seededRef = useRef(false);
  // The initial content seeds the surface exactly once; later prop changes must
  // never clobber in-progress edits, so it is read through a ref.
  const initialContentRef = useRef(initialContent);

  useEffect(() => {
    const element = ref.current;
    if (!element || seededRef.current) return;
    seededRef.current = true;
    // Prefer <p> over the browser default <div> for new blocks so block-level
    // commands and the serialized HTML stay consistent across browsers.
    try {
      document.execCommand("defaultParagraphSeparator", false, "p");
    } catch {
      // Not supported everywhere; harmless to skip.
    }
    element.innerHTML = initialContentRef.current || "<p><br></p>";
    normalizeTaskItems(element);
    registerElement(element);
    return () => registerElement(null);
  }, [registerElement]);

  return (
    // biome-ignore lint/a11y/useSemanticElements: a contentEditable rich-text surface cannot be an <input>/<textarea>
    <div
      ref={ref}
      data-slot="editor-content"
      tabIndex={0}
      role="textbox"
      aria-multiline="true"
      contentEditable={editable}
      suppressContentEditableWarning
      spellCheck
      data-empty={state.isEmpty}
      data-placeholder={placeholder}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      onPaste={handlePaste}
      className={cn(PROSE_CLASSES, className)}
    />
  );
};

EditorContent.displayName = "EditorContent";
