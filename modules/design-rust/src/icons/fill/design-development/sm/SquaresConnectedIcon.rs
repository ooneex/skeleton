use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquaresConnectedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquaresConnectedIcon(props: SquaresConnectedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,13h-2v-6c0-.551-.449-1-1-1h-6v-2h6c1.654,0,3,1.346,3,3v6Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m6,17v-6h-2v6c0,1.654,1.346,3,3,3h6v-2h-6c-.551,0-1-.449-1-1Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "7",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "15",
                y: "15",
                width: "7",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
