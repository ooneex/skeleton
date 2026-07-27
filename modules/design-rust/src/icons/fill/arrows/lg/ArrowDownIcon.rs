use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownIcon(props: ArrowDownIconProps) -> Element {
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
                d: "M22.5001 4L22.5 42H25.5L25.5001 4L22.5001 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.99998 25.8787L24 39.8787L38 25.8787L40.1213 28L24 44.1213L7.87866 28L9.99998 25.8787Z",
                fill: "currentColor",
            }
        }
    }
}
