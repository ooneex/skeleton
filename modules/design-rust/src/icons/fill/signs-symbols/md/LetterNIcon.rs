use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterNIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterNIcon(props: LetterNIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 2H7.00781L25 26.6201V2H27V30H24.9922L7 5.37891V30H5V2Z",
                fill: "currentColor",
            }
        }
    }
}
