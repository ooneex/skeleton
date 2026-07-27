use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterLIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterLIcon(props: LetterLIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 4H16V41H38V44H13V4Z",
                fill: "currentColor",
            }
        }
    }
}
