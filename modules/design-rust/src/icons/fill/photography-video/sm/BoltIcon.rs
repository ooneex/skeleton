use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltIcon(props: BoltIconProps) -> Element {
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
                d: "M14.8234 0.0866699L14.1452 9.04525H22.206L9.1766 23.9133L9.85477 14.9548H1.79402L14.8234 0.0866699Z",
                fill: "currentColor",
            }
        }
    }
}
