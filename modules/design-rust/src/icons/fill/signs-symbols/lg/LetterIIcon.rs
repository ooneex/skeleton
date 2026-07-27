use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterIIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterIIcon(props: LetterIIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.5 4H25.5V44H22.5V4Z",
                fill: "currentColor",
            }
        }
    }
}
