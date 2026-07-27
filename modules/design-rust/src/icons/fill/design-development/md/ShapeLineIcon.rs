use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeLineIcon(props: ShapeLineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.4142 2.99991L3.00003 30.4141L1.58582 28.9999L29 1.58569L30.4142 2.99991Z",
                fill: "currentColor",
            }
        }
    }
}
