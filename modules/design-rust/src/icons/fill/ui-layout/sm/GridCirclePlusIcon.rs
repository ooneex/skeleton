use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridCirclePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridCirclePlusIcon(props: GridCirclePlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "17.5",
                cy: "6.5",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "6.5",
                cy: "6.5",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "6.5",
                cy: "17.5",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "22 16.5 18.5 16.5 18.5 13 16.5 13 16.5 16.5 13 16.5 13 18.5 16.5 18.5 16.5 22 18.5 22 18.5 18.5 22 18.5 22 16.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
