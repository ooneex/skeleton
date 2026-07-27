use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterEIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterEIcon(props: LetterEIconProps) -> Element {
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
                d: "M19 2V4H8V20H19V22H6V2H19Z",
                fill: "currentColor",
            }
        }
    }
}
