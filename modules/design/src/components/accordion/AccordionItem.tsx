import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "@module/design/utils/cn";

export const AccordionItem = ({ className, ...props }: AccordionPrimitive.Item.Props) => {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("bg-card text-card-foreground overflow-hidden rounded border border-border/60", className)}
      {...props}
    />
  );
};

AccordionItem.displayName = "Accordion.Item";
