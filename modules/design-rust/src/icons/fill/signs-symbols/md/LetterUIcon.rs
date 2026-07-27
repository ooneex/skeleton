use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterUIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterUIcon(props: LetterUIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 19V2H7V19C7 23.9706 11.0294 28 16 28C20.9706 28 25 23.9706 25 19V2H27V19C27 25.0751 22.0751 30 16 30C9.92487 30 5 25.0751 5 19Z",
                fill: "currentColor",
            }
        }
    }
}
