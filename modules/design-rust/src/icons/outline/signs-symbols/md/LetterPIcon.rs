use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterPIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterPIcon(props: LetterPIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 29V3H18C22.4183 3 26 6.58172 26 11V11C26 15.4183 22.4183 19 18 19H9.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
