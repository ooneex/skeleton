import { Button } from "@module/design/components/button/Button";
import { createDialog } from "@module/design/components/dialog/Dialog";
import { DialogDescription } from "@module/design/components/dialog/DialogDescription";
import { DialogFooter } from "@module/design/components/dialog/DialogFooter";
import { DialogHeader } from "@module/design/components/dialog/DialogHeader";
import { DialogTitle } from "@module/design/components/dialog/DialogTitle";
import { useEffect, useRef, useState } from "react";
import { UrlDialogField } from "./UrlDialogField";

type LinkDialogPropsType = {
  initialHref: string;
  isActive: boolean;
};

/** The link chosen in the dialog: apply an href, remove the link, or cancel. */
export type LinkDialogResultType = { href: string } | { remove: true } | null;

/**
 * Imperative "add/edit link" dialog. Mount `<LinkDialog />` once, then open it
 * with {@link openLinkDialog}. Resolves with the chosen action so the caller can
 * apply it to the editor after restoring the text selection.
 */
export const LinkDialog = createDialog<LinkDialogPropsType, LinkDialogResultType>(
  ({ call, initialHref, isActive }) => {
    const [url, setUrl] = useState(initialHref);
    const [error, setError] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      requestAnimationFrame(() => inputRef.current?.focus());
    }, []);

    const handleSubmit = () => {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        setError("Please enter a valid URL");
        return;
      }
      call.end({ href: url });
    };

    return (
      <>
        <DialogHeader>
          <DialogTitle>{isActive ? "Edit Link" : "Add Link"}</DialogTitle>
          <DialogDescription>Enter the URL you want to link to.</DialogDescription>
        </DialogHeader>
        <UrlDialogField
          ref={inputRef}
          placeholder="https://www.google.com"
          value={url}
          error={error}
          onChange={(value) => {
            setUrl(value);
            setError("");
          }}
          onSubmit={handleSubmit}
        />
        <DialogFooter>
          {isActive ? (
            <Button variant="destructive" className="mr-auto" onClick={() => call.end({ remove: true })}>
              Remove
            </Button>
          ) : null}
          <Button variant="outline" onClick={() => call.end(null)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>{isActive ? "Save" : "Add"}</Button>
        </DialogFooter>
      </>
    );
  },
  { className: "ring ring-border p-4", showCloseButton: false, dismissValue: null },
);
LinkDialog.displayName = "LinkDialog";

/** Open the link dialog and resolve with the chosen action. */
export const openLinkDialog = (props: LinkDialogPropsType) => LinkDialog.call(props);
