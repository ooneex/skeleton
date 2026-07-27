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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 21V3H13.5C16.5376 3 19 5.46243 19 8.5V8.5C19 11.5376 16.5376 14 13.5 14H7.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
