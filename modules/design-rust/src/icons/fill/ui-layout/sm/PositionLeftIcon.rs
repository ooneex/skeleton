use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PositionLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PositionLeftIcon(props: PositionLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "21",
                cy: "12",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "21",
                cy: "7.5",
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
                cy: "3",
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
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "16.5",
                cy: "3",
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
                cx: "16.5",
                cy: "21",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "2",
                width: "7",
                height: "20",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
