use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConnectionsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConnectionsIcon(props: ConnectionsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.1317 14.4539L21.6777 23.9999L12.1317 33.5458L2.58577 23.9999L12.1317 14.4539Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35.8682 14.4539L45.4142 23.9999L35.8682 33.5458L26.3223 23.9999L35.8682 14.4539Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 26.3224L33.5459 35.8683L24 45.4142L14.4541 35.8683L24 26.3224Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 2.58566L33.5459 12.1316L24 21.6775L14.4541 12.1316L24 2.58566Z",
                fill: "currentColor",
            }
        }
    }
}
