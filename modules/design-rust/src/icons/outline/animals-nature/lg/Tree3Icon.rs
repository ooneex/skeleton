use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Tree3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Tree3Icon(props: Tree3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 31L24 45.0001M24 31L20 27M24 31L28 27M24 31V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 39C30.6274 39 36 33.6274 36 27C36 14.3726 24 3 24 3C24 3 12 14.3726 12 27C12 33.6274 17.3726 39 24 39Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
