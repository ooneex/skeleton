use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDoorOut2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDoorOut2Icon(props: ArrowDoorOut2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28 21L45 21H44.6136",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M36 12L45 21L36 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 5V35.1111L20 44V13.8889L5.05429 5.2398L5.17229 5.30809",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28 28V36H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 5L28 5L28 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14.5 27C14.7761 27 15 26.7761 15 26.5C15 26.2239 14.7761 26 14.5 26C14.2239 26 14 26.2239 14 26.5C14 26.7761 14.2239 27 14.5 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.5 28C15.3284 28 16 27.3284 16 26.5C16 25.6716 15.3284 25 14.5 25C13.6716 25 13 25.6716 13 26.5C13 27.3284 13.6716 28 14.5 28Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
