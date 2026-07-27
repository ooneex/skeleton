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
                d: "M19 14L19 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 19L14 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 9L23 6C23 4.34315 21.6569 3 20 3L6 3C4.34315 3 3 4.34315 3 6L3 20C3 21.6569 4.34314 23 6 23L9 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26 9L12 9C10.3431 9 9 10.3431 9 12L9 26C9 27.6569 10.3431 29 12 29L26 29C27.6569 29 29 27.6569 29 26L29 12C29 10.3431 27.6569 9 26 9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
