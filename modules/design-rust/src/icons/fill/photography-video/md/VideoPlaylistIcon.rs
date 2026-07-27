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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 6H26V8H6V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 2H23V4H9V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 25C30 27.2091 28.2091 29 26 29L6 29C3.79086 29 2 27.2091 2 25V14C2 11.7909 3.79086 10 6 10H26C28.2091 10 30 11.7909 30 14L30 25ZM22.5156 19.5L12.5 13.7768V25.2232L22.5156 19.5Z",
                fill: "currentColor",
            }
        }
    }
}
