use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberThreeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberThreeIcon(props: NumberThreeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 5H34V6L17 20V21H26C32.0751 21 37 25.9249 37 32V32C37 38.0751 32.0751 43 26 43H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
