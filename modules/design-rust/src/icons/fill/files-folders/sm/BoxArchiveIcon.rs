use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoxArchiveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoxArchiveIcon(props: BoxArchiveIconProps) -> Element {
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
                d: "M1 8L1 2L23 2L23 8L1 8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 19C22 20.6569 20.6569 22 19 22L5 22C3.34315 22 2 20.6569 2 19V10L22 10L22 19ZM15 14V12L9 12V14L15 14Z",
                fill: "currentColor",
            }
        }
    }
}
