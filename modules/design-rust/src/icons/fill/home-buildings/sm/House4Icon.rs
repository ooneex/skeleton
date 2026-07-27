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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "12 .662 2 9.551 2 22 10 22 10 16 14 16 14 22 22 22 22 9.551 12 .662",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
