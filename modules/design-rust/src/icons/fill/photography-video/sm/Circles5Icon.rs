use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Circles5IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Circles5Icon(props: Circles5IconProps) -> Element {
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
                cy: "12",
                r: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "3.5",
                cy: "3.5",
                r: "1.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "20.5",
                cy: "3.5",
                r: "1.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "3.5",
                cy: "20.5",
                r: "1.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "20.5",
                cy: "20.5",
                r: "1.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
