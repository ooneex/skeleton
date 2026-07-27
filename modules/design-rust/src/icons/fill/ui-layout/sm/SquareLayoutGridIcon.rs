use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareLayoutGridIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareLayoutGridIcon(props: SquareLayoutGridIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m11,11V2h-6c-1.654,0-3,1.346-3,3v6h9Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m13,11h9v-6c0-1.654-1.346-3-3-3h-6v9Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m11,13H2v6c0,1.654,1.346,3,3,3h6v-9Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m13,13v9h6c1.654,0,3-1.346,3-3v-6h-9Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
