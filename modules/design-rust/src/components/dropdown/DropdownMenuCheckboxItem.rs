use dioxus::prelude::*;

use super::dropdownMenuContext::DropdownMenuContext;
use crate::hooks::{use_controlled_state, use_id};
use crate::icons::outline::ui_layout::sm::CheckIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuCheckboxItemProps {
    #[props(default)]
    pub checked: Option<bool>,
    #[props(default = false)]
    pub default_checked: bool,
    pub on_checked_change: Option<EventHandler<bool>>,
    #[props(default = false)]
    pub disabled: bool,
    /// Close the whole menu tree when clicked. Defaults to `false`.
    #[props(default = false)]
    pub close_on_click: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// A menu item that toggles a checkbox (`role="menuitemcheckbox"`).
///
/// Supports controlled and uncontrolled checked state. Shows a `CheckIcon` when
/// checked. Closes the menu on click only when `close_on_click = true`.
#[component]
pub fn DropdownMenuCheckboxItem(props: DropdownMenuCheckboxItemProps) -> Element {
    let ctx = use_context::<DropdownMenuContext>();

    let (is_checked, set_checked) = use_controlled_state(
        props.checked,
        props.default_checked,
        props.on_checked_change,
    );

    let item_id = use_id("dm-checkbox");
    let item_id_pe = item_id.clone();

    let disabled = props.disabled;
    let close_on_click = props.close_on_click;
    let checked_val = *is_checked.read();

    rsx! {
        div {
            id: item_id,
            role: "menuitemcheckbox",
            aria_checked: if checked_val { "true" } else { "false" },
            tabindex: "-1",
            "data-slot": "dropdown-menu-checkbox-item",
            "data-checked": checked_val.then_some(""),
            "data-disabled": disabled.then_some(""),
            "aria-disabled": disabled.then_some("true"),
            class: cn([
                "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground",
                "gap-2 rounded py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4",
                "relative flex cursor-pointer items-center outline-hidden select-none",
                "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0",
                props.class.as_deref().unwrap_or_default(),
            ]),
            onpointerenter: move |_| {
                if !disabled {
                    let id = item_id_pe.clone();
                    spawn(async move {
                        dioxus::document::eval(&format!(
                            r#"document.getElementById("{id}")?.focus();"#
                        ))
                        .await
                        .ok();
                    });
                }
            },
            onclick: move |_| {
                if !disabled {
                    let next = !*is_checked.peek();
                    set_checked.call(next);
                    if close_on_click {
                        ctx.close_all.call(());
                    }
                }
            },
            ..props.attributes,
            span {
                class: "pointer-events-none absolute right-2 flex items-center justify-center",
                "data-slot": "dropdown-menu-checkbox-item-indicator",
                if checked_val {
                    CheckIcon { class: "size-3 text-primary" }
                }
            }
            {props.children}
        }
    }
}
