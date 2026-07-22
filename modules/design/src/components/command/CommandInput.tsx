import { InputGroup } from "@module/design/components/input/InputGroup";
import { MagnifierIcon } from "@module/design/icons/outline/filtering-sorting/sm/MagnifierIcon";
import { cn } from "@module/design/utils/cn";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

/** Search field for the command palette with an inline magnifier addon. */
export const CommandInput = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Input>) => {
  return (
    <div data-slot="command-input-wrapper" className="px-4 py-3.5">
      <InputGroup className="border-none">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            "p-0 w-full text-base outline-hidden disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground/60",
            className,
          )}
          {...props}
        />
        <InputGroup.Addon align="inline-start" className="p-0">
          <MagnifierIcon className="size-5 text-foreground/40" />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  );
};
CommandInput.displayName = "Command.Input";
