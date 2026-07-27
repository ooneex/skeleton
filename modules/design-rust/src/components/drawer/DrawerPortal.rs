use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DrawerPortalProps {
    pub children: Element,
}

/// No-op portal wrapper (Dioxus has no createPortal; fixed positioning handles visuals).
#[component]
pub fn DrawerPortal(props: DrawerPortalProps) -> Element {
    rsx! { {props.children} }
}
