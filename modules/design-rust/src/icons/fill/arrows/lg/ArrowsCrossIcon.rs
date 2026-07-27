use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsCrossIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsCrossIcon(props: ArrowsCrossIconProps) -> Element {
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
                d: "M25.8787 20L41.4393 4.43936L43.5607 6.56068L28 22.1213L25.8787 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 29L44 44L29 44L29 41L41 41L41 29L44 29Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 19L43.9999 3.99997L28.9999 3.99997L28.9999 6.99997L40.9999 6.99997L41 19L44 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.87869 5.99998L41.4393 43.5606L43.5607 41.4393L6.00001 3.87866L3.87869 5.99998Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.8787 42L20 25.8787L22.1213 28L6.00002 44.1213L3.8787 42Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
