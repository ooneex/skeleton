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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 22.5V25.5H13V22.5H29Z",
                fill: "currentColor",
            }
            path {
                d: "M38 4V7H16V41H38V44H13V4H38Z",
                fill: "currentColor",
            }
        }
    }
}
