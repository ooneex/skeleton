use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsUpRightDownLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsUpRightDownLeftIcon(props: ArrowsUpRightDownLeftIconProps) -> Element {
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
                d: "M22.5 40V9H25.5V40H22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.5 22.5L39.5 22.5L39.5 25.5L9.5 25.5L9.5 22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.4999 12.0002L23.9999 3.33355L30.4999 11.9999L17.4999 12.0002Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.4999 36L23.9999 44.6667L30.4999 36.0003L17.4999 36Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35.9998 17.4999L44.6665 23.9999L36.0001 30.4999L35.9998 17.4999Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 17.4999L3.3333 23.9999L11.9997 30.4999L12 17.4999Z",
                fill: "currentColor",
            }
        }
    }
}
