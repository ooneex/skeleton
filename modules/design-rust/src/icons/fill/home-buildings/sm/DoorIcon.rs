use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoorIcon(props: DoorIconProps) -> Element {
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
                d: "M4 23V1L20 1L20 23H4ZM17 4V11H13V4L17 4ZM11 11L11 4L7 4L7 11H11ZM10 14V16H7V14H10Z",
                fill: "currentColor",
            }
        }
    }
}
