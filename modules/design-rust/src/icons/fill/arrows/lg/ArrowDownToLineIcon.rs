use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownToLineIcon(props: ArrowDownToLineIconProps) -> Element {
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
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.5 4V34H25.5V4H22.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.99998 17.8787L24 31.8787L38 17.8787L40.1213 20L24 36.1213L7.87866 20L9.99998 17.8787Z",
                fill: "currentColor",
            }
        }
    }
}
