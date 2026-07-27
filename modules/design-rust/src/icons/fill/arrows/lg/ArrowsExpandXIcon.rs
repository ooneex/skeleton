use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandXIcon(props: ArrowsExpandXIconProps) -> Element {
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
                d: "M14.1213 33L5.12134 24L14.1213 15L12 12.8787L0.878698 24L12 35.1213L14.1213 33Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 25.5L3 25.5L3 22.5L21 22.5L21 25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33.8787 33L42.8787 24L33.8787 15L36 12.8787L47.1213 24L36 35.1213L33.8787 33Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 25.5L45 25.5L45 22.5L27 22.5L27 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
