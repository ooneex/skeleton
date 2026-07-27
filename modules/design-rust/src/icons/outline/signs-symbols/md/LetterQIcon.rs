use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterQIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterQIcon(props: LetterQIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27.5 27.5L20 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 16C4 23.1797 9.37258 29 16 29C22.6274 29 28 23.1797 28 16C28 8.8203 22.6274 3 16 3C9.37258 3 4 8.8203 4 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
