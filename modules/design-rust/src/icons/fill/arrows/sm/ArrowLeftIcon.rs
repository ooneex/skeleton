use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowLeftIcon(props: ArrowLeftIconProps) -> Element {
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
                d: "M22 13L3 13L3 11L22 11L22 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.4143 5.00003L4.41431 12L11.4143 19L10.0001 20.4142L1.58588 12L10.0001 3.58582L11.4143 5.00003Z",
                fill: "currentColor",
            }
        }
    }
}
