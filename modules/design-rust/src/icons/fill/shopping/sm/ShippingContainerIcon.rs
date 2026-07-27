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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 6V10H1V6H3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 6V10H21V6H23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 0.814697L18.8805 5.19322L17.8068 6.88054L12 3.18532L6.19321 6.88054L5.11946 5.19322L12 0.814697Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 8H1V22H23V8ZM13 12H11V18H13V12ZM18 12V18H16V12H18ZM8 12H6V18H8V12Z",
                fill: "currentColor",
            }
        }
    }
}
