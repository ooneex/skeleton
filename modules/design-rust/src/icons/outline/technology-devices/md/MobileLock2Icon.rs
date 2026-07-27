use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobileLock2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobileLock2Icon(props: MobileLock2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 25L5 25C3.34315 25 2 23.6569 2 22L2 10C2 8.34315 3.34315 7 5 7L27 7C28.6569 7 30 8.34315 30 10L30 15.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.5 14.25L6.5 17.75C6.5 17.8881 6.38807 18 6.25 18C6.11193 18 6 17.8881 6 17.75L6 14.25C6 14.1119 6.11193 14 6.25 14C6.38807 14 6.5 14.1119 6.5 14.25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28.5 22H19.5C18.6716 22 18 22.6716 18 23.5V27.5C18 28.3284 18.6716 29 19.5 29H28.5C29.3284 29 30 28.3284 30 27.5V23.5C30 22.6716 29.3284 22 28.5 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 22V19C21 17.3431 22.3431 16 24 16V16C25.6569 16 27 17.3431 27 19V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
