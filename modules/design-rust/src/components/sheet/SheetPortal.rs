use dioxus::prelude::*;

/// No-op portal for sheets. Sheets use `position: fixed` to overlay the page.
#[derive(Props, Clone, PartialEq)]
pub struct SheetPortalProps {
    pub children: Element,
}

#[component]
pub fn SheetPortal(props: SheetPortalProps) -> Element {
    rsx! {
        {props.children}
    }
}
