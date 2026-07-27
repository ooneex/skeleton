use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FilterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FilterIcon(props: FilterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 2H42V9.37303L29 24.373V38.5L19 46V24.373L6 9.37303V2Z",
                fill: "currentColor",
            }
        }
    }
}
