import { Button } from "@module/design/components/button";
import { Textarea } from "@module/design/components/textarea";
import { PaperPlaneIcon } from "@module/design/icons/outline/communication/sm/PaperPlaneIcon";
import { CropIcon } from "@module/design/icons/outline/design-development/sm/CropIcon";
import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { useCommenterContext } from "./commenterContext";

/** Draft editor: comment body, optional area screenshot, submit and cancel. */
export const CommenterComposer = () => {
  const { draft, setDraft, submit, saving, startCapture, shooting, captureError } = useCommenterContext();
  const [body, setBody] = useState("");
  const [previewBroken, setPreviewBroken] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => setPreviewBroken(false), [draft?.screenshot]);

  if (!draft) return null;

  const send = async () => {
    if (!body.trim() || saving) return;

    await submit(body.trim());
    setBody("");
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      void send();
    }
  };

  return (
    <div className="flex flex-col gap-2 p-3">
      <p className="text-muted-foreground truncate text-xs">
        On <code className="text-foreground">{draft.anchor.label}</code>
      </p>

      <Textarea
        ref={inputRef}
        value={body}
        aria-label="Comment"
        placeholder="What's wrong here?"
        rows={3}
        onChange={(event) => setBody(event.target.value)}
        onKeyDown={onKeyDown}
      />

      {shooting ? (
        <p className="text-muted-foreground bg-muted/50 rounded p-2 text-xs" aria-busy="true" aria-live="polite">
          Taking the screenshot…
        </p>
      ) : null}

      {draft.screenshot ? (
        <div className="border-border relative overflow-hidden rounded border">
          <img
            src={draft.screenshot}
            alt="Captured area"
            className="bg-muted max-h-32 w-full object-contain"
            onError={() => setPreviewBroken(true)}
          />
          <Button
            size="icon-xs"
            variant="secondary"
            aria-label="Remove screenshot"
            className="absolute top-1 right-1"
            onClick={() => setDraft({ anchor: draft.anchor })}
          >
            <XmarkIcon />
          </Button>
        </div>
      ) : null}

      {captureError || previewBroken ? (
        <p className="text-destructive text-xs" role="alert">
          {captureError ?? "The captured image could not be displayed."}
        </p>
      ) : null}

      <div className="flex items-center justify-between gap-2">
        <Button size="xs" variant="ghost" onClick={startCapture} disabled={saving || shooting}>
          <CropIcon />
          {draft.screenshot ? "Retake" : "Screenshot"}
        </Button>

        <div className="flex items-center gap-1">
          <Button size="xs" variant="ghost" onClick={() => setDraft(null)} disabled={saving}>
            Cancel
          </Button>
          <Button size="xs" onClick={() => void send()} disabled={!body.trim() || saving}>
            <PaperPlaneIcon />
            {saving ? "Sending…" : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
};

CommenterComposer.displayName = "CommenterComposer";
