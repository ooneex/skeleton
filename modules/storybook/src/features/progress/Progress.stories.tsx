import { Progress } from "@module/design/components/progress";
import type { Meta } from "../../shared/story";

const uploadProgress = (
  <Progress className="w-80" value={68}>
    <div className="flex w-full items-center gap-3">
      <Progress.Label>Uploading assets</Progress.Label>
      <Progress.Value />
    </div>
    <Progress.Track>
      <Progress.Indicator />
    </Progress.Track>
  </Progress>
);

export const meta = {
  title: "Progress",
  group: "Components",
  tags: [],
  component: Progress,
  usage: [
    "**What** — `Progress` is a compound progress bar built from Base UI primitives. The root carries the current `value`, `Progress.Track` draws the rail, `Progress.Indicator` fills that rail as the value changes, and `Progress.Label` plus `Progress.Value` let you name the operation and surface its numeric progress in one composition.",
    "",
    "**How to use it** — render `Progress` with a numeric `value`, then compose a label row and a track beneath it. Put `Progress.Label` and `Progress.Value` together when users need both context and a percentage, and keep `Progress.Indicator` nested inside `Progress.Track` so the fill width follows the root value automatically. Give the root a width class because the track stretches to fill available space.",
    "",
    "**When to use it** — for determinate work the user can wait on: uploads, imports, onboarding steps, background processing, or long-running saves. It is especially useful when showing that work is advancing reassures the user that the system is still active.",
    "",
    "**When not to use it** — do not use a determinate progress bar when you do not know completion. In those cases, use a spinner or skeleton. Also avoid it for tiny operations that finish instantly; the extra motion adds noise without helping comprehension.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: uploadProgress,
    },
    {
      name: "value",
      control: "number",
      default: 68,
    },
    {
      name: "min",
      control: "number",
      default: 0,
    },
    {
      name: "max",
      control: "number",
      default: 100,
    },
  ],
} satisfies Meta<typeof Progress>;
