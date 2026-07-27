use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ResizeX2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ResizeX2Icon(props: ResizeX2IconProps) -> Element {
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
                d: "M3 3V21H1V3H3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 3V21H21V3H23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.9999 16.9142L20.9141 12L15.9999 7.08582L14.5857 8.50003L18.0857 12L14.5857 15.5L15.9999 16.9142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.00009 16.9142L3.08588 12L8.00009 7.08582L9.4143 8.50003L5.91431 12L9.41431 15.5L8.00009 16.9142Z",
                fill: "currentColor",
            }
        }
    }
}
