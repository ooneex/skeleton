use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterWIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterWIcon(props: LetterWIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.1394 3H3L8 29H8.5L15.3333 9.77778H16.6667L23.5 29H24L29 3H28.8837",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
