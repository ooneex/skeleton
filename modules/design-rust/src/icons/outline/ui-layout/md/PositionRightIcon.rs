use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PositionRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PositionRightIcon(props: PositionRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 3L20 29L29 29L29 3L20 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            circle {
                cx: "3.5",
                cy: "28.5",
                r: "1.5",
                transform: "rotate(-90 3.5 28.5)",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "9.5",
                cy: "28.5",
                r: "1.5",
                transform: "rotate(-90 9.5 28.5)",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "9.5",
                cy: "3.5",
                r: "1.5",
                transform: "rotate(-90 9.5 3.5)",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "15.5",
                cy: "28.5",
                r: "1.5",
                transform: "rotate(-90 15.5 28.5)",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "15.5",
                cy: "3.5",
                r: "1.5",
                transform: "rotate(-90 15.5 3.5)",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "3.5",
                cy: "22.25",
                r: "1.5",
                transform: "rotate(-90 3.5 22.25)",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M3.5 14.5C4.32843 14.5 5 15.1716 5 16C5 16.8284 4.32843 17.5 3.5 17.5C2.67157 17.5 2 16.8284 2 16C2 15.1716 2.67157 14.5 3.5 14.5Z",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "3.5",
                cy: "9.75",
                r: "1.5",
                transform: "rotate(-90 3.5 9.75)",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "3.5",
                cy: "3.5",
                r: "1.5",
                transform: "rotate(-90 3.5 3.5)",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
