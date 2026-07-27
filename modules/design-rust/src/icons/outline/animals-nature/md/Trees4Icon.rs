use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Trees4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Trees4Icon(props: Trees4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 21.3333V30M11 21.3333L8.33333 18.6667M11 21.3333L13.6667 18.6667",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25 28V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11 26C15.4183 26 19 22.4183 19 18C19 9.58172 11 2 11 2C11 2 3.00001 9.58172 3.00001 18C3.00001 22.4183 6.58173 26 11 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25 28C27.2091 28 29 26.2091 29 24C29 19.7909 25 16 25 16C25 16 21 19.7909 21 24C21 26.2091 22.7908 28 25 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
