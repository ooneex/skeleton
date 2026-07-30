import { FormRow } from "@module/design/components/form/FormRow";
import { EnvelopeIcon } from "@module/design/icons/outline/communication/sm/EnvelopeIcon";
import { CalendarIcon } from "@module/design/icons/outline/time/sm/CalendarIcon";
import type { MetaType } from "../../shared/story";

type FormRowDemoPropsType = {
  icon?: "calendar" | "mail" | "none";
  label?: string;
  children?: string;
};

const FormRowDemo = ({
  icon = "mail",
  label = "Email address",
  children = "name@example.com",
}: FormRowDemoPropsType) => {
  const resolvedIcon = icon === "calendar" ? CalendarIcon : icon === "mail" ? EnvelopeIcon : undefined;
  return (
    <div className="max-w-lg rounded border border-border p-4">
      <FormRow icon={resolvedIcon} label={label}>
        {children}
      </FormRow>
    </div>
  );
};

FormRowDemo.displayName = "FormRow";

export const meta = {
  title: "FormRow",
  group: "Components",
  tags: [],
  component: FormRowDemo,
  usage: [
    "**FormRow** is a small layout helper for settings and review screens. It aligns an optional leading icon, a muted label, and arbitrary body content into one row so field summaries stay visually consistent without rebuilding the flex layout each time.",
    "",
    "**How to use it** — pass a short label, optional icon component or node, and the body content to render on the right. It works well for read-only summaries, compact configuration rows, and confirmation steps inside multi-step flows where the actual interactive control lives elsewhere.",
    "",
    "**When to use it** — on settings pages, confirmation steps, or profile sections that need to present labelled content in a calm two-column rhythm.",
    "",
    "**When not to use it** — do not use it for full interactive form controls that need native label/input relationships, help text, validation, or grid-level layout; use the real form field components instead.",
  ].join("\n"),
  props: [
    {
      name: "icon",
      control: "radio",
      options: [
        {
          name: "mail",
          usage: "Envelope icon. Use for contact details, notifications, and message-related rows.",
        },
        {
          name: "calendar",
          usage: "Calendar icon. Use for dates, schedules, and time-based settings or summaries.",
        },
        {
          name: "none",
          usage: "No icon. Use when the label and content are already clear and extra chrome would add noise.",
        },
      ],
      default: "mail",
    },
    {
      name: "label",
      control: "text",
      default: "Email address",
    },
    {
      name: "children",
      control: "text",
      default: "name@example.com",
    },
  ],
} satisfies MetaType<typeof FormRowDemo>;
