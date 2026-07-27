use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BorderCenterXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BorderCenterXIcon(props: BorderCenterXIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "11",
                y: "2",
                width: "2",
                height: "20",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
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
                cy: "3",
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
                cx: "16.5",
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
                cx: "21",
                cy: "3",
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
                cx: "3",
                cy: "21",
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
        }
    }
}
