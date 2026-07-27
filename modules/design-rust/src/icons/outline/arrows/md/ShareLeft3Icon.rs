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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 3L2 16L17 29V20.32H20.32C25.6661 20.32 30 24.6539 30 30V22.68C30 16.6049 25.0751 11.68 19 11.68H17V3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
