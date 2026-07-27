use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpLeftIcon(props: ArrowUpLeftIconProps) -> Element {
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
                d: "M43.1213 41L8.56065 6.4393L6.43933 8.56062L41 43.1213L43.1213 41Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 24V9H24V6H6V24H9Z",
                fill: "currentColor",
            }
        }
    }
}
