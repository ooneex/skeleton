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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 19L22 19L22 21L2 21L2 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.13159 17L12.0001 2.19722L21.8686 17L2.13159 17Z",
                fill: "currentColor",
            }
        }
    }
}
