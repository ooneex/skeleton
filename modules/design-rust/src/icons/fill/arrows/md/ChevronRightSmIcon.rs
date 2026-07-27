use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronRightSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronRightSmIcon(props: ChevronRightSmIconProps) -> Element {
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
                d: "M12.5857 10L18.5857 16L12.5857 22L13.9999 23.4142L21.4141 16L13.9999 8.58582L12.5857 10Z",
                fill: "currentColor",
            }
        }
    }
}
