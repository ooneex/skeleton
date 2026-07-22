import { Button } from "@module/design/components/button/Button";
import { RedoIcon } from "@module/design/icons/outline/arrows/sm/RedoIcon";
import { UndoIcon } from "@module/design/icons/outline/arrows/sm/UndoIcon";
import { Heading1Icon } from "@module/design/icons/outline/design-development/sm/Heading1Icon";
import { Heading2Icon } from "@module/design/icons/outline/design-development/sm/Heading2Icon";
import { Heading3Icon } from "@module/design/icons/outline/design-development/sm/Heading3Icon";
import { TextAlignCenterIcon } from "@module/design/icons/outline/design-development/sm/TextAlignCenterIcon";
import { TextAlignJustifyIcon } from "@module/design/icons/outline/design-development/sm/TextAlignJustifyIcon";
import { TextAlignLeftIcon } from "@module/design/icons/outline/design-development/sm/TextAlignLeftIcon";
import { TextAlignRightIcon } from "@module/design/icons/outline/design-development/sm/TextAlignRightIcon";
import { TextItalicIcon } from "@module/design/icons/outline/design-development/sm/TextItalicIcon";
import { TextStrikethroughIcon } from "@module/design/icons/outline/design-development/sm/TextStrikethroughIcon";
import { TextUnderlineIcon } from "@module/design/icons/outline/design-development/sm/TextUnderlineIcon";
import { BlockquoteIcon } from "@module/design/icons/outline/editing/sm/BlockquoteIcon";
import { OrderedListIcon } from "@module/design/icons/outline/editing/sm/OrderedListIcon";
import { ParagraphIcon } from "@module/design/icons/outline/editing/sm/ParagraphIcon";
import { SubscriptIcon } from "@module/design/icons/outline/editing/sm/SubscriptIcon";
import { SuperscriptIcon } from "@module/design/icons/outline/editing/sm/SuperscriptIcon";
import { TextBoldIcon } from "@module/design/icons/outline/editing/sm/TextBoldIcon";
import { VideoIcon } from "@module/design/icons/outline/photography-video/sm/VideoIcon";
import { BulletListIcon } from "@module/design/icons/outline/ui-layout/sm/BulletListIcon";
import { CheckListIcon } from "@module/design/icons/outline/ui-layout/sm/CheckListIcon";
import { cn } from "@module/design/utils/cn";
import { type ComponentType, type SVGProps, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { restoreSelection, saveSelection } from "./commands";
import { useEditorContext } from "./EditorContext";
import type { EditorControllerType } from "./types";
import { openYouTubeDialog } from "./YouTubeDialog";

type SlashGroupType = "Headings" | "Text Formatting" | "Alignment" | "Lists" | "Blocks" | "Media" | "History";

type SlashMenuItemType = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  group: SlashGroupType;
  aliases?: string[];
  command: (editor: EditorControllerType) => void | Promise<void>;
};

const SLASH_MENU_ITEMS: SlashMenuItemType[] = [
  {
    title: "Heading 1",
    description: "Large section heading",
    icon: Heading1Icon,
    group: "Headings",
    aliases: ["h1", "heading1"],
    command: (editor) => editor.toggleHeading(1),
  },
  {
    title: "Heading 2",
    description: "Medium section heading",
    icon: Heading2Icon,
    group: "Headings",
    aliases: ["h2", "heading2"],
    command: (editor) => editor.toggleHeading(2),
  },
  {
    title: "Heading 3",
    description: "Small section heading",
    icon: Heading3Icon,
    group: "Headings",
    aliases: ["h3", "heading3"],
    command: (editor) => editor.toggleHeading(3),
  },
  {
    title: "Bold",
    description: "Make text bold",
    icon: TextBoldIcon,
    group: "Text Formatting",
    aliases: ["strong"],
    command: (editor) => editor.toggleBold(),
  },
  {
    title: "Italic",
    description: "Make text italic",
    icon: TextItalicIcon,
    group: "Text Formatting",
    aliases: ["em", "emphasis"],
    command: (editor) => editor.toggleItalic(),
  },
  {
    title: "Underline",
    description: "Underline text",
    icon: TextUnderlineIcon,
    group: "Text Formatting",
    command: (editor) => editor.toggleUnderline(),
  },
  {
    title: "Strikethrough",
    description: "Strike through text",
    icon: TextStrikethroughIcon,
    group: "Text Formatting",
    aliases: ["strike", "del"],
    command: (editor) => editor.toggleStrike(),
  },
  {
    title: "Subscript",
    description: "Make text subscript",
    icon: SubscriptIcon,
    group: "Text Formatting",
    aliases: ["sub"],
    command: (editor) => editor.toggleSubscript(),
  },
  {
    title: "Superscript",
    description: "Make text superscript",
    icon: SuperscriptIcon,
    group: "Text Formatting",
    aliases: ["sup"],
    command: (editor) => editor.toggleSuperscript(),
  },
  {
    title: "Align Left",
    description: "Align text to the left",
    icon: TextAlignLeftIcon,
    group: "Alignment",
    aliases: ["left"],
    command: (editor) => editor.setTextAlign("left"),
  },
  {
    title: "Align Center",
    description: "Center align text",
    icon: TextAlignCenterIcon,
    group: "Alignment",
    aliases: ["center"],
    command: (editor) => editor.setTextAlign("center"),
  },
  {
    title: "Align Right",
    description: "Align text to the right",
    icon: TextAlignRightIcon,
    group: "Alignment",
    aliases: ["right"],
    command: (editor) => editor.setTextAlign("right"),
  },
  {
    title: "Justify",
    description: "Justify text",
    icon: TextAlignJustifyIcon,
    group: "Alignment",
    aliases: ["justified"],
    command: (editor) => editor.setTextAlign("justify"),
  },
  {
    title: "Bullet List",
    description: "Create a bullet list",
    icon: BulletListIcon,
    group: "Lists",
    aliases: ["ul", "unordered"],
    command: (editor) => editor.toggleBulletList(),
  },
  {
    title: "Numbered List",
    description: "Create a numbered list",
    icon: OrderedListIcon,
    group: "Lists",
    aliases: ["ol", "ordered"],
    command: (editor) => editor.toggleOrderedList(),
  },
  {
    title: "Task List",
    description: "Create a task list with checkboxes",
    icon: CheckListIcon,
    group: "Lists",
    aliases: ["todo", "checklist"],
    command: (editor) => editor.toggleTaskList(),
  },
  {
    title: "Paragraph",
    description: "Convert to paragraph",
    icon: ParagraphIcon,
    group: "Blocks",
    aliases: ["p", "text", "normal"],
    command: (editor) => editor.setParagraph(),
  },
  {
    title: "Blockquote",
    description: "Create a blockquote",
    icon: BlockquoteIcon,
    group: "Blocks",
    aliases: ["quote"],
    command: (editor) => editor.toggleBlockquote(),
  },
  {
    title: "YouTube",
    description: "Embed a YouTube video",
    icon: VideoIcon,
    group: "Media",
    aliases: ["video", "embed"],
    command: async (editor) => {
      const saved = saveSelection(editor.element);
      const url = await openYouTubeDialog();
      restoreSelection(saved);
      if (url) {
        editor.insertYouTube(url);
      }
    },
  },
  {
    title: "Undo",
    description: "Undo the last action",
    icon: UndoIcon,
    group: "History",
    aliases: ["back", "revert"],
    command: (editor) => editor.undo(),
  },
  {
    title: "Redo",
    description: "Redo the last undone action",
    icon: RedoIcon,
    group: "History",
    aliases: ["forward", "repeat"],
    command: (editor) => editor.redo(),
  },
];

type SlashTriggerType = { node: Text; from: number; to: number };

/**
 * Detect a slash-command trigger at the collapsed caret: a `/` at the start of
 * the block or after whitespace, optionally followed by a query with no spaces.
 */
const detectSlashTrigger = (root: HTMLElement): { query: string; trigger: SlashTriggerType } | null => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !selection.isCollapsed || !root.contains(selection.anchorNode)) {
    return null;
  }
  const node = selection.anchorNode;
  if (!node || node.nodeType !== Node.TEXT_NODE) {
    return null;
  }
  const offset = selection.anchorOffset;
  const before = (node.textContent ?? "").slice(0, offset);
  const match = before.match(/(?:^|\s)\/([^\s/]*)$/);
  if (!match) {
    return null;
  }
  const query = match[1] ?? "";
  return { query, trigger: { node: node as Text, from: offset - query.length - 1, to: offset } };
};

const filterItems = (
  query: string,
  gates: { showHeadings: boolean; showHistory: boolean; showMedia: boolean },
): SlashMenuItemType[] => {
  const lower = query.toLowerCase();
  return SLASH_MENU_ITEMS.filter((item) => {
    if (!gates.showHeadings && item.group === "Headings") return false;
    if (!gates.showHistory && item.group === "History") return false;
    if (!gates.showMedia && item.group === "Media") return false;
    if (!lower) return true;
    return (
      item.title.toLowerCase().includes(lower) ||
      item.description.toLowerCase().includes(lower) ||
      (item.aliases?.some((alias) => alias.toLowerCase().includes(lower)) ?? false)
    );
  });
};

export type SlashMenuPropsType = {
  className?: string;
};

/**
 * Slash-command menu. Watches the editor for a `/` trigger, shows a filterable,
 * keyboard-navigable list of block/format commands, and applies the chosen one
 * by first removing the typed `/query`. Self-contained: it wires its own
 * listeners to the editor element from context.
 */
export const SlashMenu = ({ className }: SlashMenuPropsType) => {
  const { editor, showHeadings, showHistory, showMedia, showSlashMenu } = useEditorContext();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<SlashTriggerType | null>(null);
  const itemRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  const items = useMemo(
    () => (open ? filterItems(query, { showHeadings, showHistory, showMedia }) : []),
    [open, query, showHeadings, showHistory, showMedia],
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
    triggerRef.current = null;
    setPosition(null);
  }, []);

  const applyItem = useCallback(
    (item: SlashMenuItemType | undefined) => {
      if (!item) return;
      const trigger = triggerRef.current;
      if (trigger) {
        const range = document.createRange();
        try {
          range.setStart(trigger.node, trigger.from);
          range.setEnd(trigger.node, trigger.to);
          const selection = window.getSelection();
          selection?.removeAllRanges();
          selection?.addRange(range);
          range.deleteContents();
        } catch {
          // The trigger range may be stale; fall through and run the command.
        }
      }
      close();
      void item.command(editor);
    },
    [close, editor],
  );

  // Detect / re-evaluate the trigger whenever the content or selection changes.
  useEffect(() => {
    const element = editor.element;
    if (!element || !showSlashMenu) return;

    const evaluate = () => {
      const result = detectSlashTrigger(element);
      if (!result) {
        setOpen(false);
        triggerRef.current = null;
        setPosition(null);
        return;
      }
      triggerRef.current = result.trigger;
      setQuery(result.query);
      setOpen(true);
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        setPosition({ top: rect.bottom + 4, left: rect.left });
      }
    };

    element.addEventListener("input", evaluate);
    document.addEventListener("selectionchange", evaluate);
    return () => {
      element.removeEventListener("input", evaluate);
      document.removeEventListener("selectionchange", evaluate);
    };
  }, [editor, showSlashMenu]);

  // Keyboard navigation while the menu is open (capture phase to pre-empt submit).
  useEffect(() => {
    const element = editor.element;
    if (!element) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (!open || items.length === 0) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        event.stopPropagation();
        setActiveIndex((index) => (index + 1) % items.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        event.stopPropagation();
        setActiveIndex((index) => (index + items.length - 1) % items.length);
      } else if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        applyItem(items[activeIndex]);
      } else if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        close();
      }
    };

    element.addEventListener("keydown", onKeyDown, true);
    return () => element.removeEventListener("keydown", onKeyDown, true);
  }, [editor, open, items, activeIndex, applyItem, close]);

  // Reset the highlighted item whenever the result set changes.
  // biome-ignore lint/correctness/useExhaustiveDependencies: reset on new results
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Keep the highlighted item scrolled into view.
  useEffect(() => {
    itemRefs.current.get(activeIndex)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open || !position || items.length === 0 || typeof document === "undefined") {
    return null;
  }

  let flatIndex = -1;
  const groups = items.reduce<Record<string, { item: SlashMenuItemType; index: number }[]>>((accumulator, item) => {
    flatIndex += 1;
    const list = accumulator[item.group] ?? [];
    list.push({ item, index: flatIndex });
    accumulator[item.group] = list;
    return accumulator;
  }, {});

  return createPortal(
    <div
      data-slot="editor-slash-menu"
      onMouseDown={(event) => event.preventDefault()}
      style={{ top: position.top, left: position.left }}
      className={cn(
        "fixed z-50 rounded bg-popover p-1 text-popover-foreground shadow-none ring ring-ring-active",
        className,
      )}
    >
      <div className="max-h-80 min-w-64 overflow-y-auto">
        {Object.entries(groups).map(([group, groupItems]) => (
          <div key={group} className="flex flex-col gap-1 p-1">
            <div className="bg-muted/50 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group}
            </div>
            {groupItems.map(({ item, index }) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.title}
                  ref={(node) => {
                    if (node) {
                      itemRefs.current.set(index, node);
                    } else {
                      itemRefs.current.delete(index);
                    }
                  }}
                  variant="ghost"
                  className={cn(
                    "flex h-auto w-full items-center justify-start gap-3 rounded px-2 py-2",
                    index === activeIndex && "bg-accent text-accent-foreground",
                  )}
                  onClick={() => applyItem(item)}
                >
                  <div className="flex size-8 items-center justify-center rounded bg-muted">
                    <Icon className="size-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </div>
                </Button>
              );
            })}
          </div>
        ))}
      </div>
    </div>,
    document.body,
  );
};

SlashMenu.displayName = "SlashMenu";
