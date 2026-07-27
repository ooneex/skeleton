use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RoadSignIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RoadSignIcon(props: RoadSignIconProps) -> Element {
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
                d: "M13 0V22H11V0H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 21H16V23H8V21Z",
                fill: "currentColor",
            }
            path {
                d: "M20.5 13H15V18H20.5L23.5 15.5L20.5 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20.5 3H15V8H20.5L23.5 5.5L20.5 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M3.5 8H9V13H3.5L0.5 10.5L3.5 8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
