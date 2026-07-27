use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsReduceXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsReduceXIcon(props: ArrowsReduceXIconProps) -> Element {
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
                d: "M47 25.5L28 25.5L28 22.5L47 22.5L47 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.87866 33L17.8787 24L8.87866 15L11 12.8787L22.1213 24L11 35.1213L8.87866 33Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39.1213 33L30.1213 24L39.1213 15L37 12.8787L25.8787 24L37 35.1213L39.1213 33Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 25.5L20 25.5L20 22.5L1 22.5L1 25.5Z",
                fill: "currentColor",
            }
        }
    }
}
