import { ButtonNext } from "@module/design/components/button";
import type { MetaType } from "../../shared/story";
import { BUTTON_NAVIGATION_SIZE_PROP } from "./buttonNavigationSizeOptions";

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
    BUTTON_NAVIGATION_SIZE_PROP,
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies MetaType<typeof ButtonNext>;
