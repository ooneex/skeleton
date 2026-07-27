use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FlipVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FlipVerticalIcon(props: FlipVerticalIconProps) -> Element {
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
                d: "M23 13L1 13L1 11L23 11L23 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19.3028 9.00011L6 0.131592V9.00011L19.3028 9.00011Z",
                fill: "currentColor",
            }
            path {
                d: "M19.3028 15L6 23.8685V15H19.3028Z",
                fill: "currentColor",
            }
        }
    }
}
