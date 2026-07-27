use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct House4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn House4Icon(props: House4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "16 .738 2 11.508 2 30 13 30 13 20 19 20 19 30 30 30 30 11.508 16 .738",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
