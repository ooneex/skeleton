import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cn } from "@module/design/utils/cn";

type SeparatorPropsType = SeparatorPrimitive.Props;

export const Separator = ({ className, orientation = "horizontal", ...props }: SeparatorPropsType) => {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className,
      )}
      {...props}
    />
  );
};

Separator.displayName = "Separator";
