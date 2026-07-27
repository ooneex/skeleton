use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterDIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterDIcon(props: LetterDIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 5V43H21C31.4934 43 40 34.4934 40 24C40 13.5066 31.4934 5 21 5H11Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
