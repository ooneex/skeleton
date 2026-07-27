use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowThroughLineUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowThroughLineUpIcon(props: ArrowThroughLineUpIconProps) -> Element {
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
                d: "M31 17L20 17L20 15L31 15L31 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.99991 10.9142L15.9999 3.91418L22.9999 10.9142L24.4141 9.49997L15.9999 1.08576L7.58569 9.49997L8.99991 10.9142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 17L1 15L16 15L16 17L1 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 30L15 30L15 2.5L17 2.5L17 30Z",
                fill: "currentColor",
            }
        }
    }
}
