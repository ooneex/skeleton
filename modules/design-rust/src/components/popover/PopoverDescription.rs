use dioxus::prelude::*;

use super::popoverContext::PopoverContentContext;
use crate::hooks::use_id;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PopoverDescriptionProps {
    /// Override the auto-generated element id.
    #[props(default)]
    pub id: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = p, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Popover description paragraph. Registers its id with `PopoverContent` so
/// the popup can set `aria-describedby` automatically. Replaces
/// `useRegisterDialogDescription` from the TS port (internal to `dialog` here).
#[component]
pub fn PopoverDescription(props: PopoverDescriptionProps) -> Element {
    let mut ctx = use_context::<PopoverContentContext>();

    let auto_id = use_id("popover-description");
    let resolved_id = props.id.clone().unwrap_or_else(|| auto_id.clone());

    {
        let id = resolved_id.clone();
        use_effect(move || {
            ctx.description_id.set(Some(id.clone()));
        });
    }

    rsx! {
        p {
            id: resolved_id,
            "data-slot": "popover-description",
            class: cn([
                "text-muted-foreground",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
