use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterCIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterCIcon(props: LetterCIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38 9.22222C34.8363 6.58164 30.8076 5 26.4208 5C16.2473 5 8 13.5066 8 24C8 34.4934 16.2473 43 26.4208 43C30.8076 43 34.8363 41.4184 38 38.7778",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
