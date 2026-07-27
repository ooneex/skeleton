use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CupcakeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CupcakeIcon(props: CupcakeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 15L5.83333 22H18.1667L19 15",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17 9C18.6569 9 20 7 20 5C20 3 18 1 18 1H17.5C17 2.5 15.5 3 13 3H7C5.34315 3 4 4.34315 4 6C4 7.65685 5.34315 9 7 9H9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 9L19 9C20.6569 9 22 10.3431 22 12C22 13.6569 20.6569 15 19 15L5 15C3.34315 15 2 13.6569 2 12C2 10.3431 3.34315 9 5 9L9 9",
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
