use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaEjectIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaEjectIcon(props: MediaEjectIconProps) -> Element {
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
                d: "M4 42L44 42L44 39L4 39L4 42Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.15137 35L24 6.17268L42.8486 35L5.15137 35Z",
                fill: "currentColor",
            }
        }
    }
}
