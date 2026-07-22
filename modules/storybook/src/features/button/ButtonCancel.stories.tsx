import { ButtonCancel } from "@module/design/components/button";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Button.Cancel",
  group: "Components",
  tags: [],
  component: ButtonCancel,
  usage: [
    "**ButtonCancel** is a preset `Button` for dismissing without committing — an X icon followed by a `Cancel` label, locked to the low-emphasis `ghost` variant so it recedes beside the primary action it sits next to.",
    "",
    "**How to use it** — pair it with a primary button (`ButtonSave`, a `default` `Button`) in a dialog or form footer, placed to its side so the eye lands on the primary action first. The variant and icon are fixed; set `size`, override `children` (`Discard`), and wire `onClick` to close the surface. It forwards the remaining `Button` props.",
    "",
    "**When to use it** — to abandon an in-progress form, close a dialog without saving, or back out of a destructive confirmation.",
    "",
    "**When not to use it** — do not use it for permanent deletion (use `ButtonDelete`) or as the primary action; its quiet styling is deliberate so it never competes with the action it accompanies.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Cancel",
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "size",
      control: "select",
      options: [
        { name: "xs", usage: "Smallest (24px). Use in dense dialogs and inline forms." },
        { name: "sm", usage: "Compact (32px). The default — fits dialog and form footers." },
        { name: "md", usage: "Standard (36px). Use to match a `md` primary button beside it." },
        { name: "lg", usage: "Prominent (40px). Use to match a `lg` primary action on spacious surfaces." },
      ],
      default: "sm",
    },
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies Meta<typeof ButtonCancel>;
