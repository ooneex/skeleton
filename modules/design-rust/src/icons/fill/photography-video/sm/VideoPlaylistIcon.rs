use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoPlaylistIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoPlaylistIcon(props: VideoPlaylistIconProps) -> Element {
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
                d: "M19 9C20.6569 9 22 10.3431 22 12V20C22 21.6569 20.6569 23 19 23L5 23C3.34314 23 2 21.6569 2 20V12C2 10.3431 3.34315 9 5 9H19ZM15.5 16L9.5 12.5V19.5L15.5 16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 1H18V3H6V1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 5H20V7H4V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
