use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterOIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterOIcon(props: LetterOIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.5 12C3.5 16.9706 7.30558 21 12 21C16.6944 21 20.5 16.9706 20.5 12C20.5 7.02944 16.6944 3 12 3C7.30558 3 3.5 7.02944 3.5 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
