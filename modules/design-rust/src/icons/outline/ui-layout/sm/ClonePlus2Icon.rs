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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m7,17h-2.5c-.828,0-1.5-.672-1.5-1.5V4.5c0-.828.672-1.5,1.5-1.5h11c.828,0,1.5.672,1.5,1.5v2.5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            line {
                x1: "14",
                y1: "11",
                x2: "14",
                y2: "17",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "17",
                y1: "14",
                x2: "11",
                y2: "14",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "7",
                y: "7",
                width: "14",
                height: "14",
                rx: "1.5",
                ry: "1.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
