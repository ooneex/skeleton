use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct FieldLegendProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default = "legend".to_string())]
    pub variant: String,
    #[props(extends = legend, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn FieldLegend(props: FieldLegendProps) -> Element {
    rsx! {
        legend {
            "data-slot": "field-legend",
            "data-variant": props.variant.as_str(),
            class: cn([
                "mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
