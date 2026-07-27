use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopCodeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopCodeIcon(props: LaptopCodeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 19V7C4 5.34315 5.34315 4 7 4H25C26.6569 4 28 5.34315 28 7V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 23V25C2 26.6569 3.34315 28 5 28H27C28.6569 28 30 26.6569 30 25V23H21C21 23.5523 20.5523 24 20 24H12C11.4477 24 11 23.5523 11 23H2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 18H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 17.5L12 14.5L9 11.5",
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
