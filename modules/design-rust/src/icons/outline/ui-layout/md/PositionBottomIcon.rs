use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PositionBottomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PositionBottomIcon(props: PositionBottomIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 20L3 20L3 29L29 29L29 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            circle {
                cx: "3.5",
                cy: "3.5",
                r: "1.5",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "3.5",
                cy: "9.5",
                r: "1.5",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "28.5",
                cy: "9.5",
                r: "1.5",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "3.5",
                cy: "15.5",
                r: "1.5",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "28.5",
                cy: "15.5",
                r: "1.5",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "9.75",
                cy: "3.5",
                r: "1.5",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M17.5 3.5C17.5 4.32843 16.8284 5 16 5C15.1716 5 14.5 4.32843 14.5 3.5C14.5 2.67157 15.1716 2 16 2C16.8284 2 17.5 2.67157 17.5 3.5Z",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "22.25",
                cy: "3.5",
                r: "1.5",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "28.5",
                cy: "3.5",
                r: "1.5",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
