use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjDownIcon(props: MoveObjDownIconProps) -> Element {
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
                d: "M22 2L22 10L2 10L2 2L22 2Z",
                fill: "currentColor",
            }
            path {
                d: "M16.4998 15.5857L17.9141 16.9999L11.9999 22.9142L6.08566 17L7.49987 15.5858L10.9999 19.0857L10.9999 11.9999L12.9999 11.9999L12.9999 19.0857L16.4998 15.5857Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
