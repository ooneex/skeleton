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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 15L29.5 3L39 15L32.5 15L20 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 30H22V44H15V30Z",
                fill: "currentColor",
            }
            path {
                d: "M26 14H33V44H26V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M37 22L44 22V44H37V22Z",
                fill: "currentColor",
            }
            path {
                d: "M4 21H11V44H4V21Z",
                fill: "currentColor",
            }
        }
    }
}
