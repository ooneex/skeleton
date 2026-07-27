use dioxus::prelude::*;

use crate::components::separator::Separator;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct FieldSeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default)]
    pub children: Option<Element>,
}

#[component]
pub fn FieldSeparator(props: FieldSeparatorProps) -> Element {
    let has_content = props.children.is_some();

    rsx! {
        div {
            "data-slot": "field-separator",
            "data-content": if has_content { Some("true") } else { Some("false") },
            class: cn([
                "-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            Separator { class: "absolute inset-0 top-1/2" }
            if let Some(children) = props.children {
                span {
                    class: "text-muted-foreground px-2 bg-background relative mx-auto block w-fit",
                    "data-slot": "field-separator-content",
                    {children}
                }
            }
        }
    }
}
