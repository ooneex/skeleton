use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CopyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CopyIcon(props: CopyIconProps) -> Element {
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
                d: "M4 0H20V2H4V0Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 4V23H22V4H2Z",
                fill: "currentColor",
            }
        }
    }
}
