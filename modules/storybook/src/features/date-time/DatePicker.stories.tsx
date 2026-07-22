import { Button } from "@module/design/components/button";
import { DatePicker, pickDate } from "@module/design/components/date-time";
import { useState } from "react";
import type { Meta } from "../../shared/story";

type DatePickerDemoPropsType = {
  /** Heading shown above the calendar inside the dialog. */
  title?: string;
};

/**
 * `DatePicker` is an imperative dialog — it renders nothing until `pickDate()` is
 * awaited — so the preview wraps it in a small demo: mount the Root once, then open it
 * from a button and show the resolved date.
 */
const DatePickerDemo = ({ title }: DatePickerDemoPropsType) => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <DatePicker />
      <div className="flex items-center gap-3">
        <span className="min-w-32 text-center text-sm text-muted-foreground">
          {date ? date.toLocaleDateString() : "No date selected"}
        </span>
        <Button
          onClick={async () => {
            const picked = await pickDate({ value: date ?? undefined, title });
            setDate(picked);
          }}
        >
          Pick a date
        </Button>
      </div>
    </div>
  );
};
DatePickerDemo.displayName = "DatePicker";

export const meta = {
  title: "DatePicker",
  group: "Components",
  tags: [],
  component: DatePickerDemo,
  usage: [
    "**DatePicker** is an imperative single-date dialog built on `react-call`. It drops a full `Calendar` into a modal, seeds it with the current value, and resolves the date you click; dismissing it (Escape / outside click) resolves `null`. You do not render it inline — you mount the Root once near the top of your app and open it on demand with `await pickDate({ value })`.",
    "",
    "**How to use it** — place `<DatePicker />` once at the app root. Anywhere you need a date, call `const date = await pickDate({ value: current })`; it resolves with the chosen `Date`, or `null` when the user dismisses, so branch on the result before applying it. Pass a `title` to label the dialog, or `calendarProps` (everything except the controlled `mode`/`selected`/`onSelect`) to restrict the range, localize, or add disabled days. This preview wires that flow to a button and a readout.",
    "",
    "**When to use it** — for picking one date on demand from a trigger: a due date on a task, a start date on a booking, a filter cutoff. The imperative call keeps the calendar out of the layout until the moment the user asks for it.",
    "",
    "**When not to use it** — do not use it for a persistent, always-visible calendar (embed `Calendar` inline instead), for a date range (this resolves a single date), or for typed date entry where a text `Input` with a mask is faster than opening a modal.",
  ].join("\n"),
  props: [
    {
      name: "title",
      control: "text",
      default: "Select a date",
    },
  ],
} satisfies Meta<typeof DatePickerDemo>;
