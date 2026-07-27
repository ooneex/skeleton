use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AngleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AngleIcon(props: AngleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 44L3.99999 44L3.99999 4L6.99999 4L6.99999 41L44 41L44 44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 16C22.1503 16 32 25.8497 32 38H10V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
