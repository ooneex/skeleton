use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoOffIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoOffIcon(props: VideoOffIconProps) -> Element {
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
                d: "M5 5C2.79086 5 1 6.79086 1 9V23C1 24.6787 2.03408 26.1159 3.5 26.7092L24.0243 6.38197C23.2909 5.53546 22.208 5 21 5H5ZM6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.4142 5L2 29.4142L0.585785 28L25 3.58578L26.4142 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M7.24265 27H21C23.2091 27 25 25.2091 25 23V22.618L31 25.618V6.38197L25 9.38197L24.7053 9.53734L7.24265 27Z",
                fill: "currentColor",
            }
        }
    }
}
