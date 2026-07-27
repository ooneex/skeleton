use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BorderBottomRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BorderBottomRightIcon(props: BorderBottomRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "22 22 2 22 2 20 20 20 20 2 22 2 22 22",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "12",
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
                cx: "12",
                cy: "7.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "12",
                cy: "16.5",
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
                cx: "7.5",
                cy: "3",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "16.5",
                cy: "12",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "7.5",
                cy: "12",
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
                cx: "3",
                cy: "12",
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
                cy: "16.5",
                r: "1",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
