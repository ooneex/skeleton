import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "../../utils/cn";
import { AccordionContent } from "./AccordionContent";
import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";

const AccordionRoot = ({ className, ...props }: AccordionPrimitive.Root.Props) => {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn("flex w-full flex-col", className)} {...props} />;
};

/**
 * Compound component. Sub-components are attached as properties on `Accordion`,
 * so a single import exposes the whole API:
 *
 * ```tsx
 * <Accordion>
 *   <Accordion.Item value="a">
 *     <Accordion.Trigger>Title</Accordion.Trigger>
 *     <Accordion.Content>Body</Accordion.Content>
 *   </Accordion.Item>
 * </Accordion>
 * ```
 */
export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
