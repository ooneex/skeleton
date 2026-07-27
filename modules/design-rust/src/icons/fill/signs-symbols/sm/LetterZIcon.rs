use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterZIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterZIcon(props: LetterZIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 2L20 4.11719L19.7627 4.39746L6.52441 20L20 20L20 22L4 22L4 19.8828L4.2373 19.6025L17.4766 4L4 4L4 2L20 2Z",
                fill: "currentColor",
            }
        }
    }
}
