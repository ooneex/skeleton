use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltSpeedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltSpeedIcon(props: BoltSpeedIconProps) -> Element {
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
                d: "M16.3234 0.0866699L15.6452 9.04525H23.706L10.6766 23.9133L11.3548 14.9548H3.29402L16.3234 0.0866699Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 4H9V6H2V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 18H9V20H3V18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 8H4V10H0V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
