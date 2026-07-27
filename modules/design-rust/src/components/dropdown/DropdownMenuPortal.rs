use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuPortalProps {
    pub children: Element,
}

/// Passthrough wrapper; included for API parity with the React version which
/// uses `createPortal`. In Dioxus, `position: fixed` popups achieve the same
/// visual effect without a DOM portal, so this component simply renders its
/// children inline.
#[component]
pub fn DropdownMenuPortal(props: DropdownMenuPortalProps) -> Element {
    rsx! { {props.children} }
}
