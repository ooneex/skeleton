use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FloppyDiskIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FloppyDiskIcon(props: FloppyDiskIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 10V6H26V10H23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 38V13.5858L34.4142 4H10C6.68629 4 4 6.68629 4 10V38C4 41.3137 6.68629 44 10 44H38C41.3137 44 44 41.3137 44 38ZM31 7H11V16H31V7ZM37 29H11V41H37V29Z",
                fill: "currentColor",
            }
        }
    }
}
