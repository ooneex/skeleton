import { SlidingNumber } from "@module/design/components/number";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "SlidingNumber",
  group: "Components",
  tags: [],
  component: SlidingNumber,
  usage: [
    "**SlidingNumber** is an animated numeric display: each digit is its own vertical reel that springs up or down to the new figure whenever `value` changes, so the number rolls like an odometer instead of snapping. It renders one reel per integer digit (plus a separator and reels for any decimals), keeps everything tabular so the width stays stable, and shows a leading `-` for negatives.",
    "",
    "**How to use it** — drive it with a single `value` number and let it animate as that value updates. Set `padStart` to keep a leading zero on single-digit integers (clocks, countdowns like `05`). Override `decimalSeparator` for locales that use a comma. Style the container with `className` — font size, weight, and color are inherited, so wrap it in your type styles rather than passing them here. Because the reels measure themselves on mount, give it a stable line-height context.",
    "",
    "**When to use it** — for live figures where the transition itself carries meaning and draws the eye: counters, live vote or view counts, prices ticking, stopwatch/countdown timers, animated stat tiles.",
    "",
    "**When not to use it** — do not use it for static numbers that never change (plain text is lighter), for identifiers or codes where the rolling animation is noise (order numbers, phone numbers, zip codes), or for very long numbers where per-digit springs become distracting rather than delightful.",
  ].join("\n"),
  props: [
    {
      name: "value",
      control: "number",
      default: 1234,
    },
    {
      name: "padStart",
      control: "boolean",
      default: false,
    },
    {
      name: "decimalSeparator",
      control: "text",
      default: ".",
    },
  ],
} satisfies Meta<typeof SlidingNumber>;
