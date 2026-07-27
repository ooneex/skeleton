use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WindsockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WindsockIcon(props: WindsockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 2.763L12 3.83443V16.1655L7 17.237V2.763Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 1V23H3V1H5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20 14.4513L24 13.5941V6.40585L20 5.54871V14.4513Z",
                fill: "currentColor",
            }
            path {
                d: "M18 5.12014L14 4.263V15.737L18 14.8798V5.12014Z",
                fill: "currentColor",
            }
        }
    }
}
