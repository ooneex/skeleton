import { ButtonSave } from "@module/design/components/button";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Button.Save",
  group: "Components",
  tags: [],
  component: ButtonSave,
  usage: [
    "**ButtonSave** is a preset `Button` for committing changes — a floppy-disk icon followed by a `Save` label, locked to the high-emphasis `default` variant so it reads as the primary action of a form. It keeps the save affordance identical across every editor in the app.",
    "",
    '**How to use it** — place it as the primary button in a form or editor footer. The variant and icon are fixed; set `size`, override `children` when needed (`Save changes`, `Publish`), and wire `onClick`/`type="submit"` and `disabled` (to gate on a valid, dirty form). It forwards the remaining `Button` props.',
    "",
    "**When to use it** — to persist edits: saving a form, settings, a draft, or a record.",
    "",
    "**When not to use it** — do not use it for a destructive commit (use `ButtonDelete`) or for merely moving to the next step without persisting (use `ButtonNext`).",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Save",
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
        { name: "xs", usage: "Smallest (24px). Use in dense inline editors and table-row forms." },
        { name: "sm", usage: "Compact (32px). The default — fits standard form footers." },
        { name: "md", usage: "Standard (36px). Use where saving is a focal action of the section." },
        { name: "lg", usage: "Prominent (40px). Use on spacious settings pages and primary editors." },
      ],
      default: "sm",
    },
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies Meta<typeof ButtonSave>;
