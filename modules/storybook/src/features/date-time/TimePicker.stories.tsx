import { Button } from "@module/design/components/button";
import { pickTime, TimePicker } from "@module/design/components/date-time";
import { useState } from "react";
import type { Meta } from "../../shared/story";

type TimePickerDemoPropsType = {
  /** Initially selected time, formatted `HH:MM`. */
  value?: string;
  /** Heading shown above the hour/minute selectors inside the dialog. */
  title?: string;
  /** Earliest selectable time, formatted `HH:MM`; later slots are filtered out. */
  minTime?: string;
  /** Label on the confirm button. */
  confirmLabel?: string;
};

/**
 * `TimePicker` is an imperative dialog — it renders nothing until `pickTime()` is
 * awaited — so the preview wraps it in a small demo: mount the Root once, then open it
 * from a button and show the resolved `HH:MM` string.
 */
const TimePickerDemo = ({ value, title, minTime, confirmLabel }: TimePickerDemoPropsType) => {
  const [time, setTime] = useState<string | null>(null);
  const resolvedTime = time ?? value ?? null;

  return (
    <div className="flex flex-col items-center gap-4">
      <TimePicker />
      <div className="flex items-center gap-3">
        <span className="min-w-32 text-center text-sm text-muted-foreground">{resolvedTime ?? "No time selected"}</span>
        <Button
          onClick={async () => {
            const picked = await pickTime({ value: resolvedTime ?? undefined, title, minTime, confirmLabel });
            setTime(picked);
          }}
        >
          Pick a time
        </Button>
      </div>
    </div>
  );
};
TimePickerDemo.displayName = "TimePicker";

export const meta = {
  title: "TimePicker",
  group: "Components",
  tags: [],
  component: TimePickerDemo,
  usage: [
    "**TimePicker** is an imperative time-of-day dialog built on `react-call`. It shows paired hour and minute `Select` dropdowns seeded with the current value (or now), and resolves the chosen `HH:MM` string when you confirm; dismissing it (Escape / outside click) resolves `null`. You do not render it inline — you mount the Root once near the top of your app and open it on demand with `await pickTime({ value })`.",
    "",
    "**How to use it** — place `<TimePicker />` once at the app root. Anywhere you need a time, call `const time = await pickTime({ value: current })`; it resolves with a zero-padded `HH:MM` string, or `null` when the user dismisses, so branch on the result before applying it. Pass a `title` to label the dialog, a `minTime` to clamp the earliest selectable slot (the hour and minute lists filter to it), or a `confirmLabel` to rename the action. This preview wires that flow to a button and a readout.",
    "",
    "**When to use it** — for picking a wall-clock time on demand: a reminder, a daily schedule slot, an appointment start. Pair it with `DatePicker` when you need both a date and a time without a heavy combined widget.",
    "",
    "**When not to use it** — do not use it for a full timestamp with a timezone (compose date + time and resolve the zone separately), for durations rather than a time of day, or when free typing (`09:30`) into an `Input` is faster than opening a modal.",
  ].join("\n"),
  props: [
    {
      name: "value",
      control: "text",
      default: "09:30",
    },
    {
      name: "title",
      control: "text",
      default: "Select a time",
    },
    {
      name: "minTime",
      control: "text",
      default: "08:00",
    },
    {
      name: "confirmLabel",
      control: "text",
      default: "Done",
    },
  ],
} satisfies Meta<typeof TimePickerDemo>;
