use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterQIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterQIcon(props: LetterQIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 42L29 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7 24C7 34.4934 14.6112 43 24 43C33.3888 43 41 34.4934 41 24C41 13.5066 33.3888 5 24 5C14.6112 5 7 13.5066 7 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
