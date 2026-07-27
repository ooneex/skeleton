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
                d: "M38 24C38 14.6112 30.3888 7 21 7H13V41H21C30.3888 41 38 33.3888 38 24ZM41 24C41 35.0457 32.0457 44 21 44H10V4H21C32.0457 4 41 12.9543 41 24Z",
                fill: "currentColor",
            }
        }
    }
}
