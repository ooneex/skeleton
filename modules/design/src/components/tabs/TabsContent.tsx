import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "@module/design/utils/cn";

export const TabsContent = ({ className, ...props }: TabsPrimitive.Panel.Props) => {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("text-sm flex-1 outline-none animate-in fade-in-0 slide-in-from-bottom-2 duration-200", className)}
      {...props}
    />
  );
};

TabsContent.displayName = "Tabs.Content";
