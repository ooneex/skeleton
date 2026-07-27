use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClonePlus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClonePlus2Icon(props: ClonePlus2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.82609 2C3.713 2 2 3.713 2 5.82609L2 20.1739C2 22.287 3.713 24 5.82609 24H6L6 11C6 8.23858 8.23858 6 11 6L24 6V5.82609C24 3.713 22.287 2 20.1739 2L5.82609 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.1739 30C28.287 30 30 28.287 30 26.1739L30 11.8261C30 9.713 28.287 8 26.1739 8H11.8261C9.713 8 8 9.713 8 11.8261V26.1739C8 28.287 9.713 30 11.8261 30L26.1739 30ZM20 13V18H25V20H20V25H18V20H13V18H18V13H20Z",
                fill: "currentColor",
            }
        }
    }
}
