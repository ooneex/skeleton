use dioxus::document::eval;
use dioxus::prelude::*;

use super::Select::SelectContext;
use crate::icons::outline::arrows::sm::ChevronUpIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SelectScrollUpButtonProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Sticky button at the top of the popup that scrolls the item list upward
/// when hovered.
#[component]
pub fn SelectScrollUpButton(props: SelectScrollUpButtonProps) -> Element {
    let ctx = use_context::<SelectContext>();
    let viewport_id = ctx.viewport_id.clone();

    rsx! {
        div {
            "data-slot": "select-scroll-up-button",
            class: cn([
                "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 top-0 w-full",
                props.class.as_deref().unwrap_or_default(),
            ]),
            onmouseenter: move |_| {
                let id = viewport_id.clone();
                let script = format!(
                    r#"const el = document.getElementById("{id}");
                    if (el) el.scrollBy({{ top: -40, behavior: "smooth" }});"#
                );
                eval(&script);
            },
            ..props.attributes,
            ChevronUpIcon { class: "size-4 text-foreground" }
        }
    }
}
