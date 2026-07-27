use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AxisZIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AxisZIcon(props: AxisZIconProps) -> Element {
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
                d: "M14.0001 1V18H31.0001V20H13.4143L3.70718 29.7071L2.29297 28.2929L12.0001 18.5858V1H14.0001Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.99996 18L2 30L14 30L14 28L3.99999 28L3.99996 18L1.99996 18Z",
                fill: "currentColor",
            }
        }
    }
}
