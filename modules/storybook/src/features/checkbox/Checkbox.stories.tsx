import { Checkbox } from "@module/design/components/checkbox";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Checkbox",
  group: "Components",
  tags: [],
  component: Checkbox,
  usage: [
    "**Checkbox** is a single square toggle for an on/off choice, built on Base UI's checkbox primitive. Checked, it fills with the primary color and shows a check mark; it also supports an indeterminate state for parent rows that summarize a partially-selected group. It exposes `data-checked`, hover, focus-visible, and disabled styling and reserves an enlarged hit area around the box so it is easy to tap.",
    "",
    "**How to use it** — pair every checkbox with a visible label (wrap it in your form field so clicking the label toggles the box). Use it uncontrolled with `defaultChecked`, or controlled with `checked` / `onCheckedChange` to lift the value into your state. Set `indeterminate` on a select-all box when only some children are checked. Match `size` to the surrounding type scale.",
    "",
    '**When to use it** — for independent boolean options where several can be on at once: multi-select lists, settings toggles that read as "enabled/disabled", terms-acceptance, and select-all headers. ',
    "",
    "**When not to use it** — do not use a checkbox for a set of mutually exclusive options (use radio buttons), for an instantly-applied setting that reads better as a switch (use a `Switch`), or as a standalone action button.",
  ].join("\n"),
  props: [
    {
      name: "defaultChecked",
      control: "boolean",
      default: true,
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage:
            "Smallest (14px). Use in dense tables and multi-select lists where the box sits inline with small text.",
        },
        {
          name: "sm",
          usage: "Compact (16px). The default — fits standard form rows and settings lists.",
        },
        {
          name: "md",
          usage:
            "Standard (18px). Use in comfortable forms and cards where the option deserves a little more presence.",
        },
        {
          name: "lg",
          usage: "Prominent (20px). Use for touch-first layouts and single, emphasized opt-ins like terms acceptance.",
        },
      ],
      default: "sm",
    },
    {
      name: "indeterminate",
      control: "boolean",
      default: false,
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "onCheckedChange",
      callback: (checked: boolean | "indeterminate") => checked,
    },
  ],
} satisfies Meta<typeof Checkbox>;
