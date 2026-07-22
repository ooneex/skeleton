import { createDialog } from "@module/design/components/dialog/Dialog";
import { DialogHeader } from "@module/design/components/dialog/DialogHeader";
import { DialogTitle } from "@module/design/components/dialog/DialogTitle";
import { cn } from "@module/design/utils/cn";
import type { ReactNode } from "react";
import { statusBadgeMap } from "./statusBadgeMap";

export type StatusType = (typeof statusBadgeMap)[number]["status"];

export type StatusPickerPropsType = {
  /** Currently selected status, highlighted in the list. */
  value?: StatusType;
  /** Statuses to offer. Defaults to the full `statusBadgeMap` set. */
  statuses?: readonly StatusType[];
  /** Heading shown above the status list. */
  title?: ReactNode;
};

/**
 * Imperative status picker dialog built on `react-call`.
 *
 * Mount the Root once near the top of your app:
 *
 * ```tsx
 * <StatusPicker />
 * ```
 *
 * Then await a status from anywhere:
 *
 * ```tsx
 * const status = await pickStatus({ value: current })
 * if (status) await api.update({ status })
 * ```
 *
 * Resolves with the chosen status, or `null` when the dialog is dismissed
 * (Escape / outside click).
 */
export const StatusPicker = createDialog<StatusPickerPropsType, StatusType | null>(
  ({ call, value, statuses, title }) => {
    const items = statuses ? statusBadgeMap.filter(({ status }) => statuses.includes(status)) : statusBadgeMap;

    return (
      <>
        {title ? (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        ) : null}
        <div className="flex max-h-72 flex-col gap-1 overflow-y-auto">
          {items.map(({ status, component: BadgeComponent }) => {
            const isSelected = status === value;
            return (
              <button
                key={status}
                type="button"
                onClick={() => call.end(status)}
                className={cn(
                  "flex items-center rounded px-2 py-1.5 text-left cursor-pointer transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected && "bg-accent text-accent-foreground",
                )}
              >
                <BadgeComponent />
              </button>
            );
          })}
        </div>
      </>
    );
  },
  { dismissValue: null, className: "max-w-xs" },
);
StatusPicker.displayName = "StatusPicker";

/** Await a status choice. Resolves the chosen status, or `null` on dismiss. */
export const pickStatus = (props: StatusPickerPropsType = {}) => StatusPicker.call(props);
