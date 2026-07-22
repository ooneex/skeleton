import { Button } from "@module/design/components/button/Button";
import { createDialog } from "@module/design/components/dialog/Dialog";
import { DialogHeader } from "@module/design/components/dialog/DialogHeader";
import { DialogTitle } from "@module/design/components/dialog/DialogTitle";
import { Select } from "@module/design/components/select/Select";
import { SelectContent } from "@module/design/components/select/SelectContent";
import { SelectItem } from "@module/design/components/select/SelectItem";
import { SelectTrigger } from "@module/design/components/select/SelectTrigger";
import { SelectValue } from "@module/design/components/select/SelectValue";
import { type ReactNode, useCallback, useMemo, useState } from "react";

export type TimePickerPropsType = {
  /** Initially selected time, formatted `HH:MM`. */
  value?: string;
  /** Earliest selectable time, formatted `HH:MM`. */
  minTime?: string;
  /** Heading shown above the time selectors. */
  title?: ReactNode;
  confirmLabel?: ReactNode;
};

const parseTime = (time: string): { hour: number; minute: number } | null => {
  const match = time.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const [, hourStr = "", minuteStr = ""] = match;
  return { hour: Number.parseInt(hourStr, 10), minute: Number.parseInt(minuteStr, 10) };
};

const getDefaultTime = (): { hour: string; minute: string } => {
  const now = new Date();
  return {
    hour: String(now.getHours()).padStart(2, "0"),
    minute: String(now.getMinutes()).padStart(2, "0"),
  };
};

const initialTime = (value?: string): { hour: string; minute: string } => {
  if (value && /^\d{1,2}:\d{2}$/.test(value)) {
    const [h = "", m = ""] = value.split(":");
    return { hour: h.padStart(2, "0"), minute: m };
  }
  return getDefaultTime();
};

/**
 * Imperative time picker dialog built on `react-call`.
 *
 * Mount the Root once near the top of your app:
 *
 * ```tsx
 * <TimePicker />
 * ```
 *
 * Then await a time from anywhere:
 *
 * ```tsx
 * const time = await pickTime({ value: current })
 * if (time) setReminder(time)
 * ```
 *
 * Resolves with the chosen `HH:MM` string, or `null` when the dialog is
 * dismissed (Escape / outside click).
 */
export const TimePicker = createDialog<TimePickerPropsType, string | null>(
  ({ call, value, minTime, title, confirmLabel = "Done" }) => {
    const initial = useMemo(() => initialTime(value), [value]);
    const [hour, setHour] = useState<string>(initial.hour);
    const [minute, setMinute] = useState<string>(initial.minute);

    const minTimeParsed = minTime ? parseTime(minTime) : null;

    const availableHours = useMemo(() => {
      const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
      if (!minTimeParsed) return hours;
      return hours.filter((h) => Number.parseInt(h, 10) >= minTimeParsed.hour);
    }, [minTimeParsed]);

    const availableMinutes = useMemo(() => {
      const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
      if (!minTimeParsed) return minutes;
      const currentHour = Number.parseInt(hour, 10);
      if (currentHour > minTimeParsed.hour) return minutes;
      if (currentHour === minTimeParsed.hour) {
        return minutes.filter((m) => Number.parseInt(m, 10) > minTimeParsed.minute);
      }
      return minutes;
    }, [minTimeParsed, hour]);

    const handleHourChange = useCallback((val: string | null) => {
      if (val) setHour(val);
    }, []);

    const handleMinuteChange = useCallback((val: string | null) => {
      if (val) setMinute(val);
    }, []);

    return (
      <>
        {title ? (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        ) : null}
        <div className="flex w-full items-center gap-2 justify-start">
          <div className="w-16">
            <Select onValueChange={handleHourChange} value={hour}>
              <SelectTrigger size="sm" className="w-full cursor-pointer">
                <SelectValue placeholder="HH" />
              </SelectTrigger>
              <SelectContent className="max-h-64" alignItemWithTrigger={false}>
                {availableHours.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <span className="px-1">:</span>
          <div className="w-16">
            <Select onValueChange={handleMinuteChange} value={minute}>
              <SelectTrigger size="sm" className="w-full cursor-pointer">
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent className="max-h-64" alignItemWithTrigger={false}>
                {availableMinutes.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={() => call.end(`${hour}:${minute}`)} className="w-full">
          {confirmLabel}
        </Button>
      </>
    );
  },
  { dismissValue: null, className: "max-w-xs" },
);
TimePicker.displayName = "TimePicker";

/** Await a time choice. Resolves the chosen `HH:MM` string, or `null` on dismiss. */
export const pickTime = (props: TimePickerPropsType = {}) => TimePicker.call(props);
