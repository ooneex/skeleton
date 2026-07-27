use dioxus::prelude::*;

use crate::components::label::Label;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct FormRowProps {
    /// Pre-rendered icon element shown in a square badge to the left.
    #[props(default)]
    pub icon: Option<Element>,
    /// Optional label rendered above the content.
    #[props(default)]
    pub label: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// A labelled form field row: icon badge + label + content, stacked vertically
/// inside a horizontal flex container.
#[component]
pub fn FormRow(props: FormRowProps) -> Element {
    rsx! {
        div {
            "data-slot": "form-row",
            class: cn(["flex items-start gap-3", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            if let Some(icon) = props.icon {
                div {
                    class: "flex items-center justify-center size-8 rounded bg-muted shrink-0 mt-1",
                    {icon}
                }
            }
            div { class: "flex flex-col gap-1.5 min-w-0 flex-1",
                if let Some(label) = props.label {
                    Label { class: "text-muted-foreground", {label} }
                }
                div { class: "text-sm", {props.children} }
            }
        }
    }
}
