use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlertInfoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlertInfoIcon(props: AlertInfoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 41V17C24 15.8954 23.1046 15 22 15H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 8C24.8284 8 25.5 7.32843 25.5 6.5C25.5 5.67157 24.8284 5 24 5C23.1716 5 22.5 5.67157 22.5 6.5C22.5 7.32843 23.1716 8 24 8Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
        }
    }
}
