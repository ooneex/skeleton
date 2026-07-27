use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Trash3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Trash3Icon(props: Trash3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,11l-.85,16.158c-.084,1.593-1.4,2.842-2.996,2.842h-12.308c-1.596,0-2.912-1.249-2.996-2.842l-.85-16.158",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "29",
                y1: "7",
                x2: "3",
                y2: "7",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m12,7v-3.5c0-.828.672-1.5,1.5-1.5h5c.828,0,1.5.672,1.5,1.5v3.5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
