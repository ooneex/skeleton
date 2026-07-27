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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 11V13H6V11H15Z",
                fill: "currentColor",
            }
            path {
                d: "M6 2H19V4H8V22H6V2Z",
                fill: "currentColor",
            }
        }
    }
}
