use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterAIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterAIcon(props: LetterAIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.1836 2L20.9619 22H18.4014V20.9326L12 4.47168L5.61523 20.8896V22H3.03809L10.8164 2H13.1836Z",
                fill: "currentColor",
            }
            path {
                d: "M16.7653 13V15L7.17639 15L7.17639 13L16.7653 13Z",
                fill: "currentColor",
            }
        }
    }
}
