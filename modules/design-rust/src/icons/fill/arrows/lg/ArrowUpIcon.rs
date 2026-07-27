use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpIcon(props: ArrowUpIconProps) -> Element {
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
                d: "M22.5 44L22.5 6H25.5L25.5 44L22.5 44Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.99998 22.1213L24 8.12134L38 22.1213L40.1213 20L24 3.8787L7.87866 20L9.99998 22.1213Z",
                fill: "currentColor",
            }
        }
    }
}
