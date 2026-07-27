use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GripDotsVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GripDotsVerticalIcon(props: GripDotsVerticalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "15.75",
                cy: "12",
                r: "1.75",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "8.25",
                cy: "12",
                r: "1.75",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "15.75",
                cy: "19.75",
                r: "1.75",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "15.75",
                cy: "4.25",
                r: "1.75",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "8.25",
                cy: "19.75",
                r: "1.75",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "8.25",
                cy: "4.25",
                r: "1.75",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
