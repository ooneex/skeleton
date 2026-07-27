use dioxus::prelude::*;

use super::Accordion::{AccordionContext, FocusTarget};
use super::AccordionItem::AccordionItemContext;
use crate::icons::outline::arrows::sm::ChevronDownIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct AccordionTriggerProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AccordionTrigger(props: AccordionTriggerProps) -> Element {
    let mut accordion = use_context::<AccordionContext>();
    let item = use_context::<AccordionItemContext>();

    let id = item.id;
    use_drop(move || {
        accordion.unregister_trigger(id);
    });

    let is_open = accordion.is_open(&item.value());
    let is_disabled = *item.disabled.read() || accordion.is_disabled();

    rsx! {
        h3 { class: "flex",
            button {
                r#type: "button",
                id: item.trigger_id(),
                "data-slot": "accordion-trigger",
                "aria-expanded": if is_open { "true" } else { "false" },
                "aria-controls": item.panel_id(),
                "aria-disabled": is_disabled.then_some("true"),
                disabled: is_disabled,
                "data-open": is_open.then_some("true"),
                "data-closed": (!is_open).then_some("true"),
                class: cn([
                    "group/accordion-trigger relative flex flex-1 items-center justify-between gap-4 rounded px-6 py-5",
                    "text-foreground text-left text-base font-semibold",
                    "cursor-pointer outline-none transition-colors hover:bg-muted/50",
                    "focus-visible:ring-ring/50 focus-visible:ring-2",
                    "disabled:pointer-events-none disabled:opacity-50",
                    "**:data-[slot=accordion-trigger-icon]:text-primary",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                onmounted: move |event| accordion.register_trigger(id, event.data()),
                onclick: move |_| {
                    if !is_disabled {
                        accordion.toggle(item.value());
                    }
                },
                onkeydown: move |event| {
                    let target = match event.key() {
                        Key::ArrowDown => FocusTarget::Next,
                        Key::ArrowUp => FocusTarget::Previous,
                        Key::Home => FocusTarget::First,
                        Key::End => FocusTarget::Last,
                        _ => return,
                    };
                    event.prevent_default();
                    accordion.move_focus(id, target);
                },
                ..props.attributes,
                {props.children}
                ChevronDownIcon {
                    "data-slot": "accordion-trigger-icon",
                    class: "pointer-events-none size-3.5 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180",
                }
            }
        }
    }
}
