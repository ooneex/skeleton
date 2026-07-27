use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjLeftIcon(props: MoveObjLeftIconProps) -> Element {
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
                d: "M22 22L14 22L14 2L22 2L22 22Z",
                fill: "currentColor",
            }
            path {
                d: "M8.41424 16.5L7.00003 17.9142L1.08582 12L6.99999 6.08582L8.41421 7.50002L4.91423 11L12 11V13L4.91425 13L8.41424 16.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
