use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterHIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterHIcon(props: LetterHIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 11V13H5V11H19Z",
                fill: "currentColor",
            }
            path {
                d: "M5 2H7V22H5V2Z",
                fill: "currentColor",
            }
            path {
                d: "M17 2H19V22H17V2Z",
                fill: "currentColor",
            }
        }
    }
}
