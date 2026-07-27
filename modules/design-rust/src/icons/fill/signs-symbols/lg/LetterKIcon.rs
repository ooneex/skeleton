use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterKIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterKIcon(props: LetterKIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.6973 19.0957L39.5137 44H34.8994V42.8701L18.3027 20.9043L20.6973 19.0957Z",
                fill: "currentColor",
            }
            path {
                d: "M11 27.3691L33.833 5.0332V4H39.1787L14 28.6309V31.2246H11V27.3691Z",
                fill: "currentColor",
            }
            path {
                d: "M11 4H14V44H11V4Z",
                fill: "currentColor",
            }
        }
    }
}
