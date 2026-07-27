use dioxus::prelude::*;

use super::RadioGroup::RadioGroupContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct RadioGroupItemProps {
    /// Value this item represents in the group.
    pub value: String,
    /// Disables only this item, independent of the group.
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// A single radio-button option inside a `RadioGroup`.
///
/// Renders the Base UI radio markup (root + indicator + fill dot) in plain Dioxus,
/// wiring `aria-checked`, keyboard selection (`Space`/`Enter`) and disabled state.
#[component]
pub fn RadioGroupItem(props: RadioGroupItemProps) -> Element {
    let ctx = use_context::<RadioGroupContext>();

    let value = props.value.clone();
    let value2 = value.clone(); // second clone for onkeydown closure
    let is_checked = ctx.is_selected(&value);
    let is_disabled = props.disabled || ctx.is_disabled();

    rsx! {
        button {
            r#type: "button",
            role: "radio",
            "data-slot": "radio-group-item",
            "aria-checked": if is_checked { "true" } else { "false" },
            "aria-disabled": is_disabled.then_some("true"),
            disabled: is_disabled,
            class: cn([
                "border-border text-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex size-4 rounded-full shadow-xs focus-visible:ring-[3px] aria-invalid:ring-[3px] group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
                props.class.as_deref().unwrap_or_default(),
            ]),
            onclick: move |_| {
                if !is_disabled {
                    ctx.select(value.clone());
                }
            },
            onkeydown: move |event| {
                let is_activate = event.key() == Key::Enter
                    || matches!(event.key(), Key::Character(ref s) if s == " ");
                if is_activate {
                    event.prevent_default();
                    if !is_disabled {
                        ctx.select(value2.clone());
                    }
                }
            },
            ..props.attributes,
            div {
                "data-slot": "radio-group-indicator",
                class: "group-aria-invalid/radio-group-item:text-destructive text-foreground flex size-4 items-center justify-center",
                if is_checked {
                    span {
                        class: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary",
                    }
                }
            }
        }
    }
}
