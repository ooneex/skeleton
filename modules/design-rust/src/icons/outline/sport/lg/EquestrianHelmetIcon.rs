use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EquestrianHelmetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EquestrianHelmetIcon(props: EquestrianHelmetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M34 31C35.6569 31 37 29.6569 37 28C37 26.3431 35.6569 25 34 25C32.3431 25 31 26.3431 31 28C31 29.6569 32.3431 31 34 31Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 29V24C7 13.5066 15.5066 5 26 5V5C36.4934 5 45 13.5066 45 24V30C45 32.7614 42.7614 35 40 35H39",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M29 35H26.5139C25.5268 35 24.5617 34.7078 23.7404 34.1603L17.2596 29.8397C16.4383 29.2922 15.4732 29 14.4861 29H2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34 45V31V32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
