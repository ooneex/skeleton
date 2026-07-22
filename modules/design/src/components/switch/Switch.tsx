import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "data-checked:bg-primary data-unchecked:bg-border focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 shrink-0 rounded-full shadow-xs focus-visible:ring-[3px] aria-invalid:ring-[3px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 cursor-pointer pl-0.5 py-2",
  {
    variants: {
      size: {
        xs: "h-3 w-5",
        sm: "h-3.5 w-6",
        md: "h-[18.4px] w-8",
        lg: "h-5 w-9",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const switchThumbVariants = cva(
  "bg-background rounded-full pointer-events-none block ring-0 transition-transform data-unchecked:translate-x-0",
  {
    variants: {
      size: {
        xs: "size-2.5 data-checked:translate-x-[calc(100%-2px)]",
        sm: "size-3 data-checked:translate-x-[calc(100%-4px)]",
        md: "size-4 data-checked:translate-x-[calc(100%-4px)]",
        lg: "size-4.5 data-checked:translate-x-[calc(100%-4px)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type SwitchPropsType = SwitchPrimitive.Root.Props & VariantProps<typeof switchVariants>;

export const Switch = ({ className, size = "md", ...props }: SwitchPropsType) => {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(switchVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className={switchThumbVariants({ size })} />
    </SwitchPrimitive.Root>
  );
};

export { switchVariants };

Switch.displayName = "Switch";
