use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterTIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterTIcon(props: LetterTIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 2H13V22H11V2Z",
                fill: "currentColor",
            }
            path {
                d: "M20 2V4H4V2H20Z",
                fill: "currentColor",
            }
        }
    }
}
