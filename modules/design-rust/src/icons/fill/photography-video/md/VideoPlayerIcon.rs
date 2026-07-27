use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoPlayerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoPlayerIcon(props: VideoPlayerIconProps) -> Element {
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
                d: "M31 24C31 26.2091 29.2091 28 27 28L5 28C2.79086 28 1 26.2091 1 24V8C1 5.79086 2.79086 4 5 4H27C29.2091 4 31 5.79086 31 8L31 24ZM23.9437 16L11 8.23381V23.7662L23.9437 16Z",
                fill: "currentColor",
            }
        }
    }
}
