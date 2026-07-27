use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltAutoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltAutoIcon(props: BoltAutoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23.9721 4.03462L2.57556 28.9932H16.6732L15.5279 44.4586L36.9245 19.5H22.8268L23.9721 4.03462Z",
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
