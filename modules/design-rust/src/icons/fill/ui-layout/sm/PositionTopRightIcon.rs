use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PositionTopRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PositionTopRightIcon(props: PositionTopRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "3",
                cy: "12",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "3",
                cy: "16.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "3",
                cy: "7.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "3",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "3",
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "21",
                cy: "16.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "21",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "12",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "7.5",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "16.5",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "7.5",
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "2",
                width: "11",
                height: "11",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
