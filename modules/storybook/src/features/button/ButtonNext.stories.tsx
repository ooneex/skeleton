import { ButtonNext } from "@module/design/components/button";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Button.Next",
  group: "Components",
  tags: [],
  component: ButtonNext,
  usage: [
    '**ButtonNext** is a preset `Button` for advancing a flow — a `Next` label followed by a trailing right-arrow (marked `data-icon="inline-end"` so the padding hugs the glyph), locked to the high-emphasis `default` variant. It is the forward counterpart to `ButtonBack`.',
    "",
    "**How to use it** — place it as the primary action on the right of a step's footer. The variant and icon are fixed; set `size` and override `children` when the step needs a clearer verb (`Continue`, `Review order`). It forwards `onClick`, `disabled`, and the other `Button` props.",
    "",
    "**When to use it** — to move forward through wizards, onboarding, checkout, and any paginated or multi-step flow.",
    "",
    '**When not to use it** — do not use it to submit a final form (use `ButtonSave` or a labelled `Button`) or for backward navigation (use `ButtonBack`); it signals "continue", not "commit".',
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Next",
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
        { name: "xs", usage: "Smallest (24px). Use in dense toolbars and inline paginators." },
        { name: "sm", usage: "Compact (32px). The default — fits forms and card footers." },
        { name: "md", usage: "Standard (36px). Use where the action is a focal point of the section." },
        { name: "lg", usage: "Prominent (40px). Use on spacious wizard footers and hero flows." },
      ],
      default: "sm",
    },
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies Meta<typeof ButtonNext>;
