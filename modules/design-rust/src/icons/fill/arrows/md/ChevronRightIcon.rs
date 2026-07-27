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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.58588 3.00003L22.5859 16L9.58588 29L11.0001 30.4142L25.4143 16L11.0001 1.58582L9.58588 3.00003Z",
                fill: "currentColor",
            }
        }
    }
}
