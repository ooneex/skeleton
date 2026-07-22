import { ButtonEdit } from "@module/design/components/button";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Button.Edit",
  group: "Components",
  tags: [],
  component: ButtonEdit,
  usage: [
    "**ButtonEdit** is a preset `Button` for entering edit mode — a pen icon followed by an `Edit` label, locked to the `outline` variant so it reads as a clear but secondary action beside the content it modifies.",
    "",
    "**How to use it** — attach it to a record, card, or detail panel to switch it into an editable state or open an edit form. The variant and icon are fixed; set `size` and override `children` (`Edit profile`) when the target needs naming. It forwards `onClick`, `disabled`, and the remaining `Button` props.",
    "",
    "**When to use it** — to begin editing existing content: a profile, a settings row, a record in a table or detail view.",
    "",
    '**When not to use it** — do not use it to save the resulting changes (use `ButtonSave`) or to add brand-new content (use a labelled `Button` such as `Add`); it means "modify this", not "create" or "commit".',
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Edit",
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
        { name: "sm", usage: "Compact (32px). The default — fits cards and detail headers." },
        { name: "md", usage: "Standard (36px). Use where editing is a focal action of the section." },
        { name: "lg", usage: "Prominent (40px). Use on spacious detail pages and profile headers." },
      ],
      default: "sm",
    },
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies Meta<typeof ButtonEdit>;
