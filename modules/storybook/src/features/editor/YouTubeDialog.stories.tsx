import { Button } from "@module/design/components/button";
import { openYouTubeDialog, YouTubeDialog } from "@module/design/components/editor/YouTubeDialog";
import { useState } from "react";
import type { MetaType } from "../../shared/story";

const YouTubeDialogDemo = () => {
  const [result, setResult] = useState("No embed chosen yet");

  return (
    <div className="flex flex-col items-center gap-4">
      <YouTubeDialog />
      <p className="max-w-lg text-center text-sm text-muted-foreground">{result}</p>
      <Button
        onClick={async () => {
          const value = await openYouTubeDialog();
          setResult(value ? `Selected URL: ${value}` : "Dismissed without embedding");
        }}
      >
        Open YouTube dialog
      </Button>
    </div>
  );
};

YouTubeDialogDemo.displayName = "YouTubeDialog";

export const meta = {
  title: "Editor.YouTubeDialog",
  group: "Components",
  tags: [],
  component: YouTubeDialogDemo,
  usage: [
    "**YouTubeDialog** is the editor's imperative embed-video modal. It collects a YouTube URL, validates it with `@ooneex/youtube-utils`, and resolves with the accepted URL so the caller can insert the embed back into the document.",
    "",
    "**How to use it** — mount `<YouTubeDialog />` once and call `await openYouTubeDialog()` from a toolbar or slash-menu action. If a URL is returned, insert the embed after restoring the user's selection; if it resolves `null`, treat it as a cancel and leave the editor unchanged.",
    "",
    "**When to use it** — for document editors that support embedded media and want a tight, validation-backed YouTube flow without keeping an always-visible URL field in the layout.",
    "",
    "**When not to use it** — do not use it for arbitrary video providers or as a general-purpose modal outside the editor's media insertion workflow.",
  ].join("\n"),
} satisfies MetaType<typeof YouTubeDialogDemo>;
