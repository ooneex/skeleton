import { RadioGroup } from "@module/design/components/radio-group";
import type { Meta } from "../../shared/story";

const options = (
  <RadioGroup defaultValue="comfortable" className="w-[240px] max-w-full">
    <div className="flex items-center gap-3 text-sm">
      <RadioGroup.Item value="default" />
      <span>Default</span>
    </div>
    <div className="flex items-center gap-3 text-sm">
      <RadioGroup.Item value="comfortable" />
      <span>Comfortable</span>
    </div>
    <div className="flex items-center gap-3 text-sm">
      <RadioGroup.Item value="compact" />
      <span>Compact</span>
    </div>
  </RadioGroup>
);

export const meta = {
  title: "RadioGroup",
  group: "Components",
  tags: [],
  component: RadioGroup,
  usage: [
    "**RadioGroup** lets the user pick exactly one option from a short, mutually exclusive set. It is the compound root: it lays its `RadioGroup.Item` children out in a `grid gap-3` column and owns the selection through `value` / `defaultValue`, so choosing one item clears the rest. Each item is a bare radio circle — pair it with a `label` (or text) so the choice is readable and clickable.",
    "",
    "**How to use it** — render one `RadioGroup.Item` per choice, each with a unique `value`, and wrap the item plus its text in a `label` so the whole row is a hit target. Set `defaultValue` for an uncontrolled group, or drive `value` + `onValueChange` when you own the state. Disable the entire set with `disabled` on the root, or a single choice with `disabled` on that item. Keep the list short and the option labels parallel in wording.",
    "",
    "**When to use it** — for a small, fixed set of options (roughly two to six) where the user must land on exactly one: a density setting, a shipping speed, a payment method, a plan tier. The whole set stays visible so the choices can be compared side by side.",
    "",
    "**When not to use it** — do not use it when more than one answer can be true (use checkboxes), when the list is long or dynamic (use a `Select` to save space), or for a binary on/off toggle (use a `Switch`).",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: options,
    },
    {
      name: "defaultValue",
      control: "select",
      options: [
        {
          name: "default",
          usage:
            "The balanced baseline choice. Use it when the interface should feel familiar and neither spacious nor tightly compressed.",
        },
        {
          name: "comfortable",
          usage:
            "The roomier option. Use it when readability matters more than density, such as dashboards and settings screens.",
        },
        {
          name: "compact",
          usage:
            "The densest option. Use it when fitting more information on screen matters, such as tables and admin tools.",
        },
      ],
      default: "comfortable",
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
      name: "onValueChange",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof RadioGroup>;
