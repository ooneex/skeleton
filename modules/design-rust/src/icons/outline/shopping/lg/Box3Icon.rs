use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Box3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Box3Icon(props: Box3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.31104 9.41694L33.4999 21.5V30.5L39.4999 27L39.4999 18.5L15.311 6.41696",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M26 26V44.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M46 15V31.0436C46 32.8671 45.0073 34.546 43.4096 35.4247L26 45L4.76393 34.382C3.07001 33.535 2 31.8037 2 29.9098L2 13L22 3L46 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
            path {
                d: "M46 15L26 26L2 14",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
