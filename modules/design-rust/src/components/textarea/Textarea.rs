use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct TextareaProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = textarea, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Textarea(props: TextareaProps) -> Element {
    rsx! {
        textarea {
            "data-slot": "textarea",
            class: cn([
                "border-border aria-invalid:ring-destructive/20 aria-invalid:border-destructive rounded border bg-transparent px-2.5 py-2 text-base transition-[color,box-shadow] aria-invalid:ring-[3px] md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
        }
    }
}
