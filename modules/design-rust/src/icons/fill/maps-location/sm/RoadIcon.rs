use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RoadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RoadIcon(props: RoadIconProps) -> Element {
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
                d: "M19.8707 2H4.12928L1.3515 22H22.6485L19.8707 2ZM13 16H11V20H13V16ZM13 10V14H11V10H13ZM13 4H11V8.00002H13V4Z",
                fill: "currentColor",
            }
        }
    }
}
