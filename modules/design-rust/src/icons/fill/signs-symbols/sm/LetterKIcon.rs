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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.8926 22H16.7354V20.9199L9.67383 10.5635L11.3262 9.43652L19.8926 22Z",
                fill: "currentColor",
            }
            path {
                d: "M5 14.2803L15.7373 2.88281V2H19.3154L7 15.0723V16.5H5V14.2803Z",
                fill: "currentColor",
            }
            path {
                d: "M5 2H7V22H5V2Z",
                fill: "currentColor",
            }
        }
    }
}
