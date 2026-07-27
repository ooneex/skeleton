use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PositionBottomRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PositionBottomRightIcon(props: PositionBottomRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "12",
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
                cx: "16.5",
                cy: "3",
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
                cx: "21",
                cy: "3",
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
            circle {
                cx: "3",
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
                cx: "21",
                cy: "7.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            rect {
                x: "12",
                y: "12",
                width: "9",
                height: "9",
                transform: "translate(0 33) rotate(-90)",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
