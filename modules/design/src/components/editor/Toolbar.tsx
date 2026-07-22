import { pickColor } from "@module/design/components/color/SimpleColorPicker";
import { Toggle } from "@module/design/components/toggle/Toggle";
import { RedoIcon } from "@module/design/icons/outline/arrows/sm/RedoIcon";
import { UndoIcon } from "@module/design/icons/outline/arrows/sm/UndoIcon";
import { Heading1Icon } from "@module/design/icons/outline/design-development/sm/Heading1Icon";
import { Heading2Icon } from "@module/design/icons/outline/design-development/sm/Heading2Icon";
import { Heading3Icon } from "@module/design/icons/outline/design-development/sm/Heading3Icon";
import { PaletteIcon } from "@module/design/icons/outline/design-development/sm/PaletteIcon";
import { TextAlignCenterIcon } from "@module/design/icons/outline/design-development/sm/TextAlignCenterIcon";
import { TextAlignJustifyIcon } from "@module/design/icons/outline/design-development/sm/TextAlignJustifyIcon";
import { TextAlignLeftIcon } from "@module/design/icons/outline/design-development/sm/TextAlignLeftIcon";
import { TextAlignRightIcon } from "@module/design/icons/outline/design-development/sm/TextAlignRightIcon";
import { TextItalicIcon } from "@module/design/icons/outline/design-development/sm/TextItalicIcon";
import { TextStrikethroughIcon } from "@module/design/icons/outline/design-development/sm/TextStrikethroughIcon";
import { TextUnderlineIcon } from "@module/design/icons/outline/design-development/sm/TextUnderlineIcon";
import { BlockquoteIcon } from "@module/design/icons/outline/editing/sm/BlockquoteIcon";
import { LinkIcon } from "@module/design/icons/outline/editing/sm/LinkIcon";
import { OrderedListIcon } from "@module/design/icons/outline/editing/sm/OrderedListIcon";
import { ParagraphIcon } from "@module/design/icons/outline/editing/sm/ParagraphIcon";
import { SubscriptIcon } from "@module/design/icons/outline/editing/sm/SubscriptIcon";
import { SuperscriptIcon } from "@module/design/icons/outline/editing/sm/SuperscriptIcon";
import { TextBoldIcon } from "@module/design/icons/outline/editing/sm/TextBoldIcon";
import { VideoIcon } from "@module/design/icons/outline/photography-video/sm/VideoIcon";
import { HighlighterIcon } from "@module/design/icons/outline/school-education/sm/HighlighterIcon";
import { BulletListIcon } from "@module/design/icons/outline/ui-layout/sm/BulletListIcon";
import { CheckListIcon } from "@module/design/icons/outline/ui-layout/sm/CheckListIcon";
import { cn } from "@module/design/utils/cn";
import type { SimpleColorType } from "@ooneex/color";
import type { ReactNode } from "react";
import { restoreSelection, saveSelection } from "./commands";
import { useEditorContext } from "./EditorContext";
import { openLinkDialog } from "./LinkDialog";
import { openYouTubeDialog } from "./YouTubeDialog";

type ToolbarToggleType = {
  label: string;
  pressed?: boolean;
  disabled?: boolean;
  onToggle: () => void;
  className?: string;
  children: ReactNode;
};

/**
 * Shared toolbar button. Prevents the default mousedown so the editor keeps its
 * text selection while the command runs.
 */
const ToolbarToggle = ({ label, pressed, disabled, onToggle, className, children }: ToolbarToggleType) => (
  <Toggle
    aria-label={label}
    title={label}
    disabled={disabled}
    pressed={pressed}
    onMouseDown={(event) => event.preventDefault()}
    onPressedChange={onToggle}
    className={className}
  >
    {children}
  </Toggle>
);

type ToolbarButtonPropsType = { className?: string };

export const EditorBold = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Bold" pressed={state.bold} onToggle={editor.toggleBold} className={className}>
      <TextBoldIcon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorItalic = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Italic" pressed={state.italic} onToggle={editor.toggleItalic} className={className}>
      <TextItalicIcon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorUnderline = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Underline" pressed={state.underline} onToggle={editor.toggleUnderline} className={className}>
      <TextUnderlineIcon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorStrike = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Strikethrough" pressed={state.strike} onToggle={editor.toggleStrike} className={className}>
      <TextStrikethroughIcon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorSubscript = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Subscript" pressed={state.subscript} onToggle={editor.toggleSubscript} className={className}>
      <SubscriptIcon className="size-3.5" />
    </ToolbarToggle>
  );
};

export const EditorSuperscript = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle
      label="Superscript"
      pressed={state.superscript}
      onToggle={editor.toggleSuperscript}
      className={className}
    >
      <SuperscriptIcon className="size-3.5" />
    </ToolbarToggle>
  );
};

export const EditorParagraph = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Paragraph" pressed={state.paragraph} onToggle={editor.setParagraph} className={className}>
      <ParagraphIcon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorBlockquote = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle
      label="Blockquote"
      pressed={state.blockquote}
      onToggle={editor.toggleBlockquote}
      className={className}
    >
      <BlockquoteIcon className="size-4" />
    </ToolbarToggle>
  );
};

const HEADING_ICONS = { 1: Heading1Icon, 2: Heading2Icon, 3: Heading3Icon } as const;

export const EditorHeading = ({ level, className }: ToolbarButtonPropsType & { level: 1 | 2 | 3 }) => {
  const { editor, state } = useEditorContext();
  const Icon = HEADING_ICONS[level];
  return (
    <ToolbarToggle
      label={`Heading ${level}`}
      pressed={state.headingLevel === level}
      onToggle={() => editor.toggleHeading(level)}
      className={className}
    >
      <Icon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorBulletList = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle
      label="Bullet list"
      pressed={state.bulletList}
      onToggle={editor.toggleBulletList}
      className={className}
    >
      <BulletListIcon className="size-5" />
    </ToolbarToggle>
  );
};

export const EditorOrderedList = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle
      label="Numbered list"
      pressed={state.orderedList}
      onToggle={editor.toggleOrderedList}
      className={className}
    >
      <OrderedListIcon className="size-5" />
    </ToolbarToggle>
  );
};

export const EditorTaskList = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Task list" pressed={state.taskList} onToggle={editor.toggleTaskList} className={className}>
      <CheckListIcon className="size-5" />
    </ToolbarToggle>
  );
};

const ALIGN_ICONS = {
  left: TextAlignLeftIcon,
  center: TextAlignCenterIcon,
  right: TextAlignRightIcon,
  justify: TextAlignJustifyIcon,
} as const;

export const EditorAlign = ({
  align,
  className,
}: ToolbarButtonPropsType & { align: "left" | "center" | "right" | "justify" }) => {
  const { editor, state } = useEditorContext();
  const Icon = ALIGN_ICONS[align];
  return (
    <ToolbarToggle
      label={`Align ${align}`}
      pressed={state.align === align}
      onToggle={() => editor.setTextAlign(align)}
      className={className}
    >
      <Icon className="size-5" />
    </ToolbarToggle>
  );
};

export const EditorColor = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  const handlePick = async () => {
    const saved = saveSelection(editor.element);
    const color = await pickColor({ value: state.color as SimpleColorType, title: "Text color" });
    restoreSelection(saved);
    if (color) {
      editor.setColor(color);
    } else {
      editor.unsetColor();
    }
  };
  return (
    <ToolbarToggle label="Text color" pressed={!!state.color} onToggle={handlePick} className={className}>
      <PaletteIcon className="size-3.5" />
    </ToolbarToggle>
  );
};

export const EditorHighlight = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  const handlePick = async () => {
    const saved = saveSelection(editor.element);
    const color = await pickColor({ value: state.highlight as SimpleColorType, title: "Highlight color" });
    restoreSelection(saved);
    if (color) {
      editor.setHighlight(color);
    } else {
      editor.unsetHighlight();
    }
  };
  return (
    <ToolbarToggle label="Highlight" pressed={!!state.highlight} onToggle={handlePick} className={className}>
      <HighlighterIcon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorLink = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  const handleLink = async () => {
    const saved = saveSelection(editor.element);
    const result = await openLinkDialog({ initialHref: editor.getAttributes("link").href ?? "", isActive: state.link });
    restoreSelection(saved);
    if (!result) return;
    if ("remove" in result) {
      editor.unsetLink();
    } else {
      editor.setLink(result.href);
    }
  };
  return (
    <ToolbarToggle label="Link" pressed={state.link} onToggle={handleLink} className={className}>
      <LinkIcon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorYouTube = ({ className }: ToolbarButtonPropsType) => {
  const { editor } = useEditorContext();
  const handleEmbed = async () => {
    const saved = saveSelection(editor.element);
    const url = await openYouTubeDialog();
    restoreSelection(saved);
    if (url) {
      editor.insertYouTube(url);
    }
  };
  return (
    <ToolbarToggle label="Embed YouTube video" onToggle={handleEmbed} className={className}>
      <VideoIcon className="size-4" />
    </ToolbarToggle>
  );
};

export const EditorUndo = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Undo" disabled={!state.canUndo} onToggle={editor.undo} className={className}>
      <UndoIcon className="size-5" />
    </ToolbarToggle>
  );
};

export const EditorRedo = ({ className }: ToolbarButtonPropsType) => {
  const { editor, state } = useEditorContext();
  return (
    <ToolbarToggle label="Redo" disabled={!state.canRedo} onToggle={editor.redo} className={className}>
      <RedoIcon className="size-5" />
    </ToolbarToggle>
  );
};

export type EditorToolbarPropsType = {
  className?: string;
  children?: ReactNode;
};

/**
 * A static toolbar container. Renders whatever toolbar buttons are passed as
 * children, or a sensible default set when none are provided.
 */
export const EditorToolbar = ({ className, children }: EditorToolbarPropsType) => {
  const { showHeadings, showHistory, showMedia } = useEditorContext();
  return (
    <div
      data-slot="editor-toolbar"
      className={cn("flex flex-wrap items-center gap-1 rounded border border-border bg-background p-1", className)}
    >
      {children ?? (
        <>
          {showHeadings ? (
            <>
              <EditorHeading level={1} />
              <EditorHeading level={2} />
              <EditorHeading level={3} />
            </>
          ) : null}
          <EditorParagraph />
          <EditorBold />
          <EditorItalic />
          <EditorUnderline />
          <EditorStrike />
          <EditorSubscript />
          <EditorSuperscript />
          <EditorColor />
          <EditorHighlight />
          <EditorLink />
          <EditorBlockquote />
          <EditorBulletList />
          <EditorOrderedList />
          <EditorTaskList />
          <EditorAlign align="left" />
          <EditorAlign align="center" />
          <EditorAlign align="right" />
          <EditorAlign align="justify" />
          {showMedia ? <EditorYouTube /> : null}
          {showHistory ? (
            <>
              <EditorUndo />
              <EditorRedo />
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

EditorBold.displayName = "EditorBold";
EditorItalic.displayName = "EditorItalic";
EditorUnderline.displayName = "EditorUnderline";
EditorStrike.displayName = "EditorStrike";
EditorSubscript.displayName = "EditorSubscript";
EditorSuperscript.displayName = "EditorSuperscript";
EditorParagraph.displayName = "EditorParagraph";
EditorBlockquote.displayName = "EditorBlockquote";
EditorHeading.displayName = "EditorHeading";
EditorBulletList.displayName = "EditorBulletList";
EditorOrderedList.displayName = "EditorOrderedList";
EditorTaskList.displayName = "EditorTaskList";
EditorAlign.displayName = "EditorAlign";
EditorColor.displayName = "EditorColor";
EditorHighlight.displayName = "EditorHighlight";
EditorLink.displayName = "EditorLink";
EditorYouTube.displayName = "EditorYouTube";
EditorUndo.displayName = "EditorUndo";
EditorRedo.displayName = "EditorRedo";
EditorToolbar.displayName = "EditorToolbar";
