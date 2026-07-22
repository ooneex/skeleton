import { Button } from "@module/design/components/button";
import { Toaster, toaster } from "@module/design/components/toaster";
import type { Meta } from "../../shared/story";

type ToasterDemoPropsType = {
  title?: string;
  description?: string;
  duration?: number;
};

const ToasterDemo = ({ title, description, duration = 2400 }: ToasterDemoPropsType) => {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-4">
      <Toaster />
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button onClick={() => toaster.success(title ?? "Changes saved", { description, duration })}>Success</Button>
        <Button
          variant="secondary"
          onClick={() => toaster.info(title ?? "New update available", { description, duration })}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => toaster.warning(title ?? "Profile incomplete", { description, duration })}
        >
          Warning
        </Button>
        <Button
          variant="destructive"
          onClick={() => toaster.error(title ?? "Upload failed", { description, duration })}
        >
          Error
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            const handle = toaster.loading(title ?? "Uploading assets", { description, duration });
            setTimeout(() => toaster.dismiss(handle), duration);
          }}
        >
          Loading
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toaster.promise(new Promise<void>((resolve) => setTimeout(resolve, duration)), {
              loading: title ?? "Publishing release",
              success: "Release published",
              error: "Release failed",
            })
          }
        >
          Promise
        </Button>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Mount <code>Toaster</code> once, then trigger notifications anywhere through the imperative <code>toaster</code>{" "}
        helpers.
      </p>
    </div>
  );
};

ToasterDemo.displayName = "Toaster";

export const meta = {
  title: "Toaster",
  group: "Components",
  tags: [],
  component: ToasterDemo,
  usage: [
    "**Toaster** is the mounted toast stack for the imperative `toaster` API. The visible component is just the rendering outlet; the real workflow is `toaster.success`, `error`, `warning`, `info`, `loading`, and `promise`, which create transient notifications with matching icons, a progress bar for auto-dismissing states, and manual dismissal for long-running work.",
    "",
    "**How to use it** — render `<Toaster />` once near the top of the app, then call the `toaster` helpers from forms, mutations, uploads, or background tasks. Keep titles short and action-oriented, add a `description` only when the user needs one extra clarifying line, and reserve `loading` / `promise` for work whose lifecycle matters. This story mounts the outlet and gives you buttons to trigger each built-in state.",
    "",
    "**When to use it** — for lightweight feedback that should appear immediately without interrupting the current task: save confirmations, request failures, warnings, and async progress updates. It is ideal when the user needs confirmation but should remain in flow.",
    "",
    "**When not to use it** — do not use a toast for critical confirmation, multi-step input, or content the user must review in detail. If the message needs a decision, a form, or guaranteed acknowledgement, use a dialog instead.",
  ].join("\n"),
  props: [
    {
      name: "title",
      control: "text",
      default: "Changes saved",
    },
    {
      name: "description",
      control: "text",
      default: "All edits have been synced to the workspace.",
    },
    {
      name: "duration",
      control: "number",
      default: 2400,
    },
  ],
} satisfies Meta<typeof ToasterDemo>;
