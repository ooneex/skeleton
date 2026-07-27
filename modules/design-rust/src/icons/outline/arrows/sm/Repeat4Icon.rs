use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Repeat4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Repeat4Icon(props: Repeat4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 6H16C19.314 6 22 8.686 22 12C22 15.314 19.314 18 16 18H14L16.5 20.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 18H8C4.686 18 2 15.314 2 12C2 8.686 4.686 6 8 6H10L7.5 3.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
