use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsThroughLineXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsThroughLineXIcon(props: ArrowsThroughLineXIconProps) -> Element {
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
                d: "M11 13L11 1L13 1L13 13L11 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 23L11 15L13 15L13 23L11 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.5 13L2.5 13L2.5 11L21.5 11L21.5 13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.41431 7.50003L3.9143 12L8.41431 16.5L7.00009 17.9142L1.08588 12L7.00009 6.08582L8.41431 7.50003Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.9999 17.9142L22.9141 12L16.9999 6.08582L15.5857 7.50003L20.0857 12L15.5857 16.5L16.9999 17.9142Z",
                fill: "currentColor",
            }
        }
    }
}
