use dioxus::prelude::*;

use super::dropdownMenuContext::DropdownMenuSubContext;
use crate::icons::outline::arrows::sm::ChevronRightIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuSubTriggerProps {
    #[props(default = false)]
    pub inset: bool,
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Trigger for a nested submenu (`role="menuitem"` + `aria-haspopup="menu"`).
///
/// Opening/closing is driven by pointer-enter/leave (with the 150 ms delay
/// managed by `DropdownMenuSub`) and by `ArrowRight` / click for keyboard users.
/// `ArrowRight` additionally focuses the first item of the sub-content after opening.
#[component]
pub fn DropdownMenuSubTrigger(props: DropdownMenuSubTriggerProps) -> Element {
    let sub = use_context::<DropdownMenuSubContext>();

    let open = *sub.open.read();
    let trigger_id = sub.trigger_id.read().clone();
    let popup_id = sub.popup_id.read().clone();
    let disabled = props.disabled;

    rsx! {
        div {
            id: trigger_id,
            role: "menuitem",
            aria_haspopup: "menu",
            aria_expanded: if open { "true" } else { "false" },
            tabindex: "-1",
            "data-slot": "dropdown-menu-sub-trigger",
            "data-inset": props.inset.then_some(""),
            "data-open": open.then_some(""),
            "data-popup-open": open.then_some(""),
            "data-disabled": disabled.then_some(""),
            "aria-disabled": disabled.then_some("true"),
            class: cn([
                "focus:bg-accent focus:text-accent-foreground data-[open]:bg-accent data-[open]:text-accent-foreground",
                "not-data-[variant=destructive]:focus:**:text-accent-foreground",
                "gap-2 rounded px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4",
                "data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground",
                "flex cursor-pointer items-center outline-hidden select-none",
                "data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                props.class.as_deref().unwrap_or_default(),
            ]),
            onpointerenter: move |_| {
                if !disabled {
                    sub.cancel_close.call(());
                    sub.set_open.call(true);
                }
            },
            onpointerleave: move |_| sub.schedule_close.call(()),
            onclick: move |_| {
                if !disabled {
                    sub.set_open.call(!*sub.open.peek());
                }
            },
            onkeydown: move |event| {
                if disabled || event.key() != Key::ArrowRight {
                    return;
                }
                event.prevent_default();
                sub.set_open.call(true);
                let pid = popup_id.clone();
                spawn(async move {
                    dioxus::document::eval(&format!(r#"
                        requestAnimationFrame(() => {{
                            const popup=document.getElementById("{pid}");
                            if(!popup)return;
                            const first=popup.querySelector('[role^="menuitem"]:not([data-disabled])');
                            (first??popup)?.focus();
                        }});
                    "#))
                    .await
                    .ok();
                });
            },
            ..props.attributes,
            {props.children}
            ChevronRightIcon { class: "size-3 ml-auto text-primary" }
        }
    }
}
