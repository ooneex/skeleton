use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlignTopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlignTopIcon(props: AlignTopIconProps) -> Element {
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
                d: "M1 3L31 3L31 5L1 5L1 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M25 30L25 7L18 7L18 30L25 30Z",
                fill: "currentColor",
            }
            path {
                d: "M14 20L14 7L7 7L7 20L14 20Z",
                fill: "currentColor",
            }
        }
    }
}
