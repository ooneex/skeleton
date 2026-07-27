use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareLeft3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareLeft3Icon(props: ShareLeft3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.33337 23.9999L25.5 5.00006V17.4116L29.9999 17.4116C38.2842 17.4115 45 24.1273 45 32.4116L45 45.1763L45 44.5882C45 36.8561 38.7319 30.5881 30.9999 30.5881L25.5 30.5882V43.0001L3.33337 23.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
