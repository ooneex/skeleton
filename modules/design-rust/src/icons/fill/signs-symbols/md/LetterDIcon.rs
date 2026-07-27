use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterDIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterDIcon(props: LetterDIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 16C26 9.37258 20.6274 4 14 4H8V28H14C20.6274 28 26 22.6274 26 16ZM28 16C28 23.732 21.732 30 14 30H6V2H14C21.732 2 28 8.26801 28 16Z",
                fill: "currentColor",
            }
        }
    }
}
