use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuShortcutProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Keyboard shortcut hint displayed at the right edge of a menu item.
#[component]
pub fn DropdownMenuShortcut(props: DropdownMenuShortcutProps) -> Element {
    rsx! {
        span {
            "data-slot": "dropdown-menu-shortcut",
            class: cn([
                "text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
                "ml-auto text-xs tracking-widest",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
