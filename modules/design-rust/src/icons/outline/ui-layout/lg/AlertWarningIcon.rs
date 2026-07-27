use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlertWarningIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlertWarningIcon(props: AlertWarningIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 33V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 43C24.8284 43 25.5 42.3284 25.5 41.5C25.5 40.6716 24.8284 40 24 40C23.1716 40 22.5 40.6716 22.5 41.5C22.5 42.3284 23.1716 43 24 43Z",
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
