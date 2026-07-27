use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterFIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterFIcon(props: LetterFIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 22.5V25.5H13V22.5H29Z",
                fill: "currentColor",
            }
            path {
                d: "M13 4H38V7H16V44H13V4Z",
                fill: "currentColor",
            }
        }
    }
}
