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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 18V24H11V18H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 0.833332L19.752 11.1694L17.1148 11.6968L22.3042 20H1.69574L6.88521 11.6968L4.24794 11.1694L12 0.833332Z",
                fill: "currentColor",
            }
        }
    }
}
