use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaFastBackwardsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaFastBackwardsIcon(props: MediaFastBackwardsIconProps) -> Element {
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
                d: "M22 2.95532V21.0446L10.3712 12L22 2.95532Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 2.95532V21.0446L0.371216 12L12 2.95532Z",
                fill: "currentColor",
            }
        }
    }
}
