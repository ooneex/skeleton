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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.505 44L41.9484 4H38.0001V5.7168L23.9982 39.7744L10.0001 5.80176V4H6.01379L22.4952 44H25.505Z",
                fill: "currentColor",
            }
        }
    }
}
