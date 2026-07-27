use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterYIcon(props: LetterYIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 11.5458H13V21.9999H11V11.5458Z",
                fill: "currentColor",
            }
            path {
                d: "M6.04492 2V2.71484L12 10.3711L17.9453 2.72754V2H21.0449L12 13.6289L2.95508 2H6.04492Z",
                fill: "currentColor",
            }
        }
    }
}
