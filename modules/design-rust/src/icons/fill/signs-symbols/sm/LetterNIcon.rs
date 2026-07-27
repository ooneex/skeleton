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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 2H6.09863L18 18.6934V2H20V22H17.9014L6 5.30566V22H4V2Z",
                fill: "currentColor",
            }
        }
    }
}
