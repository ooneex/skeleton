use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TreasureMap2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TreasureMap2Icon(props: TreasureMap2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 18.5V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V18.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 16.5V21L4.5 21C3.11929 21 2 19.8807 2 18.5V18.5C2 17.1193 3.11929 16 4.5 16H19.5C20.8807 16 22 17.1193 22 18.5V18.5C22 19.8807 20.8807 21 19.5 21L18 21L18 16.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.99 9.5H10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6.00001 9.5H6.01001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17.5 8L14.5 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.5 8L17.5 11",
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
