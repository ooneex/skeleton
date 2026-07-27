use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextTrackingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextTrackingIcon(props: TextTrackingIconProps) -> Element {
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
                d: "M21.5 20H2.5V18H21.5V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 15.0858L22.9142 19L19 22.9142L17.5858 21.5L20.0858 19L17.5858 16.5L19 15.0858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 15.0858L1.08579 19L5 22.9142L6.41422 21.5L3.91422 19L6.41422 16.5L5 15.0858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 10H14V8H20V10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.8498 1H18.1502L22.4169 13H19.8984V11.8868L17 3.73499L14.1055 11.8759V13H11.5831L15.8498 1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.84978 13H8.15022L12.4169 1H9.89844V2.11316L7 10.265L4.10547 2.12414V1H1.58311L5.84978 13Z",
                fill: "currentColor",
            }
        }
    }
}
