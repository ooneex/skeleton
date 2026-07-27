use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowRightFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowRightFromLineIcon(props: ArrowRightFromLineIconProps) -> Element {
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
                d: "M13 25.5L42 25.5L42 22.5L13 22.5L13 25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.8787 38L39.8787 24L25.8787 10L28 7.8787L44.1213 24L28 40.1213L25.8787 38Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.00001 4L9.00001 44L6.00001 44L6.00001 4L9.00001 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
