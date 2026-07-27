use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterXIcon(props: LetterXIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M34.9995 4V5.13086L8.48779 44H12.9995V42.709L39.4019 4H34.9995Z",
                fill: "currentColor",
            }
            path {
                d: "M13.0002 4V5.12988L39.512 44H35.0002V42.71L8.5979 4H13.0002Z",
                fill: "currentColor",
            }
        }
    }
}
