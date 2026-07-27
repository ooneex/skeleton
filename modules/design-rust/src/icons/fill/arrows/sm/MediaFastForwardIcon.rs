use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaFastForwardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaFastForwardIcon(props: MediaFastForwardIconProps) -> Element {
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
                d: "M2.00008 2.95532V21.0446L13.6289 12L2.00008 2.95532Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.0001 2.95532V21.0446L23.6289 12L12.0001 2.95532Z",
                fill: "currentColor",
            }
        }
    }
}
