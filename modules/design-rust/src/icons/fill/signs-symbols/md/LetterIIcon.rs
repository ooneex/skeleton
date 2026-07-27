use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterIIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterIIcon(props: LetterIIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 2H17V30H15V2Z",
                fill: "currentColor",
            }
        }
    }
}
