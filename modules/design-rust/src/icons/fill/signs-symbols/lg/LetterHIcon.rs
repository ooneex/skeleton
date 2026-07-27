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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38 22.5V25.5H10V22.5H38Z",
                fill: "currentColor",
            }
            path {
                d: "M10 4H13V44H10V4Z",
                fill: "currentColor",
            }
            path {
                d: "M35 4H38V44H35V4Z",
                fill: "currentColor",
            }
        }
    }
}
