use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraScreenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraScreenIcon(props: CameraScreenIconProps) -> Element {
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
                d: "M27 6C29.2091 6 31 7.79086 31 10L31 25C31 27.2091 29.2091 29 27 29L5 29C2.79086 29 1 27.2091 1 25V10C1 7.79086 2.79086 6 5 6H8.5L11.5 2H20.5L23.5 6L27 6ZM7 12H20V23H7V12ZM25 12H23V23H25V12Z",
                fill: "currentColor",
            }
        }
    }
}
