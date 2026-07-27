use dioxus::prelude::*;

use super::popoverContext::PopoverContentContext;
use crate::hooks::use_id;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PopoverTitleProps {
    /// Override the auto-generated element id.
    #[props(default)]
    pub id: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = h2, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Popover title. Registers its id with `PopoverContent` so the popup can set
/// `aria-labelledby` automatically. Replaces `useRegisterDialogTitle` from the
/// TS port (which is internal to the `dialog` module here).
#[component]
pub fn PopoverTitle(props: PopoverTitleProps) -> Element {
    let mut ctx = use_context::<PopoverContentContext>();

    let auto_id = use_id("popover-title");
    let resolved_id = props.id.clone().unwrap_or_else(|| auto_id.clone());

    {
        let id = resolved_id.clone();
        use_effect(move || {
            ctx.title_id.set(Some(id.clone()));
        });
    }

    rsx! {
        h2 {
            id: resolved_id,
            "data-slot": "popover-title",
            class: cn(["font-medium", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
