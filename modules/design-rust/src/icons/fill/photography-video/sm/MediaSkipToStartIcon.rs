use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaSkipToStartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaSkipToStartIcon(props: MediaSkipToStartIconProps) -> Element {
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
                d: "M22 2.7962V21.2037L11.4814 12L22 2.7962Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5 2.7962V21.2037L0.981415 12L11.5 2.7962Z",
                fill: "currentColor",
            }
        }
    }
}
