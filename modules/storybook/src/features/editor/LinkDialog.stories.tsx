import { Button } from "@module/design/components/button";
import { LinkDialog, openLinkDialog } from "@module/design/components/editor/LinkDialog";
import { useState } from "react";
import type { MetaType } from "../../shared/story";

type LinkDialogDemoPropsType = {
  initialHref?: string;
  isActive?: boolean;
};

const LinkDialogDemo = ({ initialHref = "https://example.com", isActive = false }: LinkDialogDemoPropsType) => {
  const [result, setResult] = useState<string>("No selection yet");

  return (
    <div className="flex flex-col items-center gap-4">
      <LinkDialog />
      <p className="text-center text-sm text-muted-foreground">{result}</p>
      <Button
        onClick={async () => {
          const value = await openLinkDialog({ initialHref, isActive });
          if (value === null) {
            setResult("Dismissed");
            return;
          }
          if ("remove" in value) {
            setResult("Remove link selected");
            return;
          }
          setResult(`Selected href: ${value.href}`);
        }}
      >
        Open link dialog
      </Button>
    </div>
  );
};

LinkDialogDemo.displayName = "LinkDialog";

export const meta = {
  title: "Editor.LinkDialog",
  group: "Components",
  tags: [],
  component: LinkDialogDemo,
  usage: [
    "**LinkDialog** is the editor's imperative add/edit-link modal. Mount the dialog root once, open it with `openLinkDialog`, and it resolves with either a new href, a remove instruction, or `null` when the user cancels.",
    "",
    "**How to use it** — keep it near the top of the editor tree, then await `openLinkDialog({ initialHref, isActive })` from a toolbar action after preserving the current selection. Use `initialHref` to edit an existing link and `isActive` to expose the destructive **Remove** action when one is already applied.",
    "",
    "**When to use it** — when rich-text authors need to add, edit, or remove links from selected text.",
    "",
    "**When not to use it** — do not use it as a generic URL input outside the editor workflow; a normal field is simpler when no text selection needs to be restored.",
  ].join("\n"),
  props: [
    {
      name: "initialHref",
      control: "text",
      default: "https://example.com",
    },
    {
      name: "isActive",
      control: "boolean",
      default: false,
    },
  ],
} satisfies MetaType<typeof LinkDialogDemo>;
