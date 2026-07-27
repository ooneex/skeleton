use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaSkipToEndIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaSkipToEndIcon(props: MediaSkipToEndIconProps) -> Element {
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
                d: "M3 6.93645V41.0635L24.6138 24L3 6.93645Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24.5 6.93645V41.0635L46.1138 24L24.5 6.93645Z",
                fill: "currentColor",
            }
        }
    }
}
