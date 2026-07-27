use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterCIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterCIcon(props: LetterCIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 5C17.4181 3.7492 15.4038 3 13.2104 3C8.12364 3 4 7.02944 4 12C4 16.9706 8.12364 21 13.2104 21C15.4038 21 17.4181 20.2508 19 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
