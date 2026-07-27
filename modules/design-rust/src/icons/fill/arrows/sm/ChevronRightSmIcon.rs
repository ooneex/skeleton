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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.4999 6.58582L15.9141 12L10.4999 17.4142L9.08569 16L13.0857 12L9.08569 8.00003L10.4999 6.58582Z",
                fill: "currentColor",
            }
        }
    }
}
