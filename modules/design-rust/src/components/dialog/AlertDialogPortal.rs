use dioxus::prelude::*;

/// A no-op portal wrapper. Alert dialogs use `position: fixed` with high
/// `z-index` to overlay the page without needing a DOM-level portal.
#[derive(Props, Clone, PartialEq)]
pub struct AlertDialogPortalProps {
    pub children: Element,
}

#[component]
pub fn AlertDialogPortal(props: AlertDialogPortalProps) -> Element {
    rsx! {
        {props.children}
    }
}
