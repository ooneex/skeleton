use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretLeftToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretLeftToLineIcon(props: CaretLeftToLineIconProps) -> Element {
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
                d: "M3 30L5 30L5 2L3 2L3 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 2.13147L8.19723 16L29 29.8685L29 2.13147Z",
                fill: "currentColor",
            }
        }
    }
}
