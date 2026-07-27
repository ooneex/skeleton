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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 2H10V28H26V30H8V2Z",
                fill: "currentColor",
            }
        }
    }
}
