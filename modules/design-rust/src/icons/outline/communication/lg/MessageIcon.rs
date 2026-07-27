use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MessageIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MessageIcon(props: MessageIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M40 5H8C5.23858 5 3 7.23858 3 10V30C3 32.7614 5.23858 35 8 35H13.5V43.5L27 35H40C42.7614 35 45 32.7614 45 30V10C45 7.23858 42.7614 5 40 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
