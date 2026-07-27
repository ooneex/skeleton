use dioxus::prelude::*;

use super::Accordion::AccordionContext;
use crate::hooks::use_id;
use crate::utils::cn;

/// Per-item state shared with its trigger and panel.
#[derive(Clone)]
pub(crate) struct AccordionItemContext {
    pub(crate) id: String,
    pub(crate) value: Signal<String>,
    pub(crate) disabled: Signal<bool>,
}

impl AccordionItemContext {
    pub(crate) fn value(&self) -> String {
        self.value.read().clone()
    }

    pub(crate) fn trigger_id(&self) -> String {
        format!("{}-trigger", self.id)
    }

    pub(crate) fn panel_id(&self) -> String {
        format!("{}-panel", self.id)
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct AccordionItemProps {
    /// Unique key identifying the item inside its accordion.
    pub value: String,
    /// Freezes this item only, whatever the group state is.
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AccordionItem(props: AccordionItemProps) -> Element {
    let accordion = use_context::<AccordionContext>();

    let mut value = use_signal(|| props.value.clone());
    let mut disabled = use_signal(|| props.disabled);

    let (item_value, item_disabled) = (props.value.clone(), props.disabled);
    use_effect(use_reactive!(|(item_value, item_disabled)| {
        value.set(item_value);
        disabled.set(item_disabled);
    }));

    let id = use_id("accordion-item");

    use_context_provider(|| AccordionItemContext {
        id,
        value,
        disabled,
    });

    let is_open = accordion.is_open(&props.value);
    let is_disabled = props.disabled || accordion.is_disabled();

    rsx! {
        div {
            "data-slot": "accordion-item",
            "data-open": is_open.then_some("true"),
            "data-closed": (!is_open).then_some("true"),
            "data-disabled": is_disabled.then_some("true"),
            class: cn([
                "bg-card text-card-foreground overflow-hidden rounded border border-border/60",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
