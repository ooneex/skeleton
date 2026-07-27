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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 4H22L22 7C22 8.65686 20.6569 10 19 10H17.3285",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M11 1H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 13H17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linejoin: "round",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17 13L19 21.5V22H6V21.5L8 13L7 7.78947L5 4.5V4H18L17 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 17H11.01",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
