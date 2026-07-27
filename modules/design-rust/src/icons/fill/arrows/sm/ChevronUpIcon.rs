use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronUpIcon(props: ChevronUpIconProps) -> Element {
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
                d: "M1.58588 16L12.0001 5.58576L22.4143 16L21.0001 17.4142L12.0001 8.41418L3.00009 17.4142L1.58588 16Z",
                fill: "currentColor",
            }
        }
    }
}
