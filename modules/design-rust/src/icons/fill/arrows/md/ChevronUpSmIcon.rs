use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronUpSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronUpSmIcon(props: ChevronUpSmIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.99991 19.4142L15.9999 13.4142L21.9999 19.4142L23.4141 18L15.9999 10.5858L8.58569 18L9.99991 19.4142Z",
                fill: "currentColor",
            }
        }
    }
}
