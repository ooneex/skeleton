use dioxus::prelude::*;

use super::dropdownMenuContext::DropdownMenuContext;
use crate::hooks::use_id;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuItemProps {
    #[props(default = false)]
    pub inset: bool,
    #[props(default = "default".to_string())]
    pub variant: String,
    #[props(default = false)]
    pub disabled: bool,
    /// Close the whole menu tree when this item is clicked. Defaults to `true`.
    #[props(default = true)]
    pub close_on_click: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// A single actionable menu item (`role="menuitem"`).
///
/// Focuses itself on pointer-enter for keyboard-accessible hover highlighting,
/// and closes the whole menu tree on click (unless `close_on_click = false`).
#[component]
pub fn DropdownMenuItem(props: DropdownMenuItemProps) -> Element {
    let ctx = use_context::<DropdownMenuContext>();

    let item_id = use_id("dm-item");
    let item_id_pe = item_id.clone();

    let disabled = props.disabled;
    let close_on_click = props.close_on_click;
    let variant = props.variant.clone();

    rsx! {
        div {
            id: item_id,
            role: "menuitem",
            tabindex: "-1",
            "data-slot": "dropdown-menu-item",
            "data-inset": props.inset.then_some(""),
            "data-variant": variant,
            "data-disabled": disabled.then_some(""),
            "aria-disabled": disabled.then_some("true"),
            class: cn([
                "focus:bg-accent focus:text-accent-foreground",
                "data-[variant=destructive]:text-destructive",
                "data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive",
                "not-data-[variant=destructive]:focus:**:text-accent-foreground",
                "gap-2 rounded px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4",
                "group/dropdown-menu-item relative flex cursor-pointer items-center outline-hidden select-none",
                "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                "data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
                if !disabled && close_on_click {
                    ctx.close_all.call(());
                }
            },
            ..props.attributes,
            {props.children}
        }
    }
}
