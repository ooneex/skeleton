use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownIcon(props: ArrowDownIconProps) -> Element {
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
                d: "M13 2V21H11V2H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.99991 12.5858L11.9999 19.5858L18.9999 12.5858L20.4141 14L11.9999 22.4142L3.58569 14L4.99991 12.5858Z",
                fill: "currentColor",
            }
        }
    }
}
