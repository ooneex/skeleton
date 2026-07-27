use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PositionCenterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PositionCenterIcon(props: PositionCenterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "8",
                y: "8",
                width: "8",
                height: "8",
                transform: "translate(0 24) rotate(-90)",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "21",
                cy: "12",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "21",
                cy: "7.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "21",
                cy: "16.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "21",
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "21",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "3",
                cy: "12",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "3",
                cy: "7.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "3",
                cy: "16.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "3",
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "3",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "12",
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "16.5",
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "7.5",
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "12",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "16.5",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            circle {
                cx: "7.5",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
        }
    }
}
