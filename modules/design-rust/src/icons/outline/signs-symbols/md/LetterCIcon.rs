use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterCIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterCIcon(props: LetterCIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 5.88889C23.7854 4.08218 20.9653 3 17.8946 3C10.7731 3 5 8.8203 5 16C5 23.1797 10.7731 29 17.8946 29C20.9653 29 23.7854 27.9178 26 26.1111",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
