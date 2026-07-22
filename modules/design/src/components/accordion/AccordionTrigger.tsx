import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "@module/design/icons/outline/arrows/sm/ChevronDownIcon";
import { cn } from "@module/design/utils/cn";

export const AccordionTrigger = ({ className, children, ...props }: AccordionPrimitive.Trigger.Props) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between gap-4 rounded px-6 py-5",
          "text-foreground text-left text-base font-semibold",
          "cursor-pointer outline-none transition-colors hover:bg-muted/50",
          "focus-visible:ring-ring/50 focus-visible:ring-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "**:data-[slot=accordion-trigger-icon]:text-primary",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none size-3.5 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

AccordionTrigger.displayName = "Accordion.Trigger";
