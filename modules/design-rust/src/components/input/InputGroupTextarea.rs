use dioxus::prelude::*;

use crate::components::textarea::Textarea;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct InputGroupTextareaProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = textarea, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputGroupTextarea(props: InputGroupTextareaProps) -> Element {
    rsx! {
        Textarea {
            "data-slot": "input-group-textarea",
            class: cn([
                "border-none bg-transparent outline-none focus:outline-none ring-0 hover:ring-0 focus-visible:ring-0 resize-none w-full",
                props.class.as_deref().unwrap_or_default(),
            ]),
            attributes: props.attributes,
        }
    }
}
