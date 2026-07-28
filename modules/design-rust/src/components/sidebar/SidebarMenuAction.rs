use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuActionProps {
    #[props(default = false)]
    pub show_on_hover: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Secondary action rendered alongside a sidebar menu button, optionally only
/// revealed on hover.
///
/// # Limitations
/// The `render` prop of the TypeScript component is not ported. Dioxus has no
/// `cloneElement`, so the action's classes and `data-*` attributes cannot be
/// injected into a caller-supplied `Element`; the action is always a
/// `<button>`.
#[component]
pub fn SidebarMenuAction(props: SidebarMenuActionProps) -> Element {
    rsx! {
        button {
            r#type: "button",
            "data-slot": "sidebar-menu-action",
            "data-sidebar": "menu-action",
            class: cn([
                "text-primary ring-ring hover:bg-muted hover:text-primary peer-hover/menu-button:text-primary absolute top-1.5 right-1 aspect-square w-5 rounded p-0 peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 focus-visible:ring-2 [&>svg]:size-4 flex items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0",
                if props.show_on_hover {
                    "peer-data-active/menu-button:text-primary group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-open:opacity-100 md:opacity-0"
                } else {
                    ""
                },
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
