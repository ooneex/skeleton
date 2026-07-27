use dioxus::prelude::*;

use crate::components::label::{LabelSizeType, label_variants};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct FieldLabelProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default = false)]
    pub required: bool,
    #[props(extends = label, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn FieldLabel(props: FieldLabelProps) -> Element {
    let base = label_variants(LabelSizeType::Xs, None);

    rsx! {
        label {
            "data-slot": "field-label",
            class: cn([
                base.as_str(),
                "has-data-checked:bg-primary/5 has-data-checked:border-primary gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded has-[>[data-slot=field]]:border *:data-[slot=field]:p-3 group/field-label peer/field-label flex w-fit leading-snug",
                "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            span { class: "inline-flex items-baseline",
                {props.children}
                if props.required {
                    span { class: "text-destructive", "*" }
                }
            }
        }
    }
}
