import { Button } from "@module/design/components/button";
import { Empty } from "@module/design/components/empty";
import { FolderOpenIcon } from "@module/design/icons/outline/files-folders/sm/FolderOpenIcon";
import { PlusIcon } from "@module/design/icons/outline/ui-layout/sm/PlusIcon";
import type { Meta } from "../../shared/story";

const emptyState = (
  <Empty>
    <Empty.Header>
      <Empty.Media variant="icon">
        <FolderOpenIcon />
      </Empty.Media>
      <Empty.Title>No projects yet</Empty.Title>
      <Empty.Description>Create your first project to get started. It only takes a minute.</Empty.Description>
    </Empty.Header>
    <Empty.Content>
      <Button>
        <PlusIcon />
        New project
      </Button>
    </Empty.Content>
  </Empty>
);

export const meta = {
  title: "Empty",
  group: "Components",
  tags: [],
  component: Empty,
  usage: [
    "**Empty** is the placeholder shown where content would normally be but there is none yet. It is a compound component: the `Empty` root is a centered, dashed-bordered panel that stacks its sub-components — `Empty.Header` groups the visual and copy, `Empty.Media` frames an icon or illustration, `Empty.Title` states the situation, `Empty.Description` explains it, and `Empty.Content` holds the actions that resolve it.",
    "",
    '**How to use it** — wrap the region in `Empty` and compose an `Empty.Header` containing an `Empty.Media` (use `variant="icon"` for a small muted icon tile), an `Empty.Title`, and a one-line `Empty.Description`. Put the primary call to action — a button that creates the missing item, or a link that adjusts a filter — inside `Empty.Content`. Keep the title short and the description to a single sentence that tells the user how to move forward.',
    "",
    "**When to use it** — for the first-run state of a list, table, or board before any records exist; for a search or filter that returned nothing; and for a cleared inbox or completed queue. It reassures the user that the blank space is expected and points them at the next step.",
    "",
    "**When not to use it** — do not use it to report a failure (use an error state or `ErrorFallback`) or while data is still loading (use a skeleton or spinner). It is for a legitimately empty, non-error, non-pending state — not a catch-all for every absence of content.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: emptyState,
    },
  ],
} satisfies Meta<typeof Empty>;
