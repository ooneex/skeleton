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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.667 15V17H8V15H19.667Z",
                fill: "currentColor",
            }
            path {
                d: "M8 2H26V4H10V30H8V2Z",
                fill: "currentColor",
            }
        }
    }
}
