use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowLeftToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowLeftToLineIcon(props: ArrowLeftToLineIconProps) -> Element {
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
                d: "M9.00001 4L9.00001 44L6.00001 44L6.00001 4L9.00001 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 25.5L14 25.5L14 22.5L44 22.5L44 25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.1213 38L16.1213 24L30.1213 10L28 7.8787L11.8787 24L28 40.1213L30.1213 38Z",
                fill: "currentColor",
            }
        }
    }
}
