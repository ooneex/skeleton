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
