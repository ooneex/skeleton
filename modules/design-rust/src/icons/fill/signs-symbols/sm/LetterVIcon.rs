use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterVIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterVIcon(props: LetterVIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.1836 22L20.9619 2H18.4014V3.06738L12 19.5283L5.61523 3.11035V2H3.03809L10.8164 22H13.1836Z",
                fill: "currentColor",
            }
        }
    }
}
