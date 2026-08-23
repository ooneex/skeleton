import { Editor } from "@module/design/components/editor";
import { EditorContent } from "@module/design/components/editor/EditorContent";
import { EditorToolbar } from "@module/design/components/editor/Toolbar";
import type { MetaType } from "../../shared/story";

const toolbarSample = [
  "<h2>Team update</h2>",
  "<p>Select text to try the formatting controls in the static toolbar below.</p>",
  "<ul><li>Bullet list support</li><li>Task lists and blockquotes</li><li>Alignment and links</li></ul>",
].join("");

type EditorToolbarDemoPropsType = {
  showHeadings?: boolean;
  showHistory?: boolean;
  showMedia?: boolean;
};

const EditorToolbarDemo = ({
  showHeadings = true,
  showHistory = true,
  showMedia = true,
}: EditorToolbarDemoPropsType) => {
  return (
    <Editor.Root content={toolbarSample} showHeadings={showHeadings} showHistory={showHistory} showMedia={showMedia}>
      <div className="flex w-full max-w-3xl flex-col gap-3 rounded border border-border p-4">
        {/* No children: the toolbar renders its default set, and the three
            controls above drive it through `Editor.Root`. Re-listing the
            buttons here would be the same list a second time, drifting from
            the component the moment one is added. */}
        <EditorToolbar />
        <EditorContent className="min-h-48 rounded border border-border p-4 text-left" />
      </div>
    </Editor.Root>
  );
};

EditorToolbarDemo.displayName = "EditorToolbar";

export const meta = {
  title: "Editor.Toolbar",
  group: "Components",
  tags: [],
  component: EditorToolbarDemo,
  usage: [
    "**Editor.Toolbar** is the persistent command bar for the rich-text editor, and the individual `Editor*` button exports are the atomic controls it arranges. Together they expose the full authoring toolkit: headings, inline marks, lists, alignment, link/media actions, and history controls.",
    "",
    "**How to use it** — compose it inside `Editor.Root` above `Editor.Content`. Use the default toolbar when you want the standard full set, or pass your own children to choose only the controls a surface needs. The standalone exports (`EditorBold`, `EditorHeading`, `EditorAlign`, …) are meant for that bespoke composition and still preserve selection while they run commands.",
    "",
    "**When to use it** — for visible, always-available formatting controls in document editors, description fields, or comment composers where a persistent toolbar is easier to learn than a hidden shortcut system.",
    "",
    "**When not to use it** — do not show the full toolbar in plain-text or ultra-compact contexts where formatting is not allowed. In those cases, hide it or expose a smaller command set.",
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
} satisfies MetaType<typeof EditorToolbarDemo>;
