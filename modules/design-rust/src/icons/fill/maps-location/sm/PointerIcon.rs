use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PointerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PointerIcon(props: PointerIconProps) -> Element {
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
                d: "M2.68994 2.68994L23.9787 8.95134L13.7517 13.7517L8.95134 23.9787L2.68994 2.68994Z",
                fill: "currentColor",
            }
        }
    }
}
