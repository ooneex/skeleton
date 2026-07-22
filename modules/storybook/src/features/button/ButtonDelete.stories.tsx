import { ButtonDelete } from "@module/design/components/button";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Button.Delete",
  group: "Components",
  tags: [],
  component: ButtonDelete,
  usage: [
    "**ButtonDelete** is a preset `Button` for destructive removal — a trash icon followed by a `Delete` label, locked to the `destructive` variant so the danger of the action reads before the user clicks.",
    "",
    "**How to use it** — trigger it from a confirmation step rather than performing an irreversible delete on the first click; typically it opens a confirm dialog, and the dialog's own confirm button is the one that finalizes. The variant and icon are fixed; set `size` and override `children` (`Remove`, `Delete account`) to name what is being destroyed. It forwards `onClick`, `disabled`, and the other `Button` props.",
    "",
    "**When to use it** — for actions that remove or destroy data: deleting a record, removing a member, revoking access.",
    "",
    "**When not to use it** — do not use it for a safe, reversible dismissal (use `ButtonCancel`) or for the primary save action (use `ButtonSave`); its alarming styling should be reserved for genuine loss.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Delete",
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
        { name: "xs", usage: "Smallest (24px). Use in dense table rows and inline record controls." },
        { name: "sm", usage: "Compact (32px). The default — fits dialog and form footers." },
        { name: "md", usage: "Standard (36px). Use where the delete is a focal action of the section." },
        { name: "lg", usage: "Prominent (40px). Use on spacious danger-zone settings panels." },
      ],
      default: "sm",
    },
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies Meta<typeof ButtonDelete>;
