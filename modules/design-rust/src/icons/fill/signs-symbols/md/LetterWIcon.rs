use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterWIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterWIcon(props: LetterWIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.20605 30L16 10.8877L22.7939 30H24.8262L30.2109 2H27.8838V3.50781L23.5352 26.1162L17.6094 9.44238L17.3721 8.77734H14.6279L14.3906 9.44238L8.46387 26.1162L4.13965 3.62988V2H1.78906L7.17383 30H9.20605Z",
                fill: "currentColor",
            }
        }
    }
}
