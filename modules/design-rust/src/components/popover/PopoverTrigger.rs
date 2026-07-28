use dioxus::prelude::*;

use super::popoverContext::PopoverContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PopoverTriggerProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Trigger button for the popover. Toggles open state on click and sets
/// appropriate ARIA attributes (`aria-haspopup="dialog"`, `aria-expanded`).
///
/// # Limitations
/// The `render` prop of the TypeScript version, which swaps the rendered
/// element for a caller-supplied one, is not ported: Dioxus has no
/// `cloneElement`, so the trigger's `data-slot`, ARIA state and click handler
/// cannot be injected into an `Element` the caller built. The trigger is always
/// a `<button>`.
#[component]
pub fn PopoverTrigger(props: PopoverTriggerProps) -> Element {
    let ctx = use_context::<PopoverContext>();

    let open = *ctx.open.read();
    let trigger_id = ctx.trigger_id.read().clone();

    rsx! {
        button {
            r#type: "button",
            id: trigger_id,
            "data-slot": "popover-trigger",
            "aria-haspopup": "dialog",
            "aria-expanded": if open { "true" } else { "false" },
            "data-popup-open": open.then_some(""),
            class: cn([props.class.as_deref().unwrap_or_default()]),
            onclick: move |_| ctx.set_open.call(!*ctx.open.peek()),
            ..props.attributes,
            {props.children}
        }
    }
}
