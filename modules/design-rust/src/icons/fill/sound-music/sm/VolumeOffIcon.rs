use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VolumeOffIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VolumeOffIcon(props: VolumeOffIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 18C3.34315 18 2 16.6568 2 15V8.99999C2 7.34313 3.34315 5.99999 5 5.99999H11.7132L21 0.19574V5L8.3566 18H5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.9142 4.00003L4.5 23.4142L3.08578 22L22.5 2.58582L23.9142 4.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M21 9.74268L12.3467 18.3959L21 23.8042V9.74268Z",
                fill: "currentColor",
            }
        }
    }
}
