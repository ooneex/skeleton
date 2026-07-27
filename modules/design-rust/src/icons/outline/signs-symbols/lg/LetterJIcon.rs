use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterJIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterJIcon(props: LetterJIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 30V31.5C11 37.8513 16.1487 43 22.5 43V43C28.8513 43 34 37.8513 34 31.5V5H25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
