use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarGroupLabelProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Label heading for a sidebar group; fades out when the sidebar collapses.
///
/// # Limitations
/// The TypeScript version's `render` prop, used to emit a heading element or a
/// custom component instead of the default wrapper, has no counterpart here.
/// Without a `cloneElement` in Dioxus the label's classes and `data-*`
/// attributes cannot be applied to a caller-built `Element`, so this always
/// renders a `<div>`.
#[component]
pub fn SidebarGroupLabel(props: SidebarGroupLabelProps) -> Element {
    rsx! {
        div {
            "data-slot": "sidebar-group-label",
            "data-sidebar": "group-label",
            class: cn([
                "text-primary/70 ring-ring h-8 rounded text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
