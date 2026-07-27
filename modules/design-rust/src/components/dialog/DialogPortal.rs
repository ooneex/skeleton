use dioxus::prelude::*;

/// A no-op portal wrapper. React portals render children outside the normal
/// DOM tree (typically at `document.body`). Dioxus has no direct equivalent
/// with the feature set used here; dialogs and overlays use `position: fixed`
/// with high `z-index` to achieve the same visual effect regardless of their
/// DOM position.
#[derive(Props, Clone, PartialEq)]
pub struct DialogPortalProps {
    pub children: Element,
}

#[component]
pub fn DialogPortal(props: DialogPortalProps) -> Element {
    rsx! {
        {props.children}
    }
}
