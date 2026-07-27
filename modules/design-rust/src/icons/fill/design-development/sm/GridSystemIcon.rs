use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridSystemIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridSystemIcon(props: GridSystemIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 4H1V11L11 11V4Z",
                fill: "currentColor",
            }
            path {
                d: "M23 13H1V20L23 20V13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M23 4H13V11L23 11V4Z",
                fill: "currentColor",
            }
        }
    }
}
