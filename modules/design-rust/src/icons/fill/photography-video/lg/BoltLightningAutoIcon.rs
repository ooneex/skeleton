use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltLightningAutoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltLightningAutoIcon(props: BoltLightningAutoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.5885 3L4.745 28.4031L15.9384 28.4481L14.2296 44.1575L36.148 18.102H21.9834L25.3389 3H10.5885Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M42 41.5H34V38.5H42V41.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36.4755 30H39.523L45.4037 45H41.4999V43.2617L38.0015 34.3383L34.5 43.3015V45H30.6157L36.4755 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
