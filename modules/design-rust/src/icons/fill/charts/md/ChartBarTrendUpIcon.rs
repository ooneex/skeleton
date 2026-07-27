use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartBarTrendUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartBarTrendUpIcon(props: ChartBarTrendUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 15H19V30H13V15Z",
                fill: "currentColor",
            }
            path {
                d: "M23 10H29V30H23V10Z",
                fill: "currentColor",
            }
            path {
                d: "M3 20H9V30H3V20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.4142 2.99219L14.0769 11.4221L8.53847 5.8221L3.00782 11.4142L1.58582 10.0078L8.53847 2.97792L14.0769 8.57792L20.9922 1.58582L22.4142 2.99219Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
