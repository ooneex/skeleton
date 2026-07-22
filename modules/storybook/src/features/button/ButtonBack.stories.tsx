import { ButtonBack } from "@module/design/components/button";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Button.Back",
  group: "Components",
  tags: [],
  component: ButtonBack,
  usage: [
    '**ButtonBack** is a preset `Button` for stepping backward — a left-arrow icon followed by a `Back` label, locked to the `outline` variant so it reads as a secondary, low-risk action. It exists so "go back" looks and behaves the same everywhere without each screen re-picking the icon and tone.',
    "",
    "**How to use it** — drop it in wherever the user needs to return to the previous step or view; the icon and variant are fixed, so you only set `size` and, if the default word does not fit, override `children` (`Back to results`). It forwards `onClick`, `disabled`, and the rest of the `Button` props.",
    "",
    "**When to use it** — for reverse navigation in multi-step flows, wizards, detail→list returns, and paginated back moves.",
    "",
    '**When not to use it** — do not use it for the primary forward action (use `ButtonNext`) or for cancelling/discarding (use `ButtonCancel`); it means "go back a step", not "abandon".',
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Back",
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
} satisfies Meta<typeof ButtonBack>;
