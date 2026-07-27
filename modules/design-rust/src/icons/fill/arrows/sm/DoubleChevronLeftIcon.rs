use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoubleChevronLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoubleChevronLeftIcon(props: DoubleChevronLeftIconProps) -> Element {
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
                d: "M14.4143 3.00003L5.41431 12L14.4143 21L13.0001 22.4142L2.58588 12L13.0001 1.58582L14.4143 3.00003Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.4143 3.00003L12.4143 12L21.4143 21L20.0001 22.4142L9.58588 12L20.0001 1.58582L21.4143 3.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
