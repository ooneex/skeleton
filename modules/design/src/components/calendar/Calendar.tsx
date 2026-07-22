import { Button, buttonVariants } from "@module/design/components/button/Button";
import { ChevronLeftIcon } from "@module/design/icons/outline/arrows/sm/ChevronLeftIcon";
import { ChevronRightIcon } from "@module/design/icons/outline/arrows/sm/ChevronRightIcon";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { DayPicker, useDayPicker } from "react-day-picker";

export type CalendarPropsType = React.ComponentProps<typeof DayPicker> & { fullWidth?: boolean };

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  components: userComponents,
  fullWidth = false,
  ...props
}: CalendarPropsType) => {
  const defaultClassNames = {
    months: "relative flex flex-col sm:flex-row gap-4",
    month: "w-full",
    month_caption: "relative mx-10 mb-1 flex h-9 items-center justify-center z-20",
    caption_label: "text-sm font-medium",
    nav: "absolute top-0 flex w-full justify-between z-10",
    button_previous: cn(buttonVariants({ variant: "ghost" }), "size-9 text-foreground p-0"),
    button_next: cn(buttonVariants({ variant: "ghost" }), "size-9 text-foreground p-0"),
    month_grid: fullWidth ? "w-full" : "",
    weekdays: fullWidth ? "flex w-full" : "",
    weekday: cn(
      "p-0 text-xs text-muted-foreground",
      fullWidth ? "flex-1 h-9 flex items-center justify-center" : "size-9",
    ),
    week: fullWidth ? "flex w-full" : "",
    day_button: cn(
      "relative flex items-center justify-center whitespace-nowrap rounded-full p-0 cursor-pointer text-foreground outline-offset-2 group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow] group-[[data-selected]:not(.range-middle)]:duration-150 focus:outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-accent group-data-[selected]:bg-primary group-data-[selected]:hover:bg-primary hover:text-foreground group-data-[selected]:text-primary-foreground group-data-[selected]:hover:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-data-[selected]:group-[.range-middle]:bg-accent group-data-[selected]:group-[.range-middle]:text-foreground text-xs",
      fullWidth ? "size-8" : "size-9",
    ),
    day: cn("group px-0 text-xs", fullWidth ? "flex-1 flex justify-center py-0.5" : "size-9"),
    range_start: "range-start",
    range_end: "range-end",
    range_middle: "range-middle",
    today:
      "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors",
    outside: "text-muted-foreground data-selected:bg-accent/50 data-selected:text-muted-foreground",
    hidden: "invisible",
    week_number: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
  };

  const mergedClassNames: typeof defaultClassNames = Object.keys(defaultClassNames).reduce(
    (acc, key) => {
      acc[key as keyof typeof defaultClassNames] = classNames?.[key as keyof typeof classNames]
        ? cn(defaultClassNames[key as keyof typeof defaultClassNames], classNames[key as keyof typeof classNames])
        : defaultClassNames[key as keyof typeof defaultClassNames];
      return acc;
    },
    {} as typeof defaultClassNames,
  );

  const defaultComponents = {
    // biome-ignore lint/suspicious/noExplicitAny: react-day-picker Chevron props
    Chevron: (props: any) => {
      if (props.orientation === "left") {
        return <ChevronLeftIcon className="size-4" {...props} aria-hidden="true" />;
      }
      return <ChevronRightIcon className="size-4" {...props} aria-hidden="true" />;
    },
    CaptionLabel: ({ children }: { children?: React.ReactNode }) => {
      const { goToMonth } = useDayPicker();
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            const today = new Date();
            goToMonth(today);
          }}
          className="font-bold"
        >
          {children}
        </Button>
      );
    },
  };

  const mergedComponents = { ...defaultComponents, ...userComponents };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      fixedWeeks
      weekStartsOn={1}
      formatters={{ formatWeekdayName: (date) => date.toLocaleDateString("en", { weekday: "short" }) }}
      className={cn(fullWidth ? "w-full" : "w-fit", className)}
      classNames={mergedClassNames}
      components={mergedComponents}
      {...props}
    />
  );
};

Calendar.displayName = "Calendar";
