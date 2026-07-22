import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

export const tabsListVariants = cva(
  "relative rounded group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-transparent gap-0.5 ring ring-border",
        line: "gap-1 bg-transparent rounded-none",
      },
      size: {
        xs: "h-6 p-0.5",
        sm: "h-8 p-1",
        md: "h-9 p-1",
        lg: "h-10 p-1.5",
      },
    },
    defaultVariants: { variant: "default", size: "sm" },
  },
);

export const TabsList = ({
  className,
  variant = "default",
  size = "sm",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      data-size={size}
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    />
  );
};

TabsList.displayName = "Tabs.List";
