use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoorOpen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoorOpen2Icon(props: DoorOpen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.29845 1H3V19.3421L15 23.9559V5.1607L4.29845 1ZM13 13H11V16H13V13Z",
                fill: "currentColor",
            }
            path {
                d: "M17 20H21V1H8.81763L17 3.79244V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
