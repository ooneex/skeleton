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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.6258 0.167236L19.6817 12.1764H31.2621L13.3742 31.8327L14.3183 19.8235H2.73787L20.6258 0.167236Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 5H12V7H3V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 25H11V27H4V25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 10H6V12H0V10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
