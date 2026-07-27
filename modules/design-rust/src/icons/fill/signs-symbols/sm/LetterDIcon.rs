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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 12C19 7.58172 15.4183 4 11 4H7V20H11C15.4183 20 19 16.4183 19 12ZM21 12C21 17.5228 16.5228 22 11 22H5V2H11C16.5228 2 21 6.47715 21 12Z",
                fill: "currentColor",
            }
        }
    }
}
