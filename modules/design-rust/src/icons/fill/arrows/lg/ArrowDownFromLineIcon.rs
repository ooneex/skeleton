use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownFromLineIcon(props: ArrowDownFromLineIconProps) -> Element {
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
                d: "M22.5 13V42H25.5V13H22.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.99998 25.8787L24 39.8787L38 25.8787L40.1213 28L24 44.1213L7.87866 28L9.99998 25.8787Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 9L4 9.00001L4 6.00001L44 6L44 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
