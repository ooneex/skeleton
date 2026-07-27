use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TreeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TreeIcon(props: TreeIconProps) -> Element {
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
                d: "M17 24V31H15V24H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 1.2998L25.7604 14.7204L22.5805 15.2504L28.7232 26H3.27679L9.41944 15.2504L6.23956 14.7204L16 1.2998Z",
                fill: "currentColor",
            }
        }
    }
}
