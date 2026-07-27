use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoPlayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoPlayIcon(props: VideoPlayIconProps) -> Element {
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
                d: "M16 4H4C2.34315 4 1 5.34315 1 7V17C1 18.6569 2.34315 20 4 20H16C17.6569 20 19 18.6569 19 17V16L23 18V6L19 8V7C19 5.34315 17.6569 4 16 4ZM14 12L8 8.5V15.5L14 12Z",
                fill: "currentColor",
            }
        }
    }
}
