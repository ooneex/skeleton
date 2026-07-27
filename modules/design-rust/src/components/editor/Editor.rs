use dioxus::prelude::*;

use super::EditorContent::EditorContent;
use super::EditorContext::EditorProvider;
use super::FloatingToolbar::FloatingToolbar;
use super::SlashMenu::SlashMenu;
use super::Toolbar::EditorToolbar;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct EditorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub content: Option<String>,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(default = true)]
    pub editable: bool,
    #[props(default)]
    pub plain_text: bool,
    #[props(default = true)]
    pub show_headings: bool,
    #[props(default = true)]
    pub show_history: bool,
    #[props(default = true)]
    pub show_media: bool,
    #[props(default = true)]
    pub show_slash_menu: bool,
    #[props(default = true)]
    pub show_toolbar: bool,
    #[props(default)]
    pub on_content_change: Option<EventHandler<String>>,
    #[props(default)]
    pub on_submit: Option<EventHandler<()>>,
}

/// Convenience wrapper that composes provider + toolbar + content + slash menu.
///
/// For custom layouts use `EditorProvider` + `EditorToolbar` + `EditorContent`
/// + `SlashMenu` directly.
#[component]
pub fn Editor(props: EditorProps) -> Element {
    let show_floating = props.editable && props.show_toolbar && !props.plain_text;
    let show_slash = props.show_slash_menu && !props.plain_text;

    rsx! {
        EditorProvider {
            content: props.content.clone(),
            editable: props.editable,
            plain_text: props.plain_text,
            placeholder: props.placeholder.clone(),
            show_headings: props.show_headings,
            show_history: props.show_history,
            show_media: props.show_media,
            show_slash_menu: show_slash,
            on_content_change: props.on_content_change.clone(),
            on_submit: props.on_submit.clone(),

            if show_floating { FloatingToolbar {} }
            if props.show_toolbar && !props.plain_text { EditorToolbar {} }

            EditorContent {
                class: cn(["h-full w-full", props.class.as_deref().unwrap_or_default()]),
            }
            if show_slash { SlashMenu {} }
        }
    }
}
