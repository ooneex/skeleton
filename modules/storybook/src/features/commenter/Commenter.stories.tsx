import { Button } from "@module/design/components/button";
import type { CommenterModeType, CommenterRectType } from "@module/design/components/commenter";
import { Commenter } from "@module/design/components/commenter";
import { Input } from "@module/design/components/input";
import { Kbd } from "@module/design/components/kbd";
import { useEffect, useState } from "react";
import type { MetaType } from "../../shared/story";

type CommenterDemoPropsType = {
  /** Widget mode the preview starts in. */
  defaultMode?: CommenterModeType;
  /** Whether the panel is visible on mount. */
  defaultOpen?: boolean;
  onCreate?: (comment: unknown) => void;
  onDelete?: (id: string) => void;
  onSelect?: (comment: unknown) => void;
};

/**
 * The real capture asks for the screen-share permission, which a gallery preview should
 * not trigger — this stub returns a flat placeholder of the selected size instead, so the
 * area-selection flow stays clickable end to end.
 */
const captureStub = async (rect: CommenterRectType): Promise<string> => {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(rect.width));
  canvas.height = Math.max(1, Math.round(rect.height));

  const context = canvas.getContext("2d");
  if (context) {
    context.fillStyle = "#94a3b8";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#0f172a";
    context.font = "14px sans-serif";
    context.fillText(`${canvas.width}×${canvas.height}`, 8, 24);
  }

  return canvas.toDataURL("image/png");
};

/**
 * `Commenter` targets the live DOM, so the preview ships a small page of its own to point
 * at. It runs without endpoints, which keeps the comments in memory for the session.
 */
const CommenterDemo = ({ defaultMode = "edit", defaultOpen = true, ...handlers }: CommenterDemoPropsType) => {
  const [mode, setMode] = useState<CommenterModeType>(defaultMode);
  const [open, setOpen] = useState(defaultOpen);

  // Follow the controls panel when the reader flips a knob.
  useEffect(() => setMode(defaultMode), [defaultMode]);
  useEffect(() => setOpen(defaultOpen), [defaultOpen]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs" variant={mode === "edit" ? "default" : "outline"} onClick={() => setMode("edit")}>
          Edit mode
        </Button>
        <Button size="xs" variant={mode === "view" ? "default" : "outline"} onClick={() => setMode("view")}>
          View mode
        </Button>
        <Button size="xs" variant="ghost" onClick={() => setOpen((current) => !current)}>
          {open ? "Hide widget" : "Show widget"}
        </Button>
        <span className="text-muted-foreground text-xs">
          or press <Kbd>mod+shift+e</Kbd> / <Kbd>mod+shift+v</Kbd> / <Kbd>mod+shift+c</Kbd>
        </span>
      </div>

      <section id="commenter-demo-page" className="border-border flex flex-col gap-3 rounded-lg border p-4">
        <h3 className="text-lg font-medium">Checkout summary</h3>
        <p className="text-muted-foreground text-sm">
          In edit mode, click any element here — the heading, the field, the button — to pin a comment on it. In view
          mode the page stays interactive and the pins are read only.
        </p>
        <Input placeholder="Discount code" aria-label="Discount code" />
        <div className="flex items-center gap-2">
          <Button>Pay now</Button>
          <Button variant="outline">Keep shopping</Button>
        </div>
      </section>

      <Commenter
        enabled
        page="/storybook/commenter"
        open={open}
        onOpenChange={setOpen}
        mode={mode}
        onModeChange={setMode}
        author={{ name: "Storybook" }}
        capture={captureStub}
        {...handlers}
      />
    </div>
  );
};
CommenterDemo.displayName = "Commenter";

export const meta = {
  title: "Commenter",
  group: "Components",
  tags: [],
  component: Commenter,
  storyComponent: CommenterDemo,
  usage: [
    "**Commenter** is an in-page feedback widget: a draggable panel that lets a reviewer point at any element on the page, write a comment about it, attach a screenshot of a selected area, and browse what has already been reported. Each comment is pinned to its target through a rebuilt CSS selector, so the numbered pins follow their element across scrolling, resizing and re-renders. Every comment also carries a snapshot of the browser it was written in — page, viewport, screen, locale, theme, device and network — so a report can be reproduced without interviewing its author.",
    "",
    "**How to use it** — mount it once at the root of the app. Give it the four CRUD endpoints (`listUrl`, `createUrl`, `updateUrl`, `deleteUrl`, the last two accepting an `:id` placeholder) and it talks to the backend itself through `@talosjs/fetcher` and TanStack Query, seeding and invalidating its own cache. Without endpoints it falls back to the `comments` prop with the `onCreate` / `onUpdate` / `onDelete` callbacks, and with neither it simply keeps the comments in memory — which is what this preview does. It renders nothing unless `VITE_COMMENTER_ENABLED` is truthy or `enabled` is passed, so production builds stay untouched.",
    "",
    "**Modes and shortcuts** — `mod+shift+c` shows and hides the panel, `mod+shift+e` switches to edit mode (clicking the page pins a new comment), `mod+shift+v` back to view mode (read only), and Escape steps back out of the capture, then the draft, then edit mode, then the panel. Note that in edit mode the widget swallows page clicks to turn them into comment targets — including clicks on this gallery's own chrome, so the preview mirrors all three toggles as buttons above the demo page.",
    "",
    "**When to use it** — for design review, QA passes and staging feedback, where the fastest report is the one written on top of the thing being reported. It keeps the reviewer in the page instead of in a ticket form, and hands the team the element, the screenshot and the environment along with the words.",
    "",
    "**When not to use it** — it is not an end-user support channel or a comment system for your product's own content: it targets your markup, so a DOM change can orphan a pin. Ship it to internal and preview environments, keep it off in production, and move anything that needs threads, mentions or notifications into the issue tracker it feeds.",
  ].join("\n"),
  props: [
    {
      name: "defaultOpen",
      control: "boolean",
      default: true,
    },
    {
      name: "defaultMode",
      control: "radio",
      options: [
        { name: "edit", usage: "Clicking any element on the page opens the composer pinned to it." },
        { name: "view", usage: "Read-only: the pins and the list are browsable, the page stays interactive." },
      ],
      default: "edit",
    },
    {
      name: "onCreate",
      callback: (comment: unknown) => comment,
    },
    {
      name: "onDelete",
      callback: (id: string) => id,
    },
    {
      name: "onSelect",
      callback: (comment: unknown) => comment,
    },
  ],
} satisfies MetaType<typeof Commenter, typeof CommenterDemo>;
