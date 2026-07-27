use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjUpIcon(props: MoveObjUpIconProps) -> Element {
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
                d: "M2 22L2 14L22 14L22 22L2 22Z",
                fill: "currentColor",
            }
            path {
                d: "M7.5001 8.41421L6.08588 7L12.0001 1.08579L17.9143 6.99996L16.5001 8.41418L13.0001 4.9142L13.0001 12L11.0001 12L11.0001 4.91423L7.5001 8.41421Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
