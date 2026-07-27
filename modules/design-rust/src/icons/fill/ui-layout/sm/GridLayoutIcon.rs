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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 22L2 22V15H11V22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22 2H13V9L22 9V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11 13H2V2H11V13Z",
                fill: "currentColor",
            }
            path {
                d: "M22 11H13V22H22V11Z",
                fill: "currentColor",
            }
        }
    }
}
