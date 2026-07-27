use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Lipstick2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Lipstick2Icon(props: Lipstick2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 16H6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20L21 12H14L14 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.00001 20C3.00001 20.5523 3.44772 21 4.00001 21H9C9.55228 21 10 20.5523 10 20L9.99999 12H3L3.00001 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 8V6.1723C4 4.76868 4.4921 3.40948 5.39067 2.33119L5.73178 1.92186C6.13157 1.44211 6.86843 1.44211 7.26822 1.92187L7.60933 2.33119C8.5079 3.40948 9 4.76868 9 6.1723V8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
