import { Label } from "@module/design/components/label";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Label",
  group: "Components",
  tags: [],
  component: Label,
  usage: [
    "**Label** is the caption for a form control, rendered as a `label` in an uppercase, tracked, muted style. It sizes through the `size` scale, can append a required marker (`*`) via `required`, and automatically dims itself when its associated control (or an enclosing group) is disabled.",
    "",
    "**How to use it** — give it an `htmlFor` matching the control's `id`, or wrap the control inside it, so clicking the label focuses the input and screen readers announce the pair. Set `required` instead of typing an asterisk. Keep the text a short noun phrase; longer guidance belongs in a description beneath the control. Inside a `Field`, prefer `Field.Label`, which builds on this component.",
    "",
    "**When to use it** — to name any single form control: inputs, selects, checkboxes, switches, and radios, in forms, filters, and settings.",
    "",
    "**When not to use it** — as a heading for a group of controls (there is no single input to point at — use a group title instead), or as generic body text; its uppercase, muted treatment reads specifically as a control label.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Email",
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage:
            "Smallest. Use in dense forms, filter bars, and table headers where labels sit tight against controls.",
        },
        {
          name: "sm",
          usage: "The default. Use for standard form fields in dialogs, panels, and settings pages.",
        },
        {
          name: "md",
          usage: "Larger. Use where a field leads a card or a prominent section and the label needs more presence.",
        },
        {
          name: "lg",
          usage: "Largest. Use sparingly for hero or single-field forms where the label doubles as the focal heading.",
        },
      ],
      default: "sm",
    },
    {
      name: "required",
      control: "boolean",
      default: false,
    },
  ],
} satisfies Meta<typeof Label>;
