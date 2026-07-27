use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTurnLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTurnLeft2Icon(props: ArrowTurnLeft2IconProps) -> Element {
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
                d: "M28 20C28 15.0294 23.9706 11 19 11L2.5 11L2.5 9L19 9C25.0751 9 30 13.9249 30 20L30 30L28 30L28 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.9142 3.00003L3.91418 10L10.9142 17L9.49997 18.4142L1.08576 10L9.49997 1.58582L10.9142 3.00003Z",
                fill: "currentColor",
            }
        }
    }
}
