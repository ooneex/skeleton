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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44.6213 5.49998L5.49998 44.6213L3.37866 42.5L42.5 3.37866L44.6213 5.49998Z",
                fill: "currentColor",
            }
        }
    }
}
