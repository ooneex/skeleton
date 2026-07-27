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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.75 3H12.25L5.03999 27.72L6.95999 28.28H25.04L26.96 27.72L19.75 3ZM22.0417 18L22.625 20H9.37499L9.95832 18H22.0417ZM20.2917 12L20.875 14H11.125L11.7083 12H20.2917Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.00001 27H30V29H2.00001V27Z",
                fill: "currentColor",
            }
        }
    }
}
