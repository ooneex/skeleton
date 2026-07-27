use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLayoutGrid3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLayoutGrid3Icon(props: RectLayoutGrid3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "3",
                y1: "9",
                x2: "21",
                y2: "9",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            line {
                x1: "9",
                y1: "9",
                x2: "9",
                y2: "21",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m19,21H5c-1.105,0-2-.895-2-2V5c0-1.105.895-2,2-2h14c1.105,0,2,.895,2,2v14c0,1.105-.895,2-2,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
