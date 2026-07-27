use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Clone2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Clone2Icon(props: Clone2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 11.8261C8 9.713 9.713 8 11.8261 8H26.1739C28.287 8 30 9.713 30 11.8261V26.1739C30 28.287 28.287 30 26.1739 30H11.8261C9.713 30 8 28.287 8 26.1739V11.8261Z",
                fill: "currentColor",
            }
            path {
                d: "M5.82609 2C3.713 2 2 3.713 2 5.82609V20.1739C2 22.287 3.713 24 5.82609 24H6V11C6 8.23858 8.23858 6 11 6H24V5.82609C24 3.713 22.287 2 20.1739 2H5.82609Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
