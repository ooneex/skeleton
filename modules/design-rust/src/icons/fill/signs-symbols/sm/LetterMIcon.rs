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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 5.33203L12 14.667L5 5.33203V22H3V2H5L12 11.334L19 2H21V22H19V5.33203Z",
                fill: "currentColor",
            }
        }
    }
}
