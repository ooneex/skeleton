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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 20V21C7 25.4183 10.5817 29 15 29V29C19.4183 29 23 25.4183 23 21V3H17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
