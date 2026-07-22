import { Switch } from "@module/design/components/switch";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Switch",
  group: "Components",
  tags: [],
  component: Switch,
  usage: [
    "**What** — `Switch` is the design system's compact on/off control for a boolean setting. It wraps Base UI's switch primitive, animates a thumb across a rounded track, exposes checked, focus, and disabled states automatically, and scales through its `size` variants.",
    "",
    "**How to use it** — pair it with a visible label in a `Field` or beside plain text so the user knows exactly what turns on or off. Use `defaultChecked` for an uncontrolled demo or `checked` / `onCheckedChange` when application state owns the value. Pick `size` to match the density of the surrounding settings row; in this preview an `aria-label` is supplied because the control is rendered by itself.",
    "",
    "**When to use it** — for instantly-applied binary preferences such as email notifications, dark mode, auto-renewal, or a feature flag where the two states read naturally as enabled versus disabled.",
    "",
    "**When not to use it** — do not use a switch for a choice among several options (use radios), for a checkbox-style acknowledgement that belongs in a form submission flow, or for a destructive action that should look like a button rather than a persistent setting.",
  ].join("\n"),
  props: [
    {
      name: "aria-label",
      control: "text",
      default: "Enable notifications",
    },
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
            "Smallest track. Use in dense data tables, filter rows, and compact preference lists where the label carries most of the visual weight.",
        },
        {
          name: "sm",
          usage:
            "Compact control. Use for standard settings panels and list rows that need to stay space-efficient without feeling tiny.",
        },
        {
          name: "md",
          usage: "Default size. Use for most forms and account settings where the toggle is a first-class control.",
        },
        {
          name: "lg",
          usage:
            "Largest track. Use in touch-first layouts, mobile settings, or prominent single-toggle cards where easier tapping matters.",
        },
      ],
      default: "md",
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "onCheckedChange",
      callback: (checked: boolean) => checked,
    },
  ],
} satisfies Meta<typeof Switch>;
