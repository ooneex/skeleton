use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartBarArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartBarArrowUpIcon(props: ChartBarArrowUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 15H29V30H23V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M3 22H9V30H3V22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19 30H13L13 9L9.5 9L16 1L22.5 9H19L19 30Z",
                fill: "currentColor",
            }
        }
    }
}
