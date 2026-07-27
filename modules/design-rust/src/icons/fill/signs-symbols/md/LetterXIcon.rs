use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterXIcon(props: LetterXIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.04395 2V2.75098L26.9082 30H23.8799V29.1387L5.0918 2H8.04395Z",
                fill: "currentColor",
            }
            path {
                d: "M23.9561 2V2.75098L5.0918 30H8.12012V29.1387L26.9082 2H23.9561Z",
                fill: "currentColor",
            }
        }
    }
}
