use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight3Icon(props: ShareRight3IconProps) -> Element {
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
                d: "M12 1.77319V8.00004C6.4772 8.00004 2.00005 12.4772 2.00005 18V22H3.00005C3.00005 18.6863 5.68634 16 10 16H12V22.2269L23.5052 12L12 1.77319Z",
                fill: "currentColor",
            }
        }
    }
}
