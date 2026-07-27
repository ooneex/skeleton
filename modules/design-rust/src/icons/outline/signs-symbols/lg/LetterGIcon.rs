use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterGIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterGIcon(props: LetterGIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35.2454 9.16724C32.1643 6.55971 28.2533 5 23.9972 5C14.0576 5 6 13.5066 6 24C6 34.4934 14.0576 43 23.9972 43C33.6567 43 41.9944 37.7222 41.9944 26.1111C42.007 25.7643 41.9944 24 41.9944 24H27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
