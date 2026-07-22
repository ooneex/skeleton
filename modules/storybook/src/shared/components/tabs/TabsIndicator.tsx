import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "../../utils/cn";

export const TabsIndicator = ({ className, ...props }: TabsPrimitive.Indicator.Props) => {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(
        "absolute transition-all duration-200 ease-out",
        "data-[activation-direction=left]:duration-200 data-[activation-direction=right]:duration-200",
        "data-[activation-direction=up]:duration-200 data-[activation-direction=down]:duration-200",
        "group-data-[variant=default]/tabs-list:rounded group-data-[variant=default]/tabs-list:bg-tabs-accent",
        "group-data-[variant=line]/tabs-list:bg-foreground",
        "group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:bottom-0 group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:h-0.5",
        "group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:right-0 group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:w-0.5",
        className,
      )}
      style={{
        top: "var(--active-tab-top)",
        left: "var(--active-tab-left)",
        width: "var(--active-tab-width)",
        height: "var(--active-tab-height)",
      }}
      {...props}
    />
  );
};
