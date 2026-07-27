use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridCircleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridCircleIcon(props: GridCircleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "23.5",
                cy: "8.5",
                r: "6.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "8.5",
                cy: "23.5",
                r: "6.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "8.5",
                cy: "8.5",
                r: "6.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "23.5",
                cy: "23.5",
                r: "6.5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
