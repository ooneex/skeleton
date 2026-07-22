import { Select } from "@module/design/components/select";
import type { ComponentProps } from "react";
import type { Meta } from "../../shared/story";

type SelectDemoPropsType = {
  defaultValue?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  modal?: boolean;
  onOpenChange?: ComponentProps<typeof Select>["onOpenChange"];
  onValueChange?: ComponentProps<typeof Select>["onValueChange"];
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: ComponentProps<typeof Select.Trigger>["size"];
};

const SelectDemo = ({
  defaultValue = "team",
  defaultOpen = false,
  disabled = false,
  modal = true,
  onOpenChange,
  onValueChange,
  placeholder = "Choose a plan",
  readOnly = false,
  required = false,
  size = "sm",
}: SelectDemoPropsType) => {
  return (
    <Select
      defaultValue={defaultValue}
      defaultOpen={defaultOpen}
      disabled={disabled}
      modal={modal}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
      readOnly={readOnly}
      required={required}
    >
      <Select.Trigger size={size} className="w-72" disabled={disabled}>
        <Select.Value size={size} placeholder={placeholder} />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Recommended</Select.Label>
          <Select.Item size={size} value="starter">
            Starter
          </Select.Item>
          <Select.Item size={size} value="team">
            Team
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Scale</Select.Label>
          <Select.Item size={size} value="business">
            Business
          </Select.Item>
          <Select.Item size={size} value="enterprise">
            Enterprise
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  );
};
SelectDemo.displayName = "Select";

export const meta = {
  title: "Select",
  group: "Components",
  tags: [],
  component: SelectDemo,
  usage: [
    "**Select** is a composed, trigger-driven picker for choosing one value from a list. It brings together `Select.Trigger`, `Select.Value`, `Select.Content`, `Select.Group`, `Select.Label`, `Select.Item`, and `Select.Separator` so the closed field, the popup, and the option list all stay visually aligned.",
    "",
    "**How to use it** — wrap the whole control in `Select`, place a `Select.Trigger` with a `Select.Value` inside it, then render one or more grouped item lists in `Select.Content`. Keep the trigger width explicit so the popup width feels stable. Use labels and separators when the list has meaningful sections, and choose the same `size` on the trigger and items so the rhythm stays consistent.",
    "",
    "**When to use it** — for compact, mutually-exclusive choices such as plan pickers, assignee filters, country pickers, or any form field where only one option can be active at a time.",
    "",
    "**When not to use it** — do not use a select for multi-select workflows, command-style searching across a large dataset, or two or three visible choices that would be clearer as radio buttons.",
  ].join("\n"),
  props: [
    {
      name: "defaultValue",
      control: "text",
      default: "team",
    },
    {
      name: "defaultOpen",
      control: "boolean",
      default: true,
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "readOnly",
      control: "boolean",
      default: false,
    },
    {
      name: "required",
      control: "boolean",
      default: false,
    },
    {
      name: "modal",
      control: "boolean",
      default: true,
    },
    {
      name: "placeholder",
      control: "text",
      default: "Choose a plan",
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage: "Smallest (24px). Use in dense tables and compact toolbars.",
        },
        {
          name: "sm",
          usage: "Compact (32px). Fits standard form rows.",
        },
        {
          name: "md",
          usage: "Standard (36px). The default here — use in comfortable forms and dialogs.",
        },
        {
          name: "lg",
          usage: "Prominent (40px). Use for touch-first layouts and hero forms.",
        },
      ],
      default: "md",
    },
    {
      name: "onValueChange",
      callback: () => {},
    },
    {
      name: "onOpenChange",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof SelectDemo>;
