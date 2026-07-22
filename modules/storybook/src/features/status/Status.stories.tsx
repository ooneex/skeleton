import { Button } from "@module/design/components/button";
import {
  StatusPicker,
  type StatusPickerPropsType,
  type StatusType,
  statusBadgeMap,
} from "@module/design/components/status";
import { useEffect, useState } from "react";
import type { Meta } from "../../shared/story";

const workflowStatuses = [
  "draft",
  "pending",
  "inReview",
  "approved",
  "rejected",
  "completed",
  "archived",
] satisfies readonly StatusType[];

type StatusSizeType = "xs" | "sm" | "md" | "lg";
type StatusDemoPropsType = StatusPickerPropsType & { size?: StatusSizeType };

const StatusDemo = ({
  value = "pending",
  title = "Update order status",
  statuses = workflowStatuses,
  size = "sm",
}: StatusDemoPropsType) => {
  const [selectedStatus, setSelectedStatus] = useState<StatusType>(value);

  useEffect(() => {
    setSelectedStatus(value);
  }, [value]);

  const selectedBadge = statusBadgeMap.find((item) => item.status === selectedStatus);
  const SelectedBadge = selectedBadge?.component;

  return (
    <div className="flex flex-col items-center gap-4">
      <StatusPicker />
      {SelectedBadge ? <SelectedBadge size={size}>{selectedBadge.label}</SelectedBadge> : null}
      <Button
        variant="outline"
        onClick={async () => {
          const nextStatus = await StatusPicker.call({ value: selectedStatus, statuses, title });
          if (nextStatus) {
            setSelectedStatus(nextStatus);
          }
        }}
      >
        Choose status
      </Button>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {statuses.map((status) => {
          const badge = statusBadgeMap.find((item) => item.status === status);
          if (!badge) return null;
          const BadgeComponent = badge.component;
          return (
            <BadgeComponent key={status} size={size}>
              {badge.label}
            </BadgeComponent>
          );
        })}
      </div>
    </div>
  );
};
StatusDemo.displayName = "Status";

export const meta = {
  title: "Status",
  group: "Components",
  tags: [],
  component: StatusDemo,
  usage: [
    "**What** — `Status` in this design module is a ready-made status system: semantic badge components such as `StatusPendingBadge`, `StatusApprovedBadge`, and `StatusArchivedBadge`, plus the imperative `StatusPicker` dialog for choosing one of those states. The preview shows both the currently selected badge and the picker entry point that opens the dialog.",
    "",
    "**How to use it** — render the specific badge component inline anywhere a record's state must be scannable at a glance, and mount `StatusPicker` once near the top of your app when users need to change that state from a dialog. Call `await StatusPicker.call({ value, statuses, title })` to open the chooser with the current status preselected and, if needed, a restricted subset of allowed workflow states. All status badges reuse the badge `size` scale (`xs`, `sm`, `md`, `lg`).",
    "",
    "**When to use it** — for workflow, delivery, moderation, availability, and lifecycle states that should stay semantically consistent across lists, detail pages, and dialogs instead of every screen inventing its own color chip.",
    "",
    "**When not to use it** — do not use a status badge as a generic category tag with no state meaning, and do not open the picker when the user is only viewing data with no permission to change it. If you need free-form labeling rather than a controlled status vocabulary, use tags instead.",
  ].join("\n"),
  props: [
    {
      name: "value",
      control: "select",
      options: [
        {
          name: "draft",
          usage: "Not yet ready for review or release. Use for new records the team is still shaping internally.",
        },
        {
          name: "pending",
          usage:
            "Waiting for someone or something else. Use when work is queued but no active review or approval has started yet.",
        },
        {
          name: "inReview",
          usage: "Currently being evaluated. Use for approvals, QA, or editorial passes that are actively underway.",
        },
        {
          name: "approved",
          usage: "Explicitly accepted. Use after a reviewer or business owner signs off and the item can move forward.",
        },
        {
          name: "rejected",
          usage: "Explicitly declined. Use when an item failed review and needs rework or should not continue.",
        },
        {
          name: "completed",
          usage: "Work finished successfully. Use when the lifecycle is done and there is nothing left to process.",
        },
        {
          name: "archived",
          usage:
            "Kept for history, not active work. Use when an item should remain visible for reference but no longer participate in current flows.",
        },
      ],
      default: "pending",
    },
    {
      name: "title",
      control: "text",
      default: "Update order status",
    },
    {
      name: "statuses",
      default: workflowStatuses,
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage:
            "Smallest badge. Use in tight tables and metadata rows where the status must stay visible but secondary.",
        },
        {
          name: "sm",
          usage:
            "Compact default. Use in list rows, cards, and dialogs where the status is important but not the page headline.",
        },
        {
          name: "md",
          usage: "Roomier badge. Use on detail pages and section headers where the status deserves more presence.",
        },
        {
          name: "lg",
          usage:
            "Largest badge. Use for hero summaries and key workflow screens where the current state anchors the layout.",
        },
      ],
      default: "sm",
    },
  ],
} satisfies Meta<typeof StatusDemo>;
