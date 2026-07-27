use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChristTheRedeemerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChristTheRedeemerIcon(props: ChristTheRedeemerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 21H16V17.8509L8 13.2448V21Z",
                fill: "currentColor",
            }
            path {
                d: "M8 10.937V10.5H6.94152C5.85512 10.5 4.87127 9.91513 4.34323 9H4C2.34315 9 1 7.65685 1 6V5H10V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V5H23V6C23 7.65685 21.6569 9 20 9H19.6568C19.1287 9.91513 18.1449 10.5 17.0585 10.5H16V15.5431L8 10.937Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 20H20V22H4V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
