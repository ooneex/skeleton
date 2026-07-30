import { Editor } from "@module/design/components/editor";
import { EditorContent } from "@module/design/components/editor/EditorContent";
import { SlashMenu } from "@module/design/components/editor/SlashMenu";
import type { MetaType } from "../../shared/story";

const slashSample = [
  "<p>Place the caret in this editor and type / to open the slash menu.</p>",
  "<p>Try typing /hea, /task, or /you to filter the available commands.</p>",
].join("");

type SlashMenuDemoPropsType = {
  showHeadings?: boolean;
  showHistory?: boolean;
  showMedia?: boolean;
};

const SlashMenuDemo = ({ showHeadings = true, showHistory = true, showMedia = true }: SlashMenuDemoPropsType) => {
  return (
    <Editor.Root content={slashSample} showHeadings={showHeadings} showHistory={showHistory} showMedia={showMedia}>
      <div className="flex w-full max-w-3xl flex-col gap-3 rounded border border-border p-4">
        <p className="text-sm text-muted-foreground">
          Type a slash command in the editor below to open the contextual command menu.
        </p>
        <EditorContent className="min-h-40 rounded border border-border p-4 text-left" />
        <SlashMenu />
      </div>
    </Editor.Root>
  );
};

SlashMenuDemo.displayName = "SlashMenu";

export const meta = {
  title: "Editor.SlashMenu",
  group: "Components",
  tags: [],
  component: SlashMenuDemo,
  usage: [
    "**SlashMenu** is the contextual command palette for the editor. When the user types `/` at the caret, it opens a grouped, filterable list of block and formatting commands and lets the user apply one with keyboard or pointer selection.",
    "",
    "**How to use it** — mount it inside `Editor.Root` next to `Editor.Content`. It watches the shared editor state, filters commands as the user types, and removes the typed `/query` before executing the chosen action. Gate its available groups with `showHeadings`, `showHistory`, and `showMedia` to match the surface's capabilities.",
    "",
    "**When to use it** — in document or note editors where power users benefit from fast keyboard-first block insertion and command discovery.",
    "",
    "**When not to use it** — do not enable it for plain-text fields or very short inputs where a slash character is expected as content and the extra command model would be distracting.",
  ].join("\n"),
  props: [
    {
      name: "showHeadings",
      control: "boolean",
      default: true,
    },
    {
      name: "showHistory",
      control: "boolean",
      default: true,
    },
    {
      name: "showMedia",
      control: "boolean",
      default: true,
    },
  ],
} satisfies MetaType<typeof SlashMenuDemo>;
