use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridLayoutIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridLayoutIcon(props: GridLayoutIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 20L15 29L3 29L3 20L15 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M29 12L29 3L17 3L17 12L29 12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 3L15 18L3 18L3 3L15 3Z",
                fill: "currentColor",
            }
            path {
                d: "M29 29L29 14L17 14L17 29L29 29Z",
                fill: "currentColor",
            }
        }
    }
}
