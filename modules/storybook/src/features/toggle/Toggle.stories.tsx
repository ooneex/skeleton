import { Toggle } from "@module/design/components/toggle";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Toggle",
  group: "Components",
  tags: [],
  component: Toggle,
  usage: [
    "**Toggle** is a pressable on/off button for formatting and tool states. It keeps a single control in place while switching its `aria-pressed` state, changing the surface styling when active, and supporting either a quiet `default` look or a bordered `outline` treatment.",
    "",
    '**How to use it** — give it a short text label or an icon that clearly describes the state it controls (`Bold`, `Grid`, `Pin`). Use `defaultPressed` for a self-managed preview or `pressed` + `onPressedChange` when the state belongs to a toolbar, filter bar, or editor. Pick `size` to match the density of the surrounding controls and use `variant="outline"` when the toggle should read as a standalone button instead of blending into a toolbar.',
    "",
    "**When to use it** — for binary interface states the user may switch on and off repeatedly: rich-text formatting, layout modes, pinned filters, or compact view controls. It works best when the label stays the same and only the pressed state changes.",
    "",
    "**When not to use it** — do not use it for mutually exclusive choices across several options (use tabs or radio buttons), for irreversible actions like delete, or for a long-form settings row where a `Switch` communicates enabled/disabled more clearly.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Bold",
    },
    {
      name: "variant",
      control: "select",
      options: [
        {
          name: "default",
          usage:
            "Quiet text-first toggle. Use inside toolbars and grouped formatting controls where the pressed fill is enough emphasis.",
        },
        {
          name: "outline",
          usage:
            "Bordered standalone toggle. Use when the control sits on its own in a panel, card, or filter row and needs a visible resting surface.",
        },
      ],
      default: "default",
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage: "Smallest toggle. Use in dense editor chrome and compact table toolbars.",
        },
        {
          name: "sm",
          usage: "Compact default. Use in most toolbars, side panels, and segmented control rows.",
        },
        {
          name: "md",
          usage: "Standard size. Use when the toggle is a primary control in a form section or filter bar.",
        },
        {
          name: "lg",
          usage: "Largest toggle. Use on touch-friendly layouts or when the label needs more breathing room.",
        },
      ],
      default: "sm",
    },
    {
      name: "defaultPressed",
      control: "boolean",
      default: true,
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "onPressedChange",
      callback: (pressed: boolean) => pressed,
    },
  ],
} satisfies Meta<typeof Toggle>;
