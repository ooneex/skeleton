use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuGroupProps {
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Groups related menu items under a single `role="group"` container.
#[component]
pub fn DropdownMenuGroup(props: DropdownMenuGroupProps) -> Element {
    rsx! {
        div {
            role: "group",
            "data-slot": "dropdown-menu-group",
            ..props.attributes,
            {props.children}
        }
    }
}
