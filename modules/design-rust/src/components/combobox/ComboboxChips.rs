use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxChipsProps {
    #[props(default)]
    pub class: Option<String>,
    pub children: Element,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxChips(props: ComboboxChipsProps) -> Element {
    rsx! {
        div {
            "data-slot": "combobox-chips",
            class: cn([
                "ring-ring hover:ring-ring-active focus-within:ring-ring-active has-aria-invalid:ring-destructive/20 flex min-h-9 flex-wrap items-center gap-1.5 rounded ring bg-transparent bg-clip-padding px-2.5 py-1.5 text-sm transition-[color,box-shadow] has-data-[slot=combobox-chip]:px-1.5",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
