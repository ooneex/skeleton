import { Calendar, type CalendarPropsType } from "@module/design/components/calendar/Calendar";
import { createDialog } from "@module/design/components/dialog/Dialog";
import { DialogHeader } from "@module/design/components/dialog/DialogHeader";
import { DialogTitle } from "@module/design/components/dialog/DialogTitle";
import type { ReactNode } from "react";

export type DatePickerPropsType = {
  /** Initially selected date. */
  value?: Date;
  /** Calendar configuration, minus the controlled selection props. */
  calendarProps?: Omit<CalendarPropsType, "mode" | "selected" | "onSelect">;
  /** Heading shown above the calendar. */
  title?: ReactNode;
};

/**
 * Imperative date picker dialog built on `react-call`.
 *
 * Mount the Root once near the top of your app:
 *
 * ```tsx
 * <DatePicker />
 * ```
 *
 * Then await a date from anywhere:
 *
 * ```tsx
 * const date = await pickDate({ value: current })
 * if (date) setDueDate(date)
 * ```
 *
 * Resolves with the chosen date, or `null` when the dialog is dismissed
 * (Escape / outside click).
 */
export const DatePicker = createDialog<DatePickerPropsType, Date | null>(
  ({ call, value, calendarProps, title }) => {
    return (
      <>
        {title ? (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        ) : null}
        <Calendar
          fullWidth
          mode="single"
          selected={value}
          onSelect={(date) => call.end(date ?? null)}
          {...calendarProps}
        />
      </>
    );
  },
  { dismissValue: null, className: "max-w-fit" },
);
DatePicker.displayName = "DatePicker";

/** Await a date choice. Resolves the chosen date, or `null` on dismiss. */
export const pickDate = (props: DatePickerPropsType = {}) => DatePicker.call(props);
