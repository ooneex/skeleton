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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 9C1 6.79086 2.79086 5 5 5H21C23.2091 5 25 6.79086 25 9V9.38197L31 6.38197V25.618L25 22.618V23C25 25.2091 23.2091 27 21 27H5C2.79086 27 1 25.2091 1 23V9ZM20.0156 16L10 10.2768V21.7232L20.0156 16Z",
                fill: "currentColor",
            }
        }
    }
}
