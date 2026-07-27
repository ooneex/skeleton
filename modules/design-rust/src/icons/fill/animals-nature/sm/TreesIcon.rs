use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TreesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TreesIcon(props: TreesIconProps) -> Element {
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
                d: "M12 0.651463L17.3842 12.0927L15.7246 12.6459L17.8258 20H6.17432L8.27549 12.6459L6.61593 12.0927L12 0.651463Z",
                fill: "currentColor",
            }
            path {
                d: "M19.3343 18H23.9276L21.7908 12.1238L23.41 11.5841L18.0797 0.923431L15.9829 4.41807L20.1524 13.2782L18.1737 13.9377L19.3343 18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M8.01713 4.41809L5.92034 0.923431L0.590019 11.5841L2.20919 12.1238L0.0723877 18H4.66572L5.82637 13.9377L3.84769 13.2782L8.01713 4.41809Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 18V24H11V18H13Z",
                fill: "currentColor",
            }
        }
    }
}
