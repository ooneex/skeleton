import { Badge } from "@module/design/components/badge";
import { Button } from "@module/design/components/button";
import { TagPicker, type TagPickerPropsType } from "@module/design/components/tag";
import { useEffect, useState } from "react";
import type { Meta } from "../../shared/story";

const suggestedTags = ["Design system", "Bugfix", "Frontend", "High priority", "Launch", "Needs review"];

type TagDemoPropsType = TagPickerPropsType;

const TagDemo = ({
  value = ["Design system", "Needs review"],
  suggestedTags: tags = suggestedTags,
  allowCreate = true,
  placeholder = "Add tags…",
  isPending = false,
  title = "Edit tags",
  confirmLabel = "Done",
  size = "sm",
}: TagDemoPropsType) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(value);

  useEffect(() => {
    setSelectedTags(value);
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-4">
      <TagPicker />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {selectedTags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={async () => {
          const nextTags = await TagPicker.call({
            value: selectedTags,
            suggestedTags: tags,
            allowCreate,
            placeholder,
            isPending,
            title,
            confirmLabel,
            size,
          });
          if (nextTags) {
            setSelectedTags(nextTags);
          }
        }}
      >
        Choose tags
      </Button>
    </div>
  );
};
TagDemo.displayName = "Tag";

export const meta = {
  title: "Tag",
  group: "Components",
  tags: [],
  component: TagDemo,
  usage: [
    "**What** — `Tag` in this module is the imperative `TagPicker` dialog for selecting, filtering, and optionally creating free-form tags. It is built on the combobox stack, so the dialog lets users search suggestions, keep multiple selected chips visible, and finish with a single confirmation action.",
    "",
    "**How to use it** — mount `TagPicker` once near your app root, then call `await TagPicker.call({ value, suggestedTags, allowCreate, placeholder, title, confirmLabel })` whenever a form or details view needs tag editing. Seed `value` with the current tags so the dialog opens populated, pass `suggestedTags` for discoverable reuse, and leave `allowCreate` on when the vocabulary should stay open-ended.",
    "",
    "**When to use it** — for multi-select labeling flows such as issue tags, campaign labels, product attributes, or organizational metadata where reuse is helpful but teams may still need to mint a new tag on the fly.",
    "",
    "**When not to use it** — do not use it for a single controlled status value, for a tiny fixed choice set where checkboxes or radios are clearer, or when users should not be allowed to create arbitrary new labels because the taxonomy must stay tightly governed.",
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
      name: "title",
      control: "text",
      default: "Edit tags",
    },
    {
      name: "confirmLabel",
      control: "text",
      default: "Done",
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
} satisfies Meta<typeof TagDemo>;
