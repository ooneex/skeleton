import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "@module/design/utils/cn";

export const TabsTrigger = ({ className, ...props }: TabsPrimitive.Tab.Props) => {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "not-data-active:cursor-pointer",
        "z-1 gap-1.5 rounded tracking-wide select-none outline-none shrink-0 [&_svg:not([class*='size-'])]:size-3 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-muted-foreground hover:text-foreground relative inline-flex flex-1 items-center justify-center whitespace-nowrap transition-colors group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "h-full",
        "group-data-[size=xs]/tabs-list:px-2 group-data-[size=xs]/tabs-list:text-xs group-data-[size=xs]/tabs-list:gap-1 group-data-[size=xs]/tabs-list:[&_svg:not([class*='size-'])]:size-3",
        "group-data-[size=sm]/tabs-list:px-2.5 group-data-[size=sm]/tabs-list:text-sm group-data-[size=sm]/tabs-list:gap-1",
        "group-data-[size=md]/tabs-list:px-2.5 group-data-[size=md]/tabs-list:text-sm group-data-[size=md]/tabs-list:gap-1.5",
        "group-data-[size=lg]/tabs-list:px-2.5 group-data-[size=lg]/tabs-list:text-sm group-data-[size=lg]/tabs-list:gap-1.5",
        "group-data-[variant=default]/tabs-list:data-active:text-tabs-accent-foreground group-data-[variant=line]/tabs-list:data-active:text-foreground",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        className,
      )}
      {...props}
    />
  );
};

TabsTrigger.displayName = "Tabs.Trigger";
