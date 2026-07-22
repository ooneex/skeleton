import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "@module/design/utils/cn";

export const AccordionContent = ({ className, children, ...props }: AccordionPrimitive.Panel.Props) => {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-base"
      {...props}
    >
      <div
        className={cn(
          "text-muted-foreground px-6 pt-0 pb-5 leading-relaxed h-(--accordion-panel-height) [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
};

AccordionContent.displayName = "Accordion.Content";
