import { Calendar } from "@module/design/components/calendar";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Calendar",
  group: "Components",
  tags: [],
  component: Calendar,
  usage: [
    "**Calendar** is a month grid for picking dates, built on `react-day-picker`. It renders a navigable month with weekday headers, previous/next chevrons, and a clickable caption that jumps back to the current month. The `mode` prop decides what a click does: select one day, a set of independent days, or a start-to-end range. It manages its own selection when used uncontrolled, or you can drive it with `selected` / `onSelect`.",
    "",
    "**How to use it** — set `mode` to match the interaction you need (`single`, `multiple`, or `range`). Leave it uncontrolled to demo or prototype, or pass `selected` and `onSelect` to lift the value into your own state. Use `fullWidth` when the calendar sits inside a panel and should stretch to fill it; keep it off (the default `w-fit`) for popovers and menus where it should hug its content. Weeks start on Monday and `fixedWeeks` keeps the grid height stable across months.",
    "",
    "**When to use it** — for any inline date selection: booking flows, schedulers, filters, and forms where seeing the surrounding month matters. For a compact field that opens the calendar in a dialog, wrap it with `DatePicker` (`pickDate`) rather than embedding the raw grid.",
    "",
    "**When not to use it** — do not use it for free-text or numeric date entry where the user already knows the exact date (a masked input is faster), and do not use it to pick a time of day — pair it with a separate time control for that.",
  ].join("\n"),
  props: [
    {
      name: "mode",
      control: "radio",
      options: [
        {
          name: "single",
          usage:
            "Select exactly one day. Use for due dates, birthdays, appointment dates — anywhere a single point in time is chosen.",
        },
        {
          name: "multiple",
          usage:
            "Toggle any number of independent days on and off. Use for marking availability, recurring off-days, or bulk-selecting dates that are not contiguous.",
        },
        {
          name: "range",
          usage:
            "Pick a start and end day with the span highlighted between them. Use for booking stays, report windows, and any from–to date filter.",
        },
      ],
      default: "single",
    },
    {
      name: "fullWidth",
      control: "boolean",
      default: false,
    },
    {
      name: "numberOfMonths",
      control: "number",
      default: 1,
    },
    {
      name: "showOutsideDays",
      control: "boolean",
      default: true,
    },
    {
      name: "showWeekNumber",
      control: "boolean",
      default: false,
    },
    {
      name: "disableNavigation",
      control: "boolean",
      default: false,
    },
  ],
} satisfies Meta<typeof Calendar>;
