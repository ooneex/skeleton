import { Rating } from "@module/design/components/rating";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Rating",
  group: "Components",
  tags: [],
  component: Rating,
  usage: [
    "**What** — `Rating` is an expressive, interactive score picker. It supports four real variants: `star` for the familiar row of icons, `gradient` for a single fillable icon slider, `text` for labeled choices, and `emoji` for sentiment-based reactions. It also supports read-only and disabled states, custom icons, optional labels/tooltips, and celebratory sparkles for high ratings.",
    "",
    "**How to use it** — provide a numeric `value`, optionally listen to `onValueChange`, and choose the `variant` that matches the kind of feedback you want. Use the default `star` variant for common five-point reviews, `gradient` when a single large icon feels more playful, `text` when the scale labels matter, and `emoji` when users are reacting emotionally rather than scoring analytically. Keep `count` aligned with the meaning of your scale.",
    "",
    "**When to use it** — for product reviews, satisfaction surveys, lightweight feedback after a flow, or any moment where the user should grade an experience quickly without typing. The variant choice lets you tune the tone from formal scoring to friendly reaction.",
    "",
    "**When not to use it** — do not use rating as the sole input when you need nuanced qualitative feedback or precise measurement criteria. Avoid it for destructive approvals or binary confirmations, where a checkbox, button, or explicit select communicates intent more clearly.",
  ].join("\n"),
  props: [
    {
      name: "value",
      control: "number",
      default: 4,
    },
    {
      name: "variant",
      control: "radio",
      options: [
        {
          name: "star",
          usage:
            "Classic row of stars. Use for familiar review and feedback flows where users expect a standard five-star score.",
        },
        {
          name: "gradient",
          usage:
            "Single icon with vertical fill interaction. Use when you want a playful, tactile score control in a compact space.",
        },
        {
          name: "text",
          usage:
            "Discrete labeled choices. Use when the wording of each level matters more than decorative iconography.",
        },
        {
          name: "emoji",
          usage:
            "Expressive reaction faces. Use for mood checks, sentiment capture, and friendly product feedback moments.",
        },
      ],
      default: "star",
    },
    {
      name: "count",
      control: "number",
      default: 5,
    },
    {
      name: "readOnly",
      control: "boolean",
      default: false,
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "onValueChange",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof Rating>;
