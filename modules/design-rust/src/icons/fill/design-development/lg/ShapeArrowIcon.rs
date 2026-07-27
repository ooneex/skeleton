use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeArrowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeArrowIcon(props: ShapeArrowIconProps) -> Element {
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
                d: "M4.37857 41.5L41.4392 4.43936L43.5605 6.56068L6.49989 43.6213L4.37857 41.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 24V7H24V4H44V24H41Z",
                fill: "currentColor",
            }
        }
    }
}
