import { Editor } from "@module/design/components/editor";
import { EditorContent } from "@module/design/components/editor/EditorContent";
import { FloatingToolbar } from "@module/design/components/editor/FloatingToolbar";
import type { MetaType } from "../../shared/story";

const floatingSample = [
  "<p>Select part of this sentence to open the floating toolbar above the current selection.</p>",
  "<p>You can then bold, link, highlight, or quote the selected text without keeping a full toolbar visible.</p>",
].join("");

type FloatingToolbarDemoPropsType = {
  className?: string;
};

const FloatingToolbarDemo = ({
  className = "min-h-40 rounded border border-border p-4 text-left",
}: FloatingToolbarDemoPropsType) => {
  return (
    <Editor.Root content={floatingSample} showSlashMenu={false} showMedia={true}>
      <div className="flex w-full max-w-3xl flex-col gap-3 rounded border border-border p-4">
        <p className="text-sm text-muted-foreground">Select text in the editor below to reveal the bubble menu.</p>
        <FloatingToolbar />
        <EditorContent className={className} />
      </div>
    </Editor.Root>
  );
};

FloatingToolbarDemo.displayName = "FloatingToolbar";

export const meta = {
  title: "Editor.FloatingToolbar",
  group: "Components",
  tags: [],
  component: FloatingToolbarDemo,
  usage: [
    "**FloatingToolbar** is the bubble menu that appears above the current text selection in the rich-text editor. It gives quick access to inline-formatting actions without forcing the user to keep a persistent toolbar on screen.",
    "",
    "**How to use it** — render it inside `Editor.Root` together with `Editor.Content`. It listens to the shared editor context, appears only when the selection is non-empty and editable, and portals itself to the document body so it can escape clipping. Keep it for writing surfaces where selection-based formatting is common.",
    "",
    "**When to use it** — in medium- and long-form text editors where users highlight text and then decide what formatting to apply.",
    "",
    "**When not to use it** — do not rely on it as the only formatting affordance for novice-heavy or mobile-first flows where a visible toolbar is clearer and easier to discover.",
  ].join("\n"),
  props: [
    {
      name: "className",
      control: "text",
      default: "min-h-40 rounded border border-border p-4 text-left",
    },
  ],
} satisfies MetaType<typeof FloatingToolbarDemo>;
