use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretExpandYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretExpandYIcon(props: CaretExpandYIconProps) -> Element {
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
                d: "M24 4.33331L35 19H13L24 4.33331Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 43.6667L35 29H13L24 43.6667Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
