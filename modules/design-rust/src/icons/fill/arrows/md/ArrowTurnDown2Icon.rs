use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTurnDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTurnDown2Icon(props: ArrowTurnDown2IconProps) -> Element {
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
                d: "M20 4C15.0294 4 11 8.02944 11 13V29.5H9V13C9 6.92487 13.9249 2 20 2H30V4H20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.99991 21.0858L9.99991 28.0858L16.9999 21.0858L18.4141 22.5L9.99991 30.9142L1.58569 22.5L2.99991 21.0858Z",
                fill: "currentColor",
            }
        }
    }
}
