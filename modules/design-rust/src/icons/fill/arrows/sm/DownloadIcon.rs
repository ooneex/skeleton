use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DownloadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DownloadIcon(props: DownloadIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 2V10H11V2H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11 10H4L2 21H22L20 10H13V14H15.5H16.5L12 18.9142L7.5 14H8.5H11V10Z",
                fill: "currentColor",
            }
        }
    }
}
