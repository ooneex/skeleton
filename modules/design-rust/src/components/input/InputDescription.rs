use dioxus::prelude::*;

use crate::components::editor::Editor;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct InputDescriptionProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub content: Option<String>,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(default)]
    pub on_content_change: Option<EventHandler<String>>,
}

/// Rich-text description input. Wraps [`Editor`] with a minimal bordered
/// surface and no toolbar — intended for short formatted descriptions.
#[component]
pub fn InputDescription(props: InputDescriptionProps) -> Element {
    rsx! {
        Editor {
            content: props.content.clone(),
            placeholder: props.placeholder.clone(),
            on_content_change: props.on_content_change.clone(),
            class: cn([
                "min-h-20 rounded border border-border p-2 transition-[color,box-shadow] hover:border-ring-active focus-within:border-ring-active",
                props.class.as_deref().unwrap_or_default(),
            ]),
            show_slash_menu: false,
            show_headings: false,
            show_history: false,
            show_media: false,
            show_toolbar: false,
        }
    }
}
