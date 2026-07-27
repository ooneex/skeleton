use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronRightIcon(props: ChevronRightIconProps) -> Element {
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
                d: "M14.8787 5.99998L32.8787 24L14.8787 42L17 44.1213L37.1213 24L17 3.87866L14.8787 5.99998Z",
                fill: "currentColor",
            }
        }
    }
}
