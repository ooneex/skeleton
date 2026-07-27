use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct BlockquoteProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Blockquote(props: BlockquoteProps) -> Element {
    rsx! {
        blockquote {
            class: cn(["mt-6 rounded bg-muted/60 px-4 py-3 italic", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
