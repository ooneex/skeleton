import { Combobox } from "@module/design/components/combobox";
import type { Meta } from "../../shared/story";

const fruits = ["Apple", "Banana", "Blueberry", "Grapes", "Mango", "Orange", "Pineapple", "Strawberry"];

const single = (
  <Combobox items={fruits} defaultOpen>
    <Combobox.Input placeholder="Search fruit…" className="w-64" />
    <Combobox.Content className="w-64">
      <Combobox.Empty>No fruits found.</Combobox.Empty>
      <Combobox.List>
        {(item) => (
          <Combobox.Item key={item} value={item}>
            {item}
          </Combobox.Item>
        )}
      </Combobox.List>
    </Combobox.Content>
  </Combobox>
);

export const meta = {
  title: "Combobox",
  group: "Components",
  tags: [],
  component: Combobox,
  usage: [
    "**Combobox** is a text input fused with a filterable dropdown — a searchable select built on Base UI. The user types to filter a list of options and picks one (or several, in multi-select mode). It is a compound component: `Combobox.Input` is the search field, `Combobox.Content` is the popup, `Combobox.List` maps over `items`, `Combobox.Item` is a choice, and `Combobox.Empty` shows when nothing matches. For multi-select there is `Combobox.Chips`, `Combobox.Chip`, and `Combobox.ChipsInput`; for structure, `Combobox.Group`, `Combobox.Label`, and `Combobox.Separator`.",
    "",
    "**How to use it** — pass the option list to the root's `items` prop and render each with a render-prop `Combobox.List`. Use it uncontrolled with `defaultValue`, or controlled with `value` / `onValueChange`. Always include a `Combobox.Empty` so a no-match search isn't a blank popup. Add `multiple` and swap the input for `Combobox.Chips` + `Combobox.ChipsInput` when more than one value can be selected. Anchor a chips popup with `useComboboxAnchor`.",
    "",
    "**When to use it** — when the option set is long enough that scanning a plain dropdown is slow (countries, users, tags, products) and filtering by typing is faster. Use multi-select chips when the user assembles a set rather than picking one.",
    "",
    "**When not to use it** — for a handful of options, use a `Select`; for free-text with only hints, use an input with suggestions; for a yes/no or small mutually-exclusive set, use radios or a segmented control. Don't use it when every option must stay visible at once.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: single,
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
      name: "onOpenChange",
      callback: (open: boolean) => open,
    },
    {
      name: "onValueChange",
      callback: (...args: readonly unknown[]) => args,
    },
  ],
} satisfies Meta<typeof Combobox>;
