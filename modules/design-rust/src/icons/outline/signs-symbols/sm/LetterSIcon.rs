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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 3H10C7.51472 3 5.5 5.01472 5.5 7.5V7.5C5.5 9.98528 7.51472 12 10 12H14C16.4853 12 18.5 14.0147 18.5 16.5V16.5C18.5 18.9853 16.4853 21 14 21H7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
