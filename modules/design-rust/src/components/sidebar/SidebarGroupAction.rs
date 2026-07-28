use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarGroupActionProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Action button pinned to the top-right corner of a sidebar group.
///
/// # Limitations
/// The TypeScript version accepts a `render` element and clones the group-action
/// props onto it. Dioxus has no `cloneElement`, so props cannot be injected into
/// a caller-supplied `Element`; this port always renders a `<button>`.
#[component]
pub fn SidebarGroupAction(props: SidebarGroupActionProps) -> Element {
    rsx! {
        button {
            r#type: "button",
            "data-slot": "sidebar-group-action",
            "data-sidebar": "group-action",
            class: cn([
                "text-primary ring-ring hover:bg-muted hover:text-primary absolute top-3.5 right-3 w-5 rounded p-0 focus-visible:ring-2 [&>svg]:size-4 flex aspect-square items-center justify-center outline-hidden transition-transform [&>svg]:shrink-0 after:absolute after:-inset-2 md:after:hidden group-data-[collapsible=icon]:hidden",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
