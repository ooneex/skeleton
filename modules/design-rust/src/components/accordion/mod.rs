// File names mirror the TypeScript design module, where each component lives in
// a PascalCase file inside its component folder.
#![allow(non_snake_case)]

mod Accordion;
mod AccordionContent;
mod AccordionItem;
mod AccordionTrigger;

pub use Accordion::{Accordion, AccordionProps};
pub use AccordionContent::{AccordionContent, AccordionContentProps};
pub use AccordionItem::{AccordionItem, AccordionItemProps};
pub use AccordionTrigger::{AccordionTrigger, AccordionTriggerProps};
