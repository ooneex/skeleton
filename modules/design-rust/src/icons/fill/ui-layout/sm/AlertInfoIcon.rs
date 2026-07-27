use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlertInfoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlertInfoIcon(props: AlertInfoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13,22h-2v-12h-3v-2h3c1.103,0,2,.897,2,2v12Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "12",
                cy: "3.5",
                r: "1.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
