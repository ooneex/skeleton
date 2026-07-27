use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterSIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterSIcon(props: LetterSIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35 5H19.5C14.2533 5 10 9.2533 10 14.5V14.5C10 19.7467 14.2533 24 19.5 24H28.5C33.7467 24 38 28.2533 38 33.5V33.5C38 38.7467 33.7467 43 28.5 43H13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
