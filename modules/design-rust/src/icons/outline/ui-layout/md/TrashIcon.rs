use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TrashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TrashIcon(props: TrashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "16",
                y1: "14",
                x2: "16",
                y2: "26",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "11",
                y1: "14",
                x2: "11.25",
                y2: "26",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "21",
                y1: "14",
                x2: "20.75",
                y2: "26",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m26,10l-.857,17.15c-.08,1.597-1.398,2.85-2.996,2.85h-12.293c-1.599,0-2.916-1.254-2.996-2.85l-.857-17.15",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "m11,5v-2.5c0-.828.672-1.5,1.5-1.5h7c.828,0,1.5.672,1.5,1.5v2.5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "m7,5h18c1.656,0,3,1.344,3,3v2H4v-2c0-1.656,1.344-3,3-3Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
