use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretUpFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretUpFromLineIcon(props: CaretUpFromLineIconProps) -> Element {
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
                d: "M44 39L4 39L4 42L44 42L44 39Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M41 34L7 34L24 8L41 34Z",
                fill: "currentColor",
            }
        }
    }
}
