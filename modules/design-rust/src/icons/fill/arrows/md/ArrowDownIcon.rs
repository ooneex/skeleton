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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 2L15 29H17L17 2L15 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.99991 17.5858L15.9999 27.5858L25.9999 17.5858L27.4141 19L15.9999 30.4142L4.58569 19L5.99991 17.5858Z",
                fill: "currentColor",
            }
        }
    }
}
