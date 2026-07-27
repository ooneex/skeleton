use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Reduce2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Reduce2Icon(props: Reduce2IconProps) -> Element {
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
                d: "M15.2301 4.35145L24 13.1213L32.7678 4.35352L30.6465 2.2322L24 8.87868L17.3514 2.23013L15.2301 4.35145Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.6504 45.7717L24 39.1213L17.3523 45.769L15.2309 43.6477L24 34.8787L32.7717 43.6503L30.6504 45.7717Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 17H44V20H4V17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 28H44V31H4V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
