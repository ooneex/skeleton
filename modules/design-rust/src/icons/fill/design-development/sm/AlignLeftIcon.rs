use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlignLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlignLeftIcon(props: AlignLeftIconProps) -> Element {
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
                d: "M2 23L2 1L4 1L4 23L2 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22 5H6V10H22V5Z",
                fill: "currentColor",
            }
            path {
                d: "M16 14H6V19H16V14Z",
                fill: "currentColor",
            }
        }
    }
}
