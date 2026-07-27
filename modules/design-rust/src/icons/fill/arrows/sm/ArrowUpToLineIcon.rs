use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpToLineIcon(props: ArrowUpToLineIconProps) -> Element {
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
                d: "M22 4L2 4L2 2L22 2L22 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 22L11 7L13 7L13 22L11 22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.0001 14.4142L12.0001 8.41418L6.00009 14.4142L4.58588 13L12.0001 5.58576L19.4143 13L18.0001 14.4142Z",
                fill: "currentColor",
            }
        }
    }
}
