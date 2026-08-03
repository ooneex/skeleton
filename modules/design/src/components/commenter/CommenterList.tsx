import { Button } from "@module/design/components/button";
import { Textarea } from "@module/design/components/textarea";
import { Pen2Icon } from "@module/design/icons/outline/communication/sm/Pen2Icon";
import { TrashIcon } from "@module/design/icons/outline/ui-layout/sm/TrashIcon";
import { cn } from "@module/design/utils/cn";
import { useState } from "react";
import type { CommenterBrowserContextType } from "./browserContext";
import { useCommenterContext } from "./commenterContext";

/** The handful of context fields worth reading at a glance in the list. */
const browserSummary = (context: CommenterBrowserContextType): [string, string][] => [
  ["Page", context.path],
  ["Viewport", `${context.viewport.width}×${context.viewport.height} @${context.devicePixelRatio}x`],
  ["Screen", `${context.screen.width}×${context.screen.height}`],
  ["Browser", context.brands?.join(", ") ?? context.userAgent],
  ["Platform", context.platform],
  ["Locale", `${context.language} · ${context.timezone ?? "unknown timezone"}`],
  ["Theme", `${context.colorScheme}${context.reducedMotion ? " · reduced motion" : ""}`],
];

const formatDate = (value?: string): string => {
  if (!value) return "";

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? "" : date.toLocaleString();
};

/** Scrollable list of the comments left on the page, with inline editing. */
export const CommenterList = () => {
  const { comments, selectedId, select, update, remove, loading, error, saving } = useCommenterContext();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedBody, setEditedBody] = useState("");

  const save = async (id: string) => {
    if (!update || !editedBody.trim()) return;

    await update({ id, body: editedBody.trim() });
    setEditingId(null);
  };

  if (loading) {
    return (
      <p className="text-muted-foreground p-4 text-center text-xs" aria-busy="true" aria-live="polite">
        Loading comments…
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-destructive p-4 text-center text-xs" role="alert">
        {error.message}
      </p>
    );
  }

  if (comments.length === 0) {
    return (
      <p className="text-muted-foreground p-4 text-center text-xs">
        No comment yet. Switch to edit mode and click any element on the page.
      </p>
    );
  }

  return (
    <ul className="divide-border max-h-72 divide-y overflow-y-auto">
      {comments.map((comment, index) => (
        <li key={comment.id}>
          <div
            className={cn(
              "hover:bg-muted/60 flex w-full flex-col gap-1.5 p-3 text-left transition-colors",
              comment.id === selectedId && "bg-muted",
            )}
          >
            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 text-left"
              onClick={() => select(comment.id === selectedId ? null : comment.id)}
            >
              <span className="bg-primary text-primary-foreground flex size-5 shrink-0 items-center justify-center rounded-full text-2xs">
                {index + 1}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {comment.author?.name ?? "Anonymous"} · {comment.anchor.label}
              </span>
            </button>

            {editingId === comment.id ? (
              <div className="flex flex-col gap-1.5">
                <Textarea
                  value={editedBody}
                  aria-label={`Edit comment ${index + 1}`}
                  rows={3}
                  onChange={(event) => setEditedBody(event.target.value)}
                />
                <div className="flex items-center justify-end gap-1">
                  <Button size="xs" variant="ghost" onClick={() => setEditingId(null)} disabled={saving}>
                    Cancel
                  </Button>
                  <Button size="xs" onClick={() => void save(comment.id)} disabled={!editedBody.trim() || saving}>
                    Save
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-sm break-words whitespace-pre-wrap">{comment.body}</p>
            )}

            {comment.context ? (
              <details className="text-muted-foreground text-2xs">
                <summary className="cursor-pointer">Browser info</summary>
                <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-2">
                  {browserSummary(comment.context).map(([label, value]) => (
                    <div key={label} className="contents">
                      <dt className="font-medium">{label}</dt>
                      <dd className="truncate">{value}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            ) : null}

            {comment.screenshot ? (
              <img
                src={comment.screenshot}
                alt="Captured area"
                className="border-border bg-muted max-h-28 w-full rounded border object-contain"
              />
            ) : null}

            <div className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground text-2xs">{formatDate(comment.createdAt)}</span>
              <div className="flex items-center gap-0.5">
                {update && editingId !== comment.id ? (
                  <Button
                    size="icon-xs"
                    variant="ghost"
                    aria-label={`Edit comment ${index + 1}`}
                    onClick={() => {
                      setEditingId(comment.id);
                      setEditedBody(comment.body);
                    }}
                  >
                    <Pen2Icon />
                  </Button>
                ) : null}
                {remove ? (
                  <Button
                    size="icon-xs"
                    variant="ghost"
                    aria-label={`Delete comment ${index + 1}`}
                    onClick={() => remove(comment.id)}
                  >
                    <TrashIcon />
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

CommenterList.displayName = "CommenterList";
