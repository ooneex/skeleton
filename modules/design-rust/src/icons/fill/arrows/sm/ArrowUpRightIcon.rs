use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpRightIcon(props: ArrowUpRightIconProps) -> Element {
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
                d: "M2.58571 20L19.2928 3.29286L20.707 4.70708L3.99992 21.4142L2.58571 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 12V5H12V3H21V12H19Z",
                fill: "currentColor",
            }
        }
    }
}
