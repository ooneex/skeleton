use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterMIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterMIcon(props: LetterMIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 5.2959L16 19.6436L5 5.2959V30H3V2H4.99316L16 16.3555L27.0068 2H29V30H27V5.2959Z",
                fill: "currentColor",
            }
        }
    }
}
