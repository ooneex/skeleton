use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterZIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterZIcon(props: LetterZIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 2L27 4.44727L7.23535 28L27 28L27 30L5 30L5 27.5527L24.7656 4L5 4L5 2L27 2Z",
                fill: "currentColor",
            }
        }
    }
}
