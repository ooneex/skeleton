use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MokaPotIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MokaPotIcon(props: MokaPotIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 17H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linejoin: "round",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 5H29L29 9C29 11.2091 27.2092 13 25 13H22.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 1H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 17L25 27V30H8V27L11 17L9 9L6 6V5H25L22 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 22H14.0133",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
