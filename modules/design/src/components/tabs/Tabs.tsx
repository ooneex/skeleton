import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "@module/design/utils/cn";
import { TabsContent } from "./TabsContent";
import { TabsIndicator } from "./TabsIndicator";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";

const TabsRoot = ({ className, orientation = "horizontal", ...props }: TabsPrimitive.Root.Props) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn("gap-2 group/tabs flex data-[orientation=horizontal]:flex-col", className)}
      {...props}
    />
  );
};

/**
 * Compound component. Sub-components are attached as properties on `Tabs`,
 * so a single import exposes the whole API:
 *
 * ```tsx
 * <Tabs defaultValue="a">
 *   <Tabs.List>
 *     <Tabs.Trigger value="a">A</Tabs.Trigger>
 *     <Tabs.Trigger value="b">B</Tabs.Trigger>
 *     <Tabs.Indicator />
 *   </Tabs.List>
 *   <Tabs.Content value="a">Panel A</Tabs.Content>
 *   <Tabs.Content value="b">Panel B</Tabs.Content>
 * </Tabs>
 * ```
 *
 * Shared state (active tab, orientation, focus) is managed internally by Base
 * UI's Tabs primitive, so consumers never wire it up themselves.
 */
export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Indicator: TabsIndicator,
  Content: TabsContent,
});

TabsRoot.displayName = "Tabs";
