use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoubleChevronRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoubleChevronRightIcon(props: DoubleChevronRightIconProps) -> Element {
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
                d: "M9.58569 3.00003L18.5857 12L9.58569 21L10.9999 22.4142L21.4141 12L10.9999 1.58582L9.58569 3.00003Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.58569 3.00003L11.5857 12L2.58569 21L3.99991 22.4142L14.4141 12L3.99991 1.58582L2.58569 3.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
