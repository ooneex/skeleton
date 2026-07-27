use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretRightToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretRightToLineIcon(props: CaretRightToLineIconProps) -> Element {
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
                d: "M29 30L27 30L27 2L29 2L29 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M23.8028 16L3 2.13147L3.00001 29.8685L23.8028 16Z",
                fill: "currentColor",
            }
        }
    }
}
