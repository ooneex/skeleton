use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TrafficConeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TrafficConeIcon(props: TrafficConeIconProps) -> Element {
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
                d: "M14.7208 2H9.27924L3.05132 20.6838L20.9487 20.6838L14.7208 2ZM16.2792 13L16.9459 15H7.05409L7.72076 13H16.2792ZM14.6126 8L15.2792 10H8.72076L9.38743 8H14.6126Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 20H23V22H1V20Z",
                fill: "currentColor",
            }
        }
    }
}
