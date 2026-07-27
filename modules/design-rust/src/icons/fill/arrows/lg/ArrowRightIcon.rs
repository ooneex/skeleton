use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowRightIcon(props: ArrowRightIconProps) -> Element {
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
                d: "M4 22.5L42 22.5L42 25.5L4 25.5L4 22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.8787 9.99998L39.8787 24L25.8787 38L28 40.1213L44.1213 24L28 7.87866L25.8787 9.99998Z",
                fill: "currentColor",
            }
        }
    }
}
