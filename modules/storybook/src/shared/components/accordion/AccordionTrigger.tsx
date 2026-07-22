import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import type { SVGProps } from "react";
import { cn } from "../../utils/cn";

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg height="16" width="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Chevron</title>
    <path
      d="M3 11L16 24L29 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
      fill="none"
    />
  </svg>
);

export const AccordionTrigger = ({ className, children, ...props }: AccordionPrimitive.Trigger.Props) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="pointer-events-none size-3 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};
