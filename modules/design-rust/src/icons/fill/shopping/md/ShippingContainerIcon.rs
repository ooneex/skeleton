use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShippingContainerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShippingContainerIcon(props: ShippingContainerIconProps) -> Element {
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
                d: "M4 8V12.6667H2V8H4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 8V13H28V8H30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 12H2V29H30V12ZM17 25V16H15V25H17ZM23 16V25H21V16H23ZM11 25V16H9V25H11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 0.741089L25.9018 8.31306L24.6869 9.90177L16 3.25885L7.31311 9.90178L6.09821 8.31306L16 0.741089Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
