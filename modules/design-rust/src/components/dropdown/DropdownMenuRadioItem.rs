use dioxus::prelude::*;

use super::dropdownMenuContext::{DropdownMenuContext, DropdownMenuRadioGroupContext};
use crate::hooks::use_id;
use crate::icons::outline::ui_layout::sm::CheckIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuRadioItemProps {
    pub value: String,
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

/// A single radio option inside a `DropdownMenuRadioGroup` (`role="menuitemradio"`).
///
/// Shows a `CheckIcon` next to the selected item. Selecting this item calls
/// `onValueChange` on the parent `DropdownMenuRadioGroup`.
#[component]
pub fn DropdownMenuRadioItem(props: DropdownMenuRadioItemProps) -> Element {
    let ctx = use_context::<DropdownMenuContext>();
    let group = use_context::<DropdownMenuRadioGroupContext>();

    let item_id = use_id("dm-radio");
    let item_id_pe = item_id.clone();

    let value = props.value.clone();
    let value_click = value.clone();
    let is_checked = group.value.read().as_deref() == Some(value.as_str());
    let disabled = props.disabled;
    let close_on_click = props.close_on_click;

    rsx! {
        div {
            id: item_id,
            role: "menuitemradio",
            aria_checked: if is_checked { "true" } else { "false" },
            tabindex: "-1",
            "data-slot": "dropdown-menu-radio-item",
            "data-checked": is_checked.then_some(""),
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
                    group.set_value.call(value_click.clone());
                    if close_on_click {
                        ctx.close_all.call(());
                    }
                }
            },
            ..props.attributes,
            span {
                class: "pointer-events-none absolute right-2 flex items-center justify-center",
                "data-slot": "dropdown-menu-radio-item-indicator",
                if is_checked {
                    CheckIcon { class: "size-3 text-primary" }
                }
            }
            {props.children}
        }
    }
}
