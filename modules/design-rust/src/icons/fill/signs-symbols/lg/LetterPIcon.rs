use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterPIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterPIcon(props: LetterPIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M36 16C36 11.0294 31.9706 7 27 7H16V25H27C31.9706 25 36 20.9706 36 16ZM39 16C39 22.6274 33.6274 28 27 28H16V44H13V4H27C33.6274 4 39 9.37258 39 16Z",
                fill: "currentColor",
            }
        }
    }
}
