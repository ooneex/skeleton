use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpRightIcon(props: ArrowUpRightIconProps) -> Element {
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
                d: "M4.8787 41L39.4393 6.4393L41.5607 8.56062L7.00002 43.1213L4.8787 41Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39 24V9H24V6H42V24H39Z",
                fill: "currentColor",
            }
        }
    }
}
