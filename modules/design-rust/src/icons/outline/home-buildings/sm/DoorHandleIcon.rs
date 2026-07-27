use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoorHandleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoorHandleIcon(props: DoorHandleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.5 15.5V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 7L14 5C14 3.89543 13.1046 3 12 3L7 3C5.89543 3 5 3.89543 5 5L5 19C5 20.1046 5.89543 21 7 21L12 21C13.1046 21 14 20.1046 14 19L14 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 11L20 11C21.1046 11 22 10.1046 22 9C22 7.89543 21.1046 7 20 7L11 7C9.89543 7 9 7.89543 9 9C9 10.1046 9.89543 11 11 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 15C8 14.1716 8.67157 13.5 9.5 13.5C10.3284 13.5 11 14.1716 11 15C11 15.8284 10.3284 16.5 9.5 16.5C8.67157 16.5 8 15.8284 8 15Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
