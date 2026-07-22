import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "../../utils/cn";

export const AccordionContent = ({ className, children, ...props }: AccordionPrimitive.Panel.Props) => {
  return (
    <AccordionPrimitive.Panel data-slot="accordion-content" className="overflow-hidden" {...props}>
      <div className={cn("flex flex-col gap-0.5 pt-0.5 pb-1", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
};
