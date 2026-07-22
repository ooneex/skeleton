import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

export const AccordionItem = ({ className, ...props }: AccordionPrimitive.Item.Props) => {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={className} {...props} />;
};
