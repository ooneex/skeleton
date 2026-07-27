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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 34H22V44H15V34Z",
                fill: "currentColor",
            }
            path {
                d: "M26 20H33V44H26V20Z",
                fill: "currentColor",
            }
            path {
                d: "M37 12H44V44H37V12Z",
                fill: "currentColor",
            }
            path {
                d: "M4 26H11V44H4V26Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.3077 3.96692L21.6144 12.3659L29.4335 4.44527L31.5675 6.55385L21.6164 16.6342L13.3077 8.23319L5.01173 16.6213L2.87872 14.5118L13.3077 3.96692Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33.1641 2.83594L31.7238 13.638L22.362 4.27621L33.1641 2.83594Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
