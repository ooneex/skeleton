import { TagPicker, type TagPickerPropsType } from "@module/design/components/tag";
import { useEffect, useState } from "react";
import type { MetaType } from "../../shared/story";

const suggestedTags = ["Design system", "Bugfix", "Frontend", "High priority", "Launch", "Needs review"];

type TagDemoPropsType = Omit<TagPickerPropsType, "onChange">;

const TagDemo = ({
  value = ["Design system", "Needs review"],
  suggestedTags: tags = suggestedTags,
  allowCreate = true,
  placeholder = "Add tags…",
  isPending = false,
  size,
}: TagDemoPropsType) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(value);

  useEffect(() => {
    setSelectedTags(value);
  }, [value]);

  return (
    <TagPicker
      value={selectedTags}
      onChange={setSelectedTags}
      suggestedTags={tags}
      allowCreate={allowCreate}
      placeholder={placeholder}
      isPending={isPending}
      size={size}
      aria-label="Tags"
      className="w-80"
    />
  );
};
TagDemo.displayName = "Tag";

export const meta = {
  title: "Tag",
  group: "Components",
  tags: [],
  component: TagPicker,
  storyComponent: TagDemo,
  usage: [
    "**What** — `TagPicker` is a controlled chip field for selecting, filtering, and optionally creating free-form tags. It is built on the combobox stack, so suggestions stay searchable, selected values stay visible as chips, and a create action appears when the typed token is new.",
    "",
    "**How to use it** — render `<TagPicker value={tags} onChange={setTags} suggestedTags={known} />` inline in a form, details view, or filter panel. Seed `value` with the current tags, pass `suggestedTags` for discoverable reuse, and set `allowCreate={false}` when the vocabulary is closed (search-and-select only). Give the field an `aria-label` or `aria-labelledby` so the chips input is named. If the field lives in a modal, compose `Dialog` around it in the app — `TagPicker` is the field, not the dialog.",
    "",
    "**When to use it** — for multi-select labeling and filter flows such as issue tags, folder filters, campaign labels, or product attributes. Keep it inline on the record or inside a filter sidebar, the way a job-listing edit form keeps token inputs next to their labels.",
    "",
    "**When not to use it** — do not use it for a single controlled status value, for a tiny fixed choice set where checkboxes or radios are clearer, or as an imperative dialog (`TagPicker.call` / `pickTags`). Compose your own modal when you need Apply / Clear around the field.",
  ].join("\n"),
  props: [
    {
      name: "value",
      default: ["Design system", "Needs review"],
    },
    {
      name: "suggestedTags",
      default: suggestedTags,
    },
    {
      name: "allowCreate",
      control: "boolean",
      default: true,
    },
    {
      name: "placeholder",
      control: "text",
      default: "Add tags…",
    },
    {
      name: "isPending",
      control: "boolean",
      default: false,
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage: "Smallest chips and icon. Use in dense tables or compact toolbars where tags stay secondary.",
        },
        {
          name: "sm",
          usage: "Compact. The default — fits standard forms and detail panels.",
        },
        {
          name: "md",
          usage: "Standard. Use when the tag input needs a bit more presence alongside larger form fields.",
        },
        {
          name: "lg",
          usage: "Prominent. Use for touch-first layouts or hero forms where tagging is a primary action.",
        },
      ],
      default: "sm",
    },
  ],
} satisfies MetaType<typeof TagPicker, typeof TagDemo>;
