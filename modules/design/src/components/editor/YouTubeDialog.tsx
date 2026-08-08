import { Button } from "@module/design/components/button/Button";
import { createDialog } from "@module/design/components/dialog/Dialog";
import { DialogDescription } from "@module/design/components/dialog/DialogDescription";
import { DialogFooter } from "@module/design/components/dialog/DialogFooter";
import { DialogHeader } from "@module/design/components/dialog/DialogHeader";
import { DialogTitle } from "@module/design/components/dialog/DialogTitle";
import { getId } from "@ooneex/youtube-utils";
import { useEffect, useRef, useState } from "react";
import { UrlDialogField } from "./UrlDialogField";

/**
 * Imperative "embed YouTube video" dialog. Mount `<YouTubeDialog />` once, then
 * open it with {@link openYouTubeDialog}. Resolves with the entered URL, or
 * `null` when dismissed.
 */
export const YouTubeDialog = createDialog<void, string | null>(
  ({ call }) => {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      requestAnimationFrame(() => inputRef.current?.focus());
    }, []);

    const handleSubmit = () => {
      if (!getId(url)) {
        setError("Please enter a valid YouTube URL");
        return;
      }
      call.end(url);
    };

    return (
      <>
        <DialogHeader>
          <DialogTitle>Embed YouTube Video</DialogTitle>
          <DialogDescription>Enter the URL of the YouTube video you want to embed.</DialogDescription>
        </DialogHeader>
        <UrlDialogField
          ref={inputRef}
          placeholder="https://www.youtube.com/watch?v=..."
          value={url}
          error={error}
          onChange={(value) => {
            setUrl(value);
            setError("");
          }}
          onSubmit={handleSubmit}
        />
        <DialogFooter>
          <Button variant="outline" onClick={() => call.end(null)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Embed</Button>
        </DialogFooter>
      </>
    );
  },
  { className: "ring ring-border p-4", showCloseButton: false, dismissValue: null },
);
YouTubeDialog.displayName = "YouTubeDialog";

/** Open the YouTube embed dialog and resolve with the entered URL (or `null`). */
export const openYouTubeDialog = () => YouTubeDialog.call();
