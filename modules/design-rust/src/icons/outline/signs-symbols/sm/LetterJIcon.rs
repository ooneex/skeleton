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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 15V15.5C6 18.5376 8.46243 21 11.5 21V21C14.5376 21 17 18.5376 17 15.5V3H13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
